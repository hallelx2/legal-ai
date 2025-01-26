"use client";

import { useQuery } from "@tanstack/react-query";
import { Template, TemplateCategory } from "@/types/template";
import { getPredefinedTemplates } from "@/lib/apis/templates"; // Adjust path as needed

export const usePredefinedTemplates = () => {
  return useQuery<Template[], Error>({
    // Unique query key for caching
    queryKey: ["predefined-templates"],

    // Your server action as the query function
    queryFn: getPredefinedTemplates,

    // Optional configurations
    staleTime: 1000 * 60 * 5, // Data considered fresh for 5 minutes

    // Optional error handling
    retry: 2, // Retry failed requests twice

    // Transform data if needed (optional)
    select: (templates) =>
      templates.filter((template) => !template.metadata.isCustom),
  });
};

// Additional hook for filtering templates by category
export const useTemplatesByCategory = (category: TemplateCategory) => {
  const { data: templates, ...queryResult } = usePredefinedTemplates();

  const filteredTemplates =
    templates?.filter((template) => template.category === category) || [];

  return {
    ...queryResult,
    data: filteredTemplates,
  };
};
