import { DivideIcon as LucideIcon } from "lucide-react";

export enum TemplateCategory {
  BUSINESS = "business",
  EMPLOYMENT = "employment",
  REAL_ESTATE = "real_estate",
  INTELLECTUAL_PROPERTY = "intellectual_property",
  FINANCIAL = "financial",
  CUSTOM = "custom",
  HEALTHCARE = "healthcare",
  TECHNOLOGY = "technology",
  ACADEMIC = "academic",
  MEDIA = "media",
  LEGAL= "legal"
}

export interface TemplateVariable {
  id: string;
  name: string;
  type: "string" | "number" | "date" | "boolean" | "array";
  required: boolean;
  description: string;
  validation?: {
    pattern?: string;
    min?: number;
    max?: string;
    options?: string[];
  };
}

export interface TemplateSection {
  id: string;
  title: string;
  required: boolean;
  order: number;
  aiPrompt: string;
  variables: TemplateVariable[];
}

export interface SignatureLocation {
  role: string;
  email: string;
  page: string;
  x: number;
  y: number;
  required: boolean;
}

export interface Metadata {
  industry?: string;
  jurisdiction?: string;
  lastUpdated: string;
  reviewedBy?: string;
  isCustom: boolean;
  parentTemplateId?: string;
  tags: string[];
  status: "draft" | "published" | "archived";
}

export interface Customization {
  allowedSections?: string[];
  requiredSections?: string[];
  variableOverrides?: Record<string, Partial<TemplateVariable>>;
  additionalSections?: TemplateSection[];
}

export interface Template {
  _id: string;
  id: string;
  name: string;
  description: string;
  version: string;
  category: TemplateCategory;
  sections: TemplateSection[];
  defaultSignatureLocations: SignatureLocation[];
  metadata: Metadata;
  customization?: Customization;
  createdAt: string;
  updatedAt: string;
  lastUpdated?: string;
  isCustom?: boolean;
  status: string;
  icon?: typeof LucideIcon; // Added for UI purposes
}
