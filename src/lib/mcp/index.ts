import { defineMcp } from "@lovable.dev/mcp-js";
import listServicesTool from "./tools/list-services";
import getServiceTool from "./tools/get-service";
import getContactInfoTool from "./tools/get-contact-info";
import submitInquiryTool from "./tools/submit-inquiry";

export default defineMcp({
  name: "notting-hill-voyages",
  title: "Notting Hill Voyages",
  version: "0.1.0",
  instructions:
    "Tools for Notting Hill Voyages, a luxury travel, visa and study-abroad agency. Use `list_services` and `get_service` to answer questions about visa and travel offerings, `get_contact_info` for contact and booking details, and `submit_inquiry` to send a customer inquiry to the team.",
  tools: [listServicesTool, getServiceTool, getContactInfoTool, submitInquiryTool],
});
