import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { services } from "../data";

export default defineTool({
  name: "list_services",
  title: "List services",
  description:
    "List the visa services and travel programs offered by Notting Hill Voyages, optionally filtered by category.",
  inputSchema: {
    category: z
      .enum(["visa", "program"])
      .optional()
      .describe("Filter by 'visa' services or travel/study 'program' offerings."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category }) => {
    const items = category ? services.filter((s) => s.category === category) : services;
    return {
      content: [
        {
          type: "text" as const,
          text: items.map((s) => `${s.name} (${s.slug}): ${s.summary}`).join("\n\n"),
        },
      ],
      structuredContent: { services: items },
    };
  },
});
