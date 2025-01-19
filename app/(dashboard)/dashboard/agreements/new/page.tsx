"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FileText,
  FileType,
  File,
  Clipboard,
  FileLock,
  DollarSign,
  Calendar,
  Shield,
  Users,
  Briefcase,
  CheckCircle,
  Heart,
  ArrowLeft,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@/components/ui/Dialog"; // Assuming you're using a Dialog component for the modal

export default function CreateAgreement() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [newTemplate, setNewTemplate] = useState({
    id: "",
    title: "",
    description: "",
    icon: <FileText className="h-8 w-8" />,
  });

  const templates = [
    {
      id: "nda",
      title: "Non-Disclosure Agreement",
      description: "Protect your confidential information",
      icon: <FileText className="h-8 w-8" />,
    },
    {
      id: "service",
      title: "Service Agreement",
      description: "Define service terms and conditions",
      icon: <FileType className="h-8 w-8" />,
    },
    {
      id: "employment",
      title: "Employment Contract",
      description: "Establish terms of employment",
      icon: <Users className="h-8 w-8" />,
    },
    {
      id: "partnership",
      title: "Partnership Agreement",
      description: "Formalize the terms of a partnership",
      icon: <Briefcase className="h-8 w-8" />,
    },
    {
      id: "loan",
      title: "Loan Agreement",
      description: "Outline terms for loan agreements",
      icon: <DollarSign className="h-8 w-8" />,
    },
    {
      id: "lease",
      title: "Lease Agreement",
      description: "Define rental property terms",
      icon: <File className="h-8 w-8" />,
    },
    {
      id: "confidentiality",
      title: "Confidentiality Agreement",
      description: "Ensure sensitive information stays protected",
      icon: <FileLock className="h-8 w-8" />,
    },
    {
      id: "nda-temporary",
      title: "Temporary NDA",
      description: "Protect temporary project-related information",
      icon: <Clipboard className="h-8 w-8" />,
    },
    {
      id: "warranty",
      title: "Warranty Agreement",
      description: "Define product or service warranty terms",
      icon: <CheckCircle className="h-8 w-8" />,
    },
    {
      id: "event",
      title: "Event Agreement",
      description: "Set terms for event planning and coordination",
      icon: <Calendar className="h-8 w-8" />,
    },
    {
      id: "sponsorship",
      title: "Sponsorship Agreement",
      description: "Outline sponsorship terms for events or projects",
      icon: <Shield className="h-8 w-8" />,
    },
    {
      id: "sales",
      title: "Sales Agreement",
      description: "Document terms of sales transactions",
      icon: <DollarSign className="h-8 w-8" />,
    },
    {
      id: "marriage",
      title: "Marriage Contract",
      description: "Set legal agreements for marriage",
      icon: <Heart className="h-8 w-8" />,
    },
    {
      id: "confidentiality-medical",
      title: "Medical Confidentiality Agreement",
      description: "Ensure patient confidentiality and protection",
      icon: <FileLock className="h-8 w-8" />,
    },
    {
      id: "purchase",
      title: "Purchase Agreement",
      description: "Formalize terms of purchase transactions",
      icon: <FileType className="h-8 w-8" />,
    },
    {
      id: "nda-employee",
      title: "Employee NDA",
      description: "Ensure confidentiality for employees",
      icon: <FileText className="h-8 w-8" />,
    },
    {
      id: "franchise",
      title: "Franchise Agreement",
      description: "Outline the relationship between franchisor and franchisee",
      icon: <Briefcase className="h-8 w-8" />,
    },
    {
      id: "affiliate",
      title: "Affiliate Agreement",
      description: "Define terms for affiliate marketing partnerships",
      icon: <Users className="h-8 w-8" />,
    },
    {
      id: "consulting",
      title: "Consulting Agreement",
      description: "Set terms for consulting services",
      icon: <FileText className="h-8 w-8" />,
    },
    {
      id: "noncompete",
      title: "Non-Compete Agreement",
      description: "Ensure no competition with former employers",
      icon: <Shield className="h-8 w-8" />,
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property Agreement",
      description: "Clarify ownership of intellectual property",
      icon: <FileLock className="h-8 w-8" />,
    },
    {
      id: "joint-venture",
      title: "Joint Venture Agreement",
      description: "Define terms of a joint business venture",
      icon: <Briefcase className="h-8 w-8" />,
    },
    // Include dynamically created template
    ...(newTemplate.id ? [newTemplate] : []),
  ];

  const handleCreateTemplate = () => {
    setShowModal(true);
  };

  const handleSaveTemplate = () => {
    // Here, we would ideally save the new template data into a state or backend
    setShowModal(false);
    setStep(1);
  };

  return (
    <div>
      <Button
        variant="secondary"
        className="mb-6"
        onClick={() => router.push("/dashboard")}
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Dashboard
      </Button>

      <Card>
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Create New Agreement
          </h1>

          {step === 1 && (
            <div className="mt-6">
              <h2 className="text-lg font-medium text-gray-900">
                Choose a Template
              </h2>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => setStep(2)}
                    className="p-6 border-2 border-gray-200 rounded-lg hover:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
                  >
                    <div className="text-teal-600">{template.icon}</div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">
                      {template.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {template.description}
                    </p>
                  </button>
                ))}
                <button
                  onClick={handleCreateTemplate}
                  className="p-6 border-2 border-gray-200 rounded-lg hover:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
                >
                  <div className="text-teal-600">
                    <FileText className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">
                    Create Custom Template
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Create your own agreement template
                  </p>
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="mt-6">
              <h2 className="text-lg font-medium text-gray-900">
                Customize Agreement
              </h2>
              <div className="mt-4 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Agreement Title
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Parties Involved
                  </label>
                  <div className="mt-1 space-y-4">
                    <input
                      type="text"
                      placeholder="Party 1 (Your Company)"
                      className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-teal-500 focus:border-teal-500"
                    />
                    <input
                      type="text"
                      placeholder="Party 2"
                      className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Agreement Terms
                  </label>
                  <textarea
                    rows={6}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>

                <div className="flex justify-end space-x-4">
                  <Button variant="secondary" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button
                    variant="gradient"
                    onClick={() => router.push("/dashboard/agreements/1")}
                  >
                    Generate Agreement
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>

      <Dialog open={showModal} onClose={() => setShowModal(false)}>
        <DialogTitle>Create a Custom Template</DialogTitle>
        <DialogContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Template Title
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-teal-500 focus:border-teal-500"
                value={newTemplate.title}
                onChange={(e) =>
                  setNewTemplate({ ...newTemplate, title: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Template Description
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-teal-500 focus:border-teal-500"
                value={newTemplate.description}
                onChange={(e) =>
                  setNewTemplate({
                    ...newTemplate,
                    description: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="gradient" onClick={handleSaveTemplate}>
            Save Template
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
