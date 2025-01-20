"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Plus, FileText, Search } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function Dashboard() {
  const router = useRouter();

  const agreements = [
    {
      id: "1",
      title: "Non-Disclosure Agreement",
      type: "NDA",
      status: "completed",
      updatedAt: new Date(),
    },
    {
      id: "2",
      title: "Service Agreement",
      type: "Contract",
      status: "draft",
      updatedAt: new Date(),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Agreements</h1>
        <Link href="/dashboard/agreements/new">
          <Button variant="docsign">
            <Plus className="h-5 w-5 mr-2" />
            New Agreement
          </Button>
        </Link>
      </div>

      <Card className="mb-6">
        <div className="flex space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search agreements..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-teal-500 focus:border-teal-500">
            <option value="">All Types</option>
            <option value="nda">NDA</option>
            <option value="contract">Contract</option>
            <option value="agreement">Agreement</option>
          </select>
        </div>
      </Card>

      <div className="space-y-4">
        {agreements.map((agreement) => (
          <Card key={agreement.id}>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-4">
                <FileText className="h-8 w-8 text-gray-400" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {agreement.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {agreement.type} • Last updated{" "}
                    {agreement.updatedAt.toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    agreement.status === "completed"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {agreement.status}
                </span>
                <Button
                  variant="secondary"
                  onClick={() =>
                    router.push(`/dashboard/agreements/${agreement.id}`)
                  }
                >
                  View
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
