import { AgreementType } from "@/types/chatbot";

export const AGREEMENT_TYPES: AgreementType[] = [
  {
    id: "nda",
    name: "Non-Disclosure Agreement (NDA)",
    description: "Protect confidential information",
    prompt:
      "Generate comprehensive advice about when to use an NDA agreement and key elements to include. Focus on: 1) Different types of NDAs 2) Essential clauses 3) Common customization needs 4) Best practices for implementation.",
  },
  {
    id: "service",
    name: "Service Agreement",
    description: "Define service terms and conditions",
    prompt:
      "Provide detailed guidance on service agreements including: 1) Key components 2) Service level specifications 3) Payment terms 4) Liability clauses 5) Termination conditions.",
  },
  {
    id: "employment",
    name: "Employment Contract",
    description: "Establish employment terms",
    prompt:
      "Explain essential elements of an employment contract including: 1) Required legal components 2) Common optional clauses 3) Compliance requirements 4) Best practices for different employment types.",
  },
];
