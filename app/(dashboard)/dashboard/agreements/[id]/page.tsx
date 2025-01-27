"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Download,
  Share2,
  ArrowLeft,
  Eye,
  Clock,
  CheckCircle2,
  AlertCircle,
  Send,
  Loader2,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useAgreement, useSendForSignature } from "@/hooks/useAgreements";
import { useSession } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";

export default function AgreementView() {
  const { id } = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"preview" | "history" | "details">(
    "preview",
  );
  const { data: agreement } = useAgreement(id as string);
  const { mutate: sendAgreement, isPending } = useSendForSignature();
  const { data } = useSession();
  const toast = useToast();

  const handleSendAgreement = () => {
    // If no template is selected, return early

    // Transform the form data into the backend API structure
    const apiStructure = {
      userId: data?.user.id as string,
      agreement_id: id as string,
    };

    sendAgreement(apiStructure);

    // Redirect to agreements page after sending agreement

    router.refresh();
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge variant="success">Completed</Badge>;
      case "pending_signature":
        return <Badge variant="warning">Pending Signature</Badge>;
      case "draft":
        return <Badge variant="secondary">Draft</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };
  if (agreement)
    return (
      <div className="max-w-[1600px] mx-auto ">
        <div className="flex justify-between items-center">
          <Button
            variant="secondary"
            onClick={() => router.push("/dashboard/agreements")}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Agreements
          </Button>
          <div className="flex space-x-3">
            <Button variant="secondary">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
            <Button variant="secondary">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button
              onClick={handleSendAgreement}
              variant="docsign"
              disabled={isPending}
              className="relative"
            >
              {isPending ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send for Signature
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm">
          <div className="px-6 py-4 border-b">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {agreement.title}
                </h1>
                <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                  <span>{agreement.type}</span>
                  <span>•</span>
                  <span>
                    Created {agreement.createdAt.toLocaleDateString()}
                  </span>
                  <span>•</span>
                  {getStatusBadge(agreement.status)}
                </div>
              </div>
            </div>
          </div>

          <div className="border-b">
            <nav className="flex">
              <button
                onClick={() => setActiveTab("preview")}
                className={`px-6 py-3 text-sm font-medium border-b-2 ${
                  activeTab === "preview"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <Eye className="h-4 w-4 inline mr-2" />
                Preview
              </button>
              <button
                onClick={() => setActiveTab("history")}
                className={`px-6 py-3 text-sm font-medium border-b-2 ${
                  activeTab === "history"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <Clock className="h-4 w-4 inline mr-2" />
                History
              </button>
              <button
                onClick={() => setActiveTab("details")}
                className={`px-6 py-3 text-sm font-medium border-b-2 ${
                  activeTab === "details"
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Details
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === "preview" && (
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2">
                  <div className="bg-white border rounded-lg p-8">
                    <div className="prose max-w-none">
                      <div
                        dangerouslySetInnerHTML={{ __html: agreement.content }}
                        className="overflow-y-auto max-h-[calc(100vh-12rem)] min-w-[300px] max-w-full font-sans text-gray-800 p-6"
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Card>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900 mb-4">
                        Signatures Required
                      </h3>
                      <div className="space-y-4">
                        {agreement.parties.map((party, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between"
                          >
                            <div>
                              <p className="font-medium text-gray-900">
                                {party.status}
                              </p>
                              <p className="text-sm text-gray-500">
                                {party.email}
                              </p>
                            </div>
                            {party.status === "signed" ? (
                              <CheckCircle2 className="h-5 w-5 text-green-500" />
                            ) : (
                              <AlertCircle className="h-5 w-5 text-yellow-500" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>

                  <Card>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900 mb-4">
                        Agreement Details
                      </h3>
                      <dl className="space-y-2">
                        <div>
                          <dt className="text-sm text-gray-500">Status</dt>
                          <dd className="text-sm font-medium text-gray-900">
                            {agreement.status}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-sm text-gray-500">Created</dt>
                          <dd className="text-sm font-medium text-gray-900">
                            {agreement.createdAt.toLocaleDateString()}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-sm text-gray-500">
                            Last Updated
                          </dt>
                          <dd className="text-sm font-medium text-gray-900">
                            {agreement.updatedAt.toLocaleDateString()}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-sm text-gray-500">Type</dt>
                          <dd className="text-sm font-medium text-gray-900">
                            {agreement.type}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {/* {activeTab === "history" && (
            <div className="space-y-4">
              {agreement.history.map((event, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                >
                  <Clock className="h-5 w-5 text-gray-400" />
                  <div className="flex-1">
                    <p className="text-gray-900 font-medium">{event.action}</p>
                    <p className="text-sm text-gray-500">by {event.user}</p>
                  </div>
                  <div className="text-sm text-gray-500">
                    {event.date.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          )} */}

            {activeTab === "details" && (
              <div className="grid grid-cols-2 gap-6">
                <Card>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-4">
                      Agreement Information
                    </h3>
                    <dl className="space-y-2">
                      <div>
                        <dt className="text-sm text-gray-500">Title</dt>
                        <dd className="text-sm font-medium text-gray-900">
                          {agreement.title}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm text-gray-500">Type</dt>
                        <dd className="text-sm font-medium text-gray-900">
                          {agreement.type}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm text-gray-500">Status</dt>
                        <dd className="text-sm font-medium text-gray-900">
                          {agreement.status}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </Card>

                <Card>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-4">Parties</h3>
                    <div className="space-y-4">
                      {agreement.parties.map((party, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between"
                        >
                          <div>
                            <p className="font-medium text-gray-900">
                              {party.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {party.email}
                            </p>
                          </div>
                          {getStatusBadge(party.status)}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    );
}
