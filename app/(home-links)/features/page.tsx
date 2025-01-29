import React from "react";
import Link from "next/link";
import {
  FileText,
  Shield,
  Zap,
  Users,
  Check,
  ArrowRight,
  FileSignature,
  MessageSquare,
  PenTool,
  Eye,
  Lock,
  Globe,
  Cloud,
  Sparkles,
  Settings,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Features() {
  const features = [
    {
      icon: <PenTool className="h-12 w-12 text-indigo-600" />,
      title: "Custom Template Builder",
      description:
        "Create and customize legal templates with our intuitive drag-and-drop builder. Add dynamic fields, conditional logic, and signature blocks.",
      benefits: [
        "Drag-and-drop interface",
        "Dynamic field insertion",
        "Conditional logic support",
        "Pre-built clause library",
      ],
    },
    {
      icon: <FileSignature className="h-12 w-12 text-indigo-600" />,
      title: "DocuSign Integration",
      description:
        "Seamless integration with DocuSign for secure, legally-binding electronic signatures. Track status and get instant notifications.",
      benefits: [
        "One-click signature requests",
        "Real-time status tracking",
        "Automatic reminders",
        "Audit trail generation",
      ],
    },
    {
      icon: <Eye className="h-12 w-12 text-indigo-600" />,
      title: "Real-time Monitoring",
      description:
        "Track document status, view signature progress, and manage all your agreements from a single dashboard.",
      benefits: [
        "Centralized dashboard",
        "Status notifications",
        "Document timeline",
        "Activity logging",
      ],
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-indigo-600" />,
      title: "AI Assistant",
      description:
        "Get instant help with our AI chatbot for template selection, document creation, and process guidance.",
      benefits: [
        "24/7 instant support",
        "Context-aware suggestions",
        "Template recommendations",
        "Process automation",
      ],
    },
  ];

  const integrations = [
    {
      icon: <FileSignature className="h-8 w-8" />,
      name: "DocuSign",
      description: "Send documents for electronic signature",
      status: "Popular",
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      name: "Dropbox",
      description: "Cloud storage integration",
      status: "New",
    },
    {
      icon: <Users className="h-8 w-8" />,
      name: "Slack",
      description: "Team collaboration and notifications",
      status: "Popular",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      name: "Zapier",
      description: "Workflow automation",
      status: "Beta",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/95 via-purple-900/95 to-indigo-900/95"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-200">
              Features that Transform Legal Work
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Everything you need to create, manage, and track legal agreements
              with DocuSign integration. Streamline your workflow with
              AI-powered assistance.
            </p>
          </div>
        </div>
      </div>

      {/* Main Features */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                <div className="relative p-8 bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="p-4 bg-indigo-50 rounded-xl inline-block mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <Check className="h-5 w-5 text-indigo-500 mr-3" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Enterprise-Grade Security
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Your data security is our top priority. We implement
                industry-leading security measures to protect your sensitive
                information.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <Shield className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      End-to-End Encryption
                    </h3>
                    <p className="text-gray-600">
                      All data is encrypted in transit and at rest
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <Lock className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      SOC 2 Type II Compliant
                    </h3>
                    <p className="text-gray-600">
                      Regular security audits and compliance checks
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <Globe className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      GDPR Compliance
                    </h3>
                    <p className="text-gray-600">
                      Full compliance with data protection regulations
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-indigo-500/20 rounded-2xl filter blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80"
                alt="Security"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Integrations */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful Integrations
              <span>
                <h2 className="text-3xl font-bold text-indigo-900 mb-4">
                  Coming Soon!
                </h2>
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Connect with your favorite tools and streamline your workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-indigo-50 rounded-lg">
                    {integration.icon}
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      integration.status === "Popular"
                        ? "bg-green-100 text-green-800"
                        : integration.status === "New"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-purple-100 text-purple-800"
                    }`}
                  >
                    {integration.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {integration.name}
                </h3>
                <p className="text-gray-600">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-indigo-500 p-12">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-600 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent animate-shine"></div>
            </div>

            <div className="relative text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Legal Workflow?
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Start streamlining your document processes with DocuSign
                integration today
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-indigo-600 font-semibold shadow-lg hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-indigo-900/30 text-white font-semibold backdrop-blur-sm hover:bg-indigo-900/40 transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
