import { defineTool } from "@lovable.dev/mcp-js";
import { companyInfo } from "../data";

export default defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description:
    "Get Notting Hill Voyages contact details and the consultation booking link.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text" as const,
        text: `${companyInfo.name} — ${companyInfo.tagline}\nPhone: ${companyInfo.phone}\nEmail: ${companyInfo.email}\nLocation: ${companyInfo.location}\nBook a consultation: ${companyInfo.consultationUrl}`,
      },
    ],
    structuredContent: { company: companyInfo },
  }),
});
