import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";

type RuntimeGlobals = typeof globalThis & {
  Deno?: { env?: { get?: (name: string) => string | undefined } };
  process?: { env?: Record<string, string | undefined> };
};

function runtimeEnv(name: string): string | undefined {
  const runtime = globalThis as RuntimeGlobals;
  return runtime.Deno?.env?.get?.(name) ?? runtime.process?.env?.[name];
}

function firstEnv(names: readonly string[]): string | undefined {
  for (const name of names) {
    const value = runtimeEnv(name)?.trim();
    if (value) return value;
  }
  return undefined;
}

function publishableKey(): string | undefined {
  const direct = firstEnv(["SUPABASE_PUBLISHABLE_KEY", "VITE_SUPABASE_PUBLISHABLE_KEY"]);
  if (direct) return direct;
  const keyset = runtimeEnv("SUPABASE_PUBLISHABLE_KEYS");
  if (keyset) {
    try {
      const parsed: unknown = JSON.parse(keyset);
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        const keys = parsed as Record<string, unknown>;
        const key = [keys.default, ...Object.values(keys)].find(
          (v): v is string => typeof v === "string" && v.trim().startsWith("sb_publishable_"),
        );
        if (key) return key.trim();
      }
    } catch {
      // fall through
    }
  }
  return firstEnv(["SUPABASE_ANON_KEY", "VITE_SUPABASE_ANON_KEY"]);
}

export default defineTool({
  name: "submit_inquiry",
  title: "Submit travel inquiry",
  description:
    "Send a travel, visa or study-abroad inquiry to the Notting Hill Voyages team. The team replies by email within 24 hours.",
  inputSchema: {
    name: z.string().trim().min(1).describe("Full name of the person inquiring."),
    email: z.string().trim().email().describe("Email address for the reply."),
    phone: z.string().trim().optional().describe("Contact phone number, optional."),
    destination: z
      .string()
      .trim()
      .optional()
      .describe("Destination or service of interest, e.g. 'UK visit visa'."),
    message: z.string().trim().min(1).describe("Details of the inquiry."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: true },
  handler: async (input) => {
    const url = firstEnv(["SUPABASE_URL", "VITE_SUPABASE_URL"]);
    const key = publishableKey();
    if (!url || !key) throw new ToolError("Inquiry service is not configured.");

    const response = await fetch(`${url}/functions/v1/send-inquiry`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: key,
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify(input),
    });

    if (!response.ok) {
      throw new ToolError(`Could not send the inquiry (status ${response.status}).`);
    }

    return {
      content: [
        {
          type: "text" as const,
          text: `Inquiry sent for ${input.name}. A confirmation email was sent to ${input.email} and the team will reply within 24 hours.`,
        },
      ],
      structuredContent: { submitted: true },
    };
  },
});
