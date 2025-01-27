"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Plus,
  FileText,
  CheckCircle2,
  Users,
  ArrowRight,
  FileSignature,
  Send,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useAgreement, useAgreements } from "@/hooks/useAgreements";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const router = useRouter();
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const quickStats = [
    {
      label: "Active Agreements",
      value: "12",
      icon: FileText,
      trend: "+3 this month",
    },
    {
      label: "Pending Signatures",
      value: "5",
      icon: FileSignature,
      trend: "2 urgent",
    },
    {
      label: "Completed This Month",
      value: "8",
      icon: CheckCircle2,
      trend: "+15% vs last month",
    },
    {
      label: "Team Members",
      value: "6",
      icon: Users,
      trend: "2 new this week",
    },
  ];

  //   const {data:agreements, isFetching} = useAgreements(userId as string)

  const recentAgreements = [
    {
      id: "1",
      title: "Non-Disclosure Agreement",
      type: "NDA",
      status: "completed",
      party: "Tech Corp",
      updatedAt: new Date(),
    },
    {
      id: "2",
      title: "Service Agreement",
      type: "Contract",
      status: "pending_signature",
      party: "Legal Solutions Inc",
      updatedAt: new Date(Date.now() - 86400000),
    },
    {
      id: "3",
      title: "Employment Contract",
      type: "Contract",
      status: "draft",
      party: "John Smith",
      updatedAt: new Date(Date.now() - 172800000),
    },
  ];

  const recentActivity = [
    {
      id: 1,
      action: "Signed Agreement",
      description: "NDA with Tech Corp was signed by all parties",
      timestamp: new Date(Date.now() - 3600000),
      icon: CheckCircle2,
      iconColor: "text-green-500",
    },
    {
      id: 2,
      action: "Signature Request",
      description:
        "Service Agreement sent to Legal Solutions Inc for signature",
      timestamp: new Date(Date.now() - 7200000),
      icon: Send,
      iconColor: "text-blue-500",
    },
    {
      id: 3,
      action: "New Draft",
      description: "Employment Contract created and saved as draft",
      timestamp: new Date(Date.now() - 86400000),
      icon: FileText,
      iconColor: "text-gray-500",
    },
  ];

  const upcomingDeadlines = [
    {
      id: 1,
      title: "Service Agreement Review",
      due: new Date(Date.now() + 172800000),
      priority: "high",
    },
    {
      id: 2,
      title: "Contract Renewal",
      due: new Date(Date.now() + 432000000),
      priority: "medium",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header with Quick Actions */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back!</h1>
          <p className="mt-1 text-gray-600">
            Here&apos;s what&apos;s happening with your agreements
          </p>
        </div>
        <div className="flex space-x-4">
          <Button
            variant="secondary"
            onClick={() => router.push("/dashboard/agreements")}
          >
            <FileText className="h-5 w-5 mr-2" />
            View All Agreements
          </Button>
          <Button to="/dashboard/agreements/new" variant="docsign">
            <Plus className="h-5 w-5 mr-2" />
            New Agreement
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="relative overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-3xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                  </div>
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <Icon className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-500">{stat.trend}</p>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Agreements */}
        <div className="lg:col-span-2">
          <Card>
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  Recent Agreements
                </h2>
                <Button
                  variant="secondary"
                  onClick={() => router.push("/dashboard/agreements")}
                  className="text-sm"
                >
                  View All
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
              <div className="space-y-4">
                {recentAgreements.map((agreement) => (
                  <div
                    key={agreement.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    onClick={() =>
                      router.push(`/dashboard/agreements/${agreement.id}`)
                    }
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        <FileText className="h-6 w-6 text-gray-400" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {agreement.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {agreement.type} • {agreement.party}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          agreement.status === "completed"
                            ? "bg-indigo-100 text-indigo-800"
                            : agreement.status === "pending_signature"
                              ? "bg-violet-100 text-violet-800"
                              : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {agreement.status.replace("_", " ")}
                      </span>
                      <span className="text-sm text-gray-500">
                        {agreement.updatedAt.toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Activity Feed */}
          <Card className="mt-6">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                Recent Activity
              </h2>
              <div className="space-y-6">
                {recentActivity.map((activity) => {
                  const Icon = activity.icon;
                  return (
                    <div key={activity.id} className="flex space-x-4">
                      <div className={`mt-1 ${activity.iconColor}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {activity.action}
                        </p>
                        <p className="text-sm text-gray-500">
                          {activity.description}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          {activity.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Actions
              </h2>
              <div className="space-y-3">
                <button className="w-full flex items-center p-3 text-left rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <FileText className="h-5 w-5 text-teal-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      Create Agreement
                    </p>
                    <p className="text-xs text-gray-500">
                      Start from a template
                    </p>
                  </div>
                </button>
                <button className="w-full flex items-center p-3 text-left rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Send className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      Send for Signature
                    </p>
                    <p className="text-xs text-gray-500">
                      Get your document signed
                    </p>
                  </div>
                </button>
                <button className="w-full flex items-center p-3 text-left rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      Manage Team
                    </p>
                    <p className="text-xs text-gray-500">
                      Add or remove members
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </Card>

          {/* Upcoming Deadlines */}
          <Card>
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Upcoming Deadlines
              </h2>
              <div className="space-y-4">
                {upcomingDeadlines.map((deadline) => (
                  <div
                    key={deadline.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {deadline.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Due {deadline.due.toLocaleDateString()}
                      </p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        deadline.priority === "high"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {deadline.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Monthly Overview */}
          <Card>
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Monthly Overview
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Agreements Created
                  </span>
                  <span className="text-sm font-medium text-gray-900">24</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Completed</span>
                  <span className="text-sm font-medium text-gray-900">18</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Pending Review</span>
                  <span className="text-sm font-medium text-gray-900">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Expired</span>
                  <span className="text-sm font-medium text-gray-900">1</span>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">
                      Completion Rate
                    </span>
                    <span className="text-sm font-medium text-green-600">
                      75%
                    </span>
                  </div>
                  <div className="mt-2 h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-green-500 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
