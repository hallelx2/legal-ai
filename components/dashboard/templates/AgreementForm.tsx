"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

interface AgreementFormProps {
  onBack: () => void;
  onSubmit: (data: { title: string; parties: string[]; terms: string }) => void;
}

export const AgreementForm: React.FC<AgreementFormProps> = ({
  onBack,
  onSubmit,
}) => {
  const [title, setTitle] = useState("");
  const [parties, setParties] = useState(["", ""]);
  const [terms, setTerms] = useState("");

  const handleSubmit = () => {
    onSubmit({ title, parties, terms });
  };

  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900">Customize Agreement</h2>
      <div className="mt-4 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Agreement Title
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-teal-500 focus:border-teal-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Parties Involved
          </label>
          <div className="mt-1 space-y-4">
            {parties.map((party, index) => (
              <input
                key={index}
                type="text"
                placeholder={`Party ${index + 1}`}
                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-teal-500 focus:border-teal-500"
                value={party}
                onChange={(e) => {
                  const newParties = [...parties];
                  newParties[index] = e.target.value;
                  setParties(newParties);
                }}
              />
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Agreement Terms
          </label>
          <textarea
            rows={6}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-teal-500 focus:border-teal-500"
            value={terms}
            onChange={(e) => setTerms(e.target.value)}
          />
        </div>

        <div className="flex justify-end space-x-4">
          <Button variant="secondary" onClick={onBack}>
            Back
          </Button>
          <Button variant="gradient" onClick={handleSubmit}>
            Generate Agreement
          </Button>
        </div>
      </div>
    </div>
  );
};
