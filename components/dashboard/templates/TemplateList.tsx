import React from "react";
import {
  FileText,
  Briefcase,
  Home,
  Brain,
  Coins,
  FileCheck,
  Stethoscope,
  Cpu,
  GraduationCap,
  Video,
} from "lucide-react";
import TemplateCard from "./TemplateCard";
import { Template, TemplateCategory } from "@/types/template";
import { usePredefinedTemplates } from "@/hooks/useTemplate";

interface TemplateListProps {
  onSelect: (template: Template) => void;
}

const categoryIcons = {
  [TemplateCategory.BUSINESS]: Briefcase,
  [TemplateCategory.EMPLOYMENT]: FileCheck,
  [TemplateCategory.REAL_ESTATE]: Home,
  [TemplateCategory.INTELLECTUAL_PROPERTY]: Brain,
  [TemplateCategory.FINANCIAL]: Coins,
  [TemplateCategory.CUSTOM]: FileText,
  [TemplateCategory.HEALTHCARE]: Stethoscope,
  [TemplateCategory.TECHNOLOGY]: Cpu,
  [TemplateCategory.ACADEMIC]: GraduationCap,
  [TemplateCategory.MEDIA]: Video,
  [TemplateCategory.LEGAL]: FileText,
};

export default function TemplateList({ onSelect }: TemplateListProps) {
  const {
    data: templates = [],
    isLoading,
    isError,
    error,
  } = usePredefinedTemplates();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">Loading templates...</p>
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-500">
          Error loading templates: {error?.message}
        </p>
      </div>
    );
  }

  // Add icons to templates
  const templatesWithIcons = templates.map((template) => ({
    ...template,
    icon: categoryIcons[template.category],
  }));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templatesWithIcons.map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
            onClick={() => onSelect(template)}
          />
        ))}
      </div>
    </div>
  );
}
