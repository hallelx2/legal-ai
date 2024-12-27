"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, FileText, FileType } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function CreateAgreement() {
  const router = useRouter();
  const [step, setStep] = useState(1);

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
  ];

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
    </div>
  );
}
