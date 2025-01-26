import React from "react";
import { FileText } from "lucide-react";
import { Template } from "@/types/template";
import { Badge } from "@/components/ui/Badge";

interface TemplateCardProps {
  template: Template;
  onClick: () => void;
}

export default function TemplateCard({ template, onClick }: TemplateCardProps) {
  const Icon = template.icon || FileText;

  return (
    <button
      onClick={onClick}
      className="p-6 border-2 border-gray-200 rounded-lg hover:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors w-full text-left"
    >
      <div className="flex justify-between items-start">
        <div className="text-teal-600">
          <Icon className="h-8 w-8" />
        </div>
        <Badge
          variant={
            template.metadata.status === "published" ? "success" : "warning"
          }
        >
          {template.metadata.status}
        </Badge>
      </div>

      <h3 className="mt-4 text-lg font-medium text-gray-900">
        {template.name}
      </h3>
      <p className="mt-2 text-sm text-gray-600">{template.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {template.metadata.tags.map((tag, index) => (
          <Badge key={index} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="mt-4 text-xs text-gray-500">
        <p>Version: {template.version}</p>
        {template.metadata.lastUpdated && (
          <p>
            Last updated:{" "}
            {new Date(template.metadata.lastUpdated).toLocaleDateString()}
          </p>
        )}
      </div>
    </button>
  );
}
