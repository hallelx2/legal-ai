import React from "react";
import {
    FileText,
    FileLock,
    DollarSign,
    Users,
    Briefcase,
    Heart,
    Home,
    Globe,
    Clipboard,
    Monitor,
    Book,
    Film,
  } from "lucide-react";import { useTemplatesByCategory } from "@/hooks/useTemplate";
import { Button } from "@/components/ui/Button";
import { Template, TemplateCategory } from "@/types/template";
import { JSX } from "react";

// Mapping of icons for different template categories
const categoryIcons: Record<TemplateCategory, JSX.Element> = {
    [TemplateCategory.LEGAL]: <FileLock className="h-8 w-8" />,
    [TemplateCategory.FINANCIAL]: <DollarSign className="h-8 w-8" />,
    [TemplateCategory.EMPLOYMENT]: <Briefcase className="h-8 w-8" />,
    [TemplateCategory.REAL_ESTATE]: <Home className="h-8 w-8" />,
    [TemplateCategory.INTELLECTUAL_PROPERTY]: <Globe className="h-8 w-8" />,
    [TemplateCategory.CUSTOM]: <Heart className="h-8 w-8" />,
    [TemplateCategory.HEALTHCARE]: <Clipboard className="h-8 w-8" />,
    [TemplateCategory.TECHNOLOGY]: <Monitor className="h-8 w-8" />,
    [TemplateCategory.ACADEMIC]: <Book className="h-8 w-8" />,
    [TemplateCategory.MEDIA]: <Film className="h-8 w-8" />,
    [TemplateCategory.BUSINESS]: <FileText className="h-8 w-8" />,
  };

interface TemplateSelectionProps {
  onTemplateSelect: (template: Template) => void;
  onCreateCustomTemplate: () => void;
  category?: TemplateCategory | "general";
}

export const TemplateSelection: React.FC<TemplateSelectionProps> = ({
  onTemplateSelect,
  onCreateCustomTemplate,
  category = "general",
}) => {
  const { data: templates, isLoading, error } = useTemplatesByCategory(category as TemplateCategory);

  if (isLoading) return <div>Loading templates...</div>;
  if (error) return <div>Error loading templates</div>;

  return (
    <div className="mt-6">
      <h2 className="text-lg font-medium text-gray-900">
        Choose a {category.charAt(0).toUpperCase() + category.slice(1)} Template
      </h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates?.map((template) => (
          <button
            key={template.id}
            onClick={() => onTemplateSelect(template)}
            className="p-6 border-2 border-gray-200 rounded-lg hover:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
          >
            <div className="text-teal-600">
              {categoryIcons[template.category] || <FileText className="h-8 w-8" />}
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">{template.name}</h3>
            <p className="mt-2 text-sm text-gray-600">{template.description}</p>
          </button>
        ))}
        <button
          onClick={onCreateCustomTemplate}
          className="p-6 border-2 border-gray-200 rounded-lg hover:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
        >
          <div className="text-teal-600">
            <FileText className="h-8 w-8" />
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">Create Custom Template</h3>
          <p className="mt-2 text-sm text-gray-600">Create your own agreement template</p>
        </button>
      </div>
    </div>
  );
};
