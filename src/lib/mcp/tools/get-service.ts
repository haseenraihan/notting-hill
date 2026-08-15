import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { services } from "../data";

export default defineTool({
  name: "get_service",
  title: "Get service details",
  description:
    "Get full details for one Notting Hill Voyages service or program by its slug (see list_services).",
  inputSchema: {
    slug: z.string().trim().min(1).describe("Service slug, e.g. 'uk-visit-visa'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const service = services.find((s) => s.slug === slug.toLowerCase());
    if (!service) {
      throw new ToolError(
        `No service found with slug "${slug}". Available: ${services.map((s) => s.slug).join(", ")}`,
      );
    }
    return {
      content: [
        {
          type: "text" as const,
          text: `${service.name}\n${service.summary}\n\nHighlights:\n- ${service.highlights.join("\n- ")}\nPage: ${service.path}`,
        },
      ],
      structuredContent: { service },
    };
  },
});
