import React, { useState } from "react";
import { X, Plus, Trash2, GripVertical } from "lucide-react";
import { Input } from "@/components/ui/Input";
import {
  Template,
  TemplateCategory,
  TemplateSection,
  TemplateVariable,
  SignatureLocation,
} from "@/types/template";
import { Button } from "@/components/ui/Button";

interface CustomTemplateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (template: Partial<Template>) => void;
  existingTemplates?: Template[];
}

export default function CustomTemplateModal({
  isOpen,
  onClose,
  onSave,
  existingTemplates = [],
}: CustomTemplateModalProps) {
  const [formData, setFormData] = useState<Partial<Template>>({
    name: "",
    description: "",
    category: TemplateCategory.CUSTOM,
    version: "1.0.0",
    sections: [],
    defaultSignatureLocations: [],
    metadata: {
      isCustom: true,
      tags: [],
      status: "draft",
      lastUpdated: new Date().toISOString(),
      industry: "",
      jurisdiction: "",
    },
  });

  const [currentSection, setCurrentSection] = useState<
    Partial<TemplateSection>
  >({
    title: "",
    required: false,
    order: 0,
    aiPrompt: "",
    variables: [],
  });

  const [currentVariable, setCurrentVariable] = useState<
    Partial<TemplateVariable>
  >({
    name: "",
    type: "string",
    required: false,
    description: "",
  });

  const [currentSignature, setCurrentSignature] = useState<
    Partial<SignatureLocation>
  >({
    role: "",
    email: "",
    page: "last",
    x: 100,
    y: 500,
    required: true,
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      metadata: {
        ...formData.metadata!,
        lastUpdated: new Date().toISOString(),
      },
    });
    onClose();
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tags = e.target.value.split(",").map((tag) => tag.trim());
    setFormData((prev) => ({
      ...prev,
      metadata: {
        ...prev.metadata!,
        tags,
      },
    }));
  };

  const addSection = () => {
    if (currentSection.title) {
      const newSection: TemplateSection = {
        id: `section-${Date.now()}`,
        title: currentSection.title,
        required: currentSection.required || false,
        order: (formData.sections?.length || 0) + 1,
        aiPrompt: currentSection.aiPrompt || "",
        variables: [],
      };

      setFormData((prev) => ({
        ...prev,
        sections: [...(prev.sections || []), newSection],
      }));

      // Reset the current section form
      setCurrentSection({
        title: "",
        required: false,
        order: 0,
        aiPrompt: "",
        variables: [],
      });
    }
  };

  const addVariable = (sectionId: string) => {
    if (currentVariable.name) {
      const newVariable: TemplateVariable = {
        id: `var-${Date.now()}`,
        name: currentVariable.name,
        type: currentVariable.type || "string",
        required: currentVariable.required || false,
        description: currentVariable.description || "",
      };

      setFormData((prev) => ({
        ...prev,
        sections: prev.sections?.map((section) =>
          section.id === sectionId
            ? { ...section, variables: [...section.variables, newVariable] }
            : section,
        ),
      }));

      // Reset the current variable form
      setCurrentVariable({
        name: "",
        type: "string",
        required: false,
        description: "",
      });
    }
  };

  const addSignatureLocation = () => {
    if (currentSignature.role) {
      const newSignature: SignatureLocation = {
        role: currentSignature.role,
        email: currentSignature.email || "",
        page: currentSignature.page || "last",
        x: Number(currentSignature.x) || 100,
        y: Number(currentSignature.y) || 500,
        required: currentSignature.required || true,
      };

      setFormData((prev) => ({
        ...prev,
        defaultSignatureLocations: [
          ...(prev.defaultSignatureLocations || []),
          newSignature,
        ],
      }));

      // Reset the current signature form
      setCurrentSignature({
        role: "",
        email: "",
        page: "last",
        x: 100,
        y: 500,
        required: true,
      });
    }
  };

  const moveSection = (fromIndex: number, toIndex: number) => {
    setFormData((prev) => {
      const newSections = [...(prev.sections || [])];
      const [movedSection] = newSections.splice(fromIndex, 1);
      newSections.splice(toIndex, 0, movedSection);
      return {
        ...prev,
        sections: newSections.map((section, index) => ({
          ...section,
          order: index + 1,
        })),
      };
    });
  };

  const removeSection = (sectionId: string) => {
    setFormData((prev) => ({
      ...prev,
      sections: prev.sections?.filter((s) => s.id !== sectionId),
    }));
  };

  const removeVariable = (sectionId: string, variableId: string) => {
    setFormData((prev) => ({
      ...prev,
      sections: prev.sections?.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              variables: section.variables.filter((v) => v.id !== variableId),
            }
          : section,
      ),
    }));
  };

  const removeSignature = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      defaultSignatureLocations: prev.defaultSignatureLocations?.filter(
        (_, i) => i !== index,
      ),
    }));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={onClose}
        />

        <div className="relative bg-white rounded-xl shadow-xl max-w-4xl w-full p-6 max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              Create Custom Template
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-2 gap-6">
              <Input
                id="name"
                name="name"
                label="Template Name"
                placeholder="e.g., Consulting Agreement"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-teal-500 focus:border-teal-500"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      category: e.target.value as TemplateCategory,
                    })
                  }
                >
                  {Object.values(TemplateCategory).map((category) => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() +
                        category.slice(1).toLowerCase().replace("_", " ")}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Input
                id="description"
                name="description"
                label="Template Description"
                placeholder="Brief description of the template"
                required
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />

              <Input
                id="tags"
                name="tags"
                label="Tags (comma-separated)"
                placeholder="e.g., legal, business, confidential"
                value={formData.metadata?.tags.join(", ")}
                onChange={handleTagsChange}
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Input
                id="industry"
                name="industry"
                label="Industry"
                placeholder="e.g., Technology, Healthcare"
                value={formData.metadata?.industry}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    metadata: { ...prev.metadata!, industry: e.target.value },
                  }))
                }
              />

              <Input
                id="jurisdiction"
                name="jurisdiction"
                label="Jurisdiction"
                placeholder="e.g., United States, California"
                value={formData.metadata?.jurisdiction}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    metadata: {
                      ...prev.metadata!,
                      jurisdiction: e.target.value,
                    },
                  }))
                }
              />
            </div>

            {/* Base Template Selection */}
            {existingTemplates.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Base Template (Optional)
                </label>
                <select
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-teal-500 focus:border-teal-500"
                  value={formData.metadata?.parentTemplateId}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      metadata: {
                        ...prev.metadata!,
                        parentTemplateId: e.target.value,
                      },
                    }))
                  }
                >
                  <option value="">None</option>
                  {existingTemplates.map((template) => (
                    <option key={template.id} value={template.id}>
                      {template.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Template Sections */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Template Sections
              </h3>

              <div className="space-y-4">
                {/* Existing Sections */}
                {formData.sections && formData.sections.length > 0 ? (
                  formData.sections.map((section, index) => (
                    <div
                      key={section.id}
                      className="border rounded-lg p-4 bg-gray-50"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <button
                            type="button"
                            className="cursor-move text-gray-400 hover:text-gray-600"
                          >
                            <GripVertical className="h-5 w-5" />
                          </button>
                          <h4 className="font-medium text-gray-900">
                            {section.title}
                            {section.required && (
                              <span className="text-red-500 ml-1">*</span>
                            )}
                          </h4>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            type="button"
                            onClick={() => removeSection(section.id)}
                            className="text-red-500 hover:text-red-600"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>

                      {/* Section Variables */}
                      <div className="space-y-2 mb-4">
                        {section.variables.map((variable) => (
                          <div
                            key={variable.id}
                            className="flex items-center justify-between bg-white p-2 rounded border"
                          >
                            <div>
                              <span className="font-medium">
                                {variable.name}
                              </span>
                              <span className="text-sm text-gray-500 ml-2">
                                ({variable.type})
                              </span>
                              {variable.required && (
                                <span className="text-red-500 ml-1">*</span>
                              )}
                            </div>
                            <button
                              type="button"
                              onClick={() =>
                                removeVariable(section.id, variable.id)
                              }
                              className="text-red-500 hover:text-red-600"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Add Variable Form */}
                      <div className="grid grid-cols-4 gap-2 bg-white p-3 rounded border">
                        <Input
                          id={`var-name-${section.id}`}
                          name="varName"
                          placeholder="Variable name"
                          value={currentVariable.name}
                          onChange={(e) =>
                            setCurrentVariable((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                        />
                        <select
                          className="border border-gray-300 rounded-lg p-2 focus:ring-teal-500 focus:border-teal-500"
                          value={currentVariable.type}
                          onChange={(e) =>
                            setCurrentVariable((prev) => ({
                              ...prev,
                              type: e.target.value as TemplateVariable["type"],
                            }))
                          }
                        >
                          <option value="string">String</option>
                          <option value="number">Number</option>
                          <option value="date">Date</option>
                          <option value="boolean">Boolean</option>
                          <option value="array">Array</option>
                        </select>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id={`var-required-${section.id}`}
                            checked={currentVariable.required}
                            onChange={(e) =>
                              setCurrentVariable((prev) => ({
                                ...prev,
                                required: e.target.checked,
                              }))
                            }
                            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                          />
                          <label
                            htmlFor={`var-required-${section.id}`}
                            className="ml-2 text-sm text-gray-600"
                          >
                            Required
                          </label>
                        </div>
                        <Button
                          type="button"
                          variant="secondary"
                          onClick={() => addVariable(section.id)}
                        >
                          Add Variable
                        </Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-4 text-gray-500">
                    No sections added yet. Add your first section below.
                  </div>
                )}

                {/* Add New Section Form */}
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-4">
                    Add New Section
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      id="sectionTitle"
                      name="sectionTitle"
                      placeholder="Section title"
                      value={currentSection.title}
                      onChange={(e) =>
                        setCurrentSection((prev) => ({
                          ...prev,
                          title: e.target.value,
                        }))
                      }
                    />
                    <Input
                      id="sectionPrompt"
                      name="sectionPrompt"
                      placeholder="AI Prompt"
                      value={currentSection.aiPrompt}
                      onChange={(e) =>
                        setCurrentSection((prev) => ({
                          ...prev,
                          aiPrompt: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="mt-4 flex items-center">
                    <input
                      type="checkbox"
                      id="sectionRequired"
                      checked={currentSection.required}
                      onChange={(e) =>
                        setCurrentSection((prev) => ({
                          ...prev,
                          required: e.target.checked,
                        }))
                      }
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="sectionRequired"
                      className="ml-2 text-sm text-gray-600"
                    >
                      Required Section
                    </label>
                  </div>
                  <Button
                    type="button"
                    variant="secondary"
                    className="mt-4"
                    onClick={addSection}
                  >
                    <Plus className="h-5 w-5 mr-2" />
                    Add Section
                  </Button>
                </div>
              </div>
            </div>

            {/* Signature Locations */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Signature Locations
              </h3>

              <div className="space-y-4">
                {/* Existing Signature Locations */}
                {formData.defaultSignatureLocations &&
                formData.defaultSignatureLocations.length > 0 ? (
                  formData.defaultSignatureLocations.map((signature, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-4 bg-gray-50"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">
                            {signature.role}
                            {signature.required && (
                              <span className="text-red-500 ml-1">*</span>
                            )}
                          </p>
                          <p className="text-sm text-gray-500">
                            {signature.email || "No email set"}
                          </p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-gray-500">
                            Page: {signature.page}, Position: ({signature.x},{" "}
                            {signature.y})
                          </span>
                          <button
                            type="button"
                            onClick={() => removeSignature(index)}
                            className="text-red-500 hover:text-red-600"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-4 text-gray-500">
                    No signature locations added yet. Add your first signature
                    location below.
                  </div>
                )}

                {/* Add New Signature Location Form */}
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-4">
                    Add Signature Location
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      id="signatureRole"
                      name="signatureRole"
                      placeholder="Role (e.g., Client, Contractor)"
                      value={currentSignature.role}
                      onChange={(e) =>
                        setCurrentSignature((prev) => ({
                          ...prev,
                          role: e.target.value,
                        }))
                      }
                    />
                    <Input
                      id="signatureEmail"
                      name="signatureEmail"
                      type="email"
                      placeholder="Default email (optional)"
                      value={currentSignature.email}
                      onChange={(e) =>
                        setCurrentSignature((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <Input
                      id="signaturePage"
                      name="signaturePage"
                      placeholder="Page number or 'last'"
                      value={currentSignature.page}
                      onChange={(e) =>
                        setCurrentSignature((prev) => ({
                          ...prev,
                          page: e.target.value,
                        }))
                      }
                    />
                    <Input
                      id="signatureX"
                      name="signatureX"
                      type="number"
                      placeholder="X position"
                      value={currentSignature.x}
                      onChange={(e) =>
                        setCurrentSignature((prev) => ({
                          ...prev,
                          x: Number(e.target.value),
                        }))
                      }
                    />
                    <Input
                      id="signatureY"
                      name="signatureY"
                      type="number"
                      placeholder="Y position"
                      value={currentSignature.y}
                      onChange={(e) =>
                        setCurrentSignature((prev) => ({
                          ...prev,
                          y: Number(e.target.value),
                        }))
                      }
                    />
                  </div>
                  <div className="mt-4 flex items-center">
                    <input
                      type="checkbox"
                      id="signatureRequired"
                      checked={currentSignature.required}
                      onChange={(e) =>
                        setCurrentSignature((prev) => ({
                          ...prev,
                          required: e.target.checked,
                        }))
                      }
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="signatureRequired"
                      className="ml-2 text-sm text-gray-600"
                    >
                      Required Signature
                    </label>
                  </div>
                  <Button
                    type="button"
                    variant="secondary"
                    className="mt-4"
                    onClick={addSignatureLocation}
                  >
                    <Plus className="h-5 w-5 mr-2" />
                    Add Signature Location
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <Button type="button" variant="secondary" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" variant="gradient">
                Save Template
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
