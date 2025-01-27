"use client";
import CustomTemplateModal from "@/components/dashboard/templates/CreateTemplateModal";
import TemplateList from "@/components/dashboard/templates/TemplateList";
import { Card } from "@/components/ui/Card";
import {
  SignatureLocation,
  Template,
  TemplateVariable,
} from "@/types/template";
import { ArrowLeft, Plus, AlertCircle, UserCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useCreateAgreement } from "@/hooks/useAgreements";
import { useSession } from "next-auth/react";

export default function CreateAgreement() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [showCustomTemplate, setShowCustomTemplate] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null,
  );
  const [formData, setFormData] = useState<Record<string, any>>({});
  const createAgreementMutation = useCreateAgreement();
  const [selectedSignatureLocations, setSelectedSignatureLocations] = useState<
    SignatureLocation[]
  >([]);
  const { data: session, status } = useSession();

  const userId = session?.user?.id;


  const handleCreateAgreement = (formData: Record<string, any>) => {
    // If no template is selected, return early
    if (!selectedTemplate) return;

    // Transform the form data into the backend API structure
    const apiStructure = {
        userId: userId,
        templateId: selectedTemplate.id,
        sections: selectedTemplate.sections.map((section) => ({
          sectionId: section.id,
          variables: section.variables.map((variable) => ({
            id: variable.id,
            value: formData[variable.id] ?? "",
          })),
        })),
        signatureLocations: selectedSignatureLocations.map((location) => ({
          role: location.role,
          email: location.email,
          page: typeof location.page === 'string' ? location.page : Number(location.page),
          x: Number(location.x),
          y: Number(location.y),
          required: location.required,
        })),
      };

    createAgreementMutation.mutate(apiStructure);

  };

  const handleSignatureLocationSelect = (location: SignatureLocation) => {
    // Check if this location is already selected
    const existingLocationIndex = selectedSignatureLocations.findIndex(
      (sl) => sl.role === location.role,
    );

    if (existingLocationIndex > -1) {
      // Replace existing location
      const updatedLocations = [...selectedSignatureLocations];
      updatedLocations[existingLocationIndex] = location;
      setSelectedSignatureLocations(updatedLocations);
    } else {
      // Add new location
      setSelectedSignatureLocations((prev) => [...prev, location]);
    }
  };

  const renderSignatureLocationSelection = () => {
    if (!selectedTemplate || !selectedTemplate.defaultSignatureLocations.length)
      return null;
    return (
      <div className="border border-gray-200 rounded-lg p-6 mt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Signature Locations
        </h3>
        <div className="space-y-4">
          {selectedTemplate.defaultSignatureLocations.map((location) => (
            <div
              key={location.role}
              className="flex items-center justify-between p-3 border rounded-md"
            >
              <div className="flex items-center space-x-3">
                <UserCircle className="h-6 w-6 text-gray-500" />
                <div>
                  <p className="font-medium">{location.role}</p>
                  <p className="text-sm text-gray-500">
                    Page: {location.page}, Position: ({location.x}, {location.y}
                    )
                  </p>
                </div>
              </div>
              <Button
                variant="secondary"
                //   size="sm"
                onClick={() => {
                  const email =
                    prompt(`Enter email for ${location.role}:`) || "";
                  handleSignatureLocationSelect({
                    ...location,
                    email,
                    required: true,
                  });
                }}
              >
                Add Signer
              </Button>
            </div>
          ))}
        </div>
        {selectedSignatureLocations.length > 0 && (
          <div className="mt-4">
            <h4 className="text-md font-medium mb-2">Selected Signers</h4>
            {selectedSignatureLocations.map((location) => (
              <Badge
                key={location.role}
                variant="secondary"
                className="mr-2 mb-2"
              >
                {location.role}: {location.email}
              </Badge>
            ))}
          </div>
        )}
      </div>
    );
  };

  const handleTemplateSelect = (template: Template) => {
    setSelectedTemplate(template);
    setStep(2);

    // Initialize form data with empty values for all variables
    const initialData: Record<string, any> = {};
    template.sections.forEach((section) => {
      section.variables.forEach((variable) => {
        initialData[variable.id] = variable.type === "boolean" ? false : "";
      });
    });
    setFormData(initialData);
  };

  const handleInputChange = (variableId: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [variableId]: value,
    }));
  };

  const renderInput = (variable: TemplateVariable) => {
    switch (variable.type) {
      case "boolean":
        return (
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={variable.id}
              checked={formData[variable.id] || false}
              onChange={(e) => handleInputChange(variable.id, e.target.checked)}
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            />
            <label htmlFor={variable.id} className="text-sm text-gray-600">
              {variable.description}
            </label>
          </div>
        );

      case "number":
        return (
          <input
            type="number"
            value={formData[variable.id] || ""}
            onChange={(e) => handleInputChange(variable.id, e.target.value)}
            min={variable.validation?.min}
            max={
              variable.validation?.max
                ? Number(variable.validation.max)
                : undefined
            }
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-teal-500 focus:border-teal-500"
            placeholder={variable.description}
            required={variable.required}
          />
        );

      case "date":
        return (
          <input
            type="date"
            value={formData[variable.id] || ""}
            onChange={(e) => handleInputChange(variable.id, e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-teal-500 focus:border-teal-500"
            required={variable.required}
          />
        );

      case "array":
        return (
          <textarea
            value={formData[variable.id] || ""}
            onChange={(e) => handleInputChange(variable.id, e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-teal-500 focus:border-teal-500"
            placeholder="Enter items separated by commas"
            required={variable.required}
            rows={3}
          />
        );

      default:
        return (
          <input
            type="text"
            value={formData[variable.id] || ""}
            onChange={(e) => handleInputChange(variable.id, e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-teal-500 focus:border-teal-500"
            placeholder={variable.description}
            required={variable.required}
          />
        );
    }
  };

  return (
    <div>
      <Button
        variant="secondary"
        className="mb-6"
        onClick={() => router.push("/dashboard/agreements")}
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Agreements
      </Button>

      <Card>
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Create New Agreement
          </h1>

          {step === 1 && (
            <div className="mt-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium text-gray-900">
                  Choose a Template
                </h2>
                <Button
                  variant="secondary"
                  onClick={() => setShowCustomTemplate(true)}
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Custom Template
                </Button>
              </div>
              <TemplateList onSelect={handleTemplateSelect} />
            </div>
          )}

          {step === 2 && selectedTemplate && (
            <div className="mt-6">
              <div className="mb-6">
                <h2 className="text-lg font-medium text-gray-900">
                  Customize {selectedTemplate.name}
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  {selectedTemplate.description}
                </p>

                {selectedTemplate.metadata.jurisdiction && (
                  <Badge variant="secondary" className="mt-2">
                    Jurisdiction: {selectedTemplate.metadata.jurisdiction}
                  </Badge>
                )}
              </div>

              <form className="space-y-8">
                {selectedTemplate.sections
                  .sort((a, b) => a.order - b.order)
                  .map((section) => (
                    <div
                      key={section.id}
                      className="border border-gray-200 rounded-lg p-6"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">
                            {section.title}
                            {section.required && (
                              <span className="text-red-500 ml-1">*</span>
                            )}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            {section.aiPrompt}
                          </p>
                        </div>
                        {section.required && (
                          <Badge variant="warning" className="ml-2">
                            Required
                          </Badge>
                        )}
                      </div>

                      <div className="space-y-4">
                        {section.variables.map((variable) => (
                          <div key={variable.id}>
                            <label className="block text-sm font-medium text-gray-700">
                              {variable.name}
                              {variable.required && (
                                <span className="text-red-500 ml-1">*</span>
                              )}
                            </label>
                            {renderInput(variable)}
                            {variable.validation?.pattern && (
                              <div className="mt-1 flex items-center text-sm text-gray-500">
                                <AlertCircle className="h-4 w-4 mr-1" />
                                Format required: {variable.validation.pattern}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                {renderSignatureLocationSelection()}

                <div className="flex justify-end space-x-4">
                  <Button variant="secondary" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button
                    variant="docsign"
                    onClick={() => handleCreateAgreement(formData)}
                    disabled={
                      createAgreementMutation.isPending ||
                      selectedSignatureLocations.length === 0
                    }
                  >
                    Generate Agreement
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </Card>

      <CustomTemplateModal
        isOpen={showCustomTemplate}
        onClose={() => setShowCustomTemplate(false)}
        onSave={() => {}}
      />
    </div>
  );
}
