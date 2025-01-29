"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Check,
  X,
  HelpCircle,
  ArrowRight,
  FileText,
  Users,
  Zap,
  Shield,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">(
    "annual",
  );

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams and startups",
      price: billingPeriod === "monthly" ? 49 : 39,
      features: [
        "Up to 5 team members",
        "100 documents per month",
        "Basic templates",
        "Email support",
        "DocuSign integration",
        "Basic analytics",
      ],
      limitations: [
        "No custom templates",
        "No API access",
        "No advanced security",
        "No custom branding",
      ],
    },
    {
      name: "Professional",
      description: "For growing businesses",
      price: billingPeriod === "monthly" ? 99 : 79,
      popular: true,
      features: [
        "Up to 20 team members",
        "500 documents per month",
        "Custom templates",
        "Priority support",
        "Advanced analytics",
        "API access",
        "Custom branding",
        "Audit logs",
      ],
      limitations: ["No enterprise security", "No dedicated support"],
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: "Custom",
      features: [
        "Unlimited team members",
        "Unlimited documents",
        "Custom templates",
        "Dedicated support",
        "Advanced analytics",
        "API access",
        "Custom branding",
        "Audit logs",
        "Enterprise security",
        "Custom integrations",
        "SLA guarantees",
        "Training sessions",
      ],
    },
  ];

  const features = [
    {
      icon: <FileText className="h-6 w-6 text-indigo-600" />,
      name: "Document Management",
      description:
        "Create, edit, and manage all your legal documents in one place",
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      name: "Team Collaboration",
      description: "Work together seamlessly with role-based access control",
    },
    {
      icon: <Zap className="h-6 w-6 text-indigo-600" />,
      name: "AI-Powered",
      description: "Get intelligent suggestions and automate repetitive tasks",
    },
    {
      icon: <Shield className="h-6 w-6 text-indigo-600" />,
      name: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/95 via-purple-900/95 to-indigo-900/95"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-200">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Choose the perfect plan for your team. All plans include DocuSign
              integration.
            </p>

            {/* Billing Toggle */}
            <div className="mt-8 inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingPeriod === "monthly"
                    ? "bg-white text-indigo-600"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("annual")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingPeriod === "annual"
                    ? "bg-white text-indigo-600"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Annual
                <span className="ml-1 text-xs">(Save 20%)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="relative">
                {plan.popular && (
                  <div className="absolute top-0 right-0 -translate-y-1/2 px-3 py-1 bg-gradient-to-r from-indigo-500 to-indigo-500 text-white text-sm font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                <div
                  className={`h-full bg-white rounded-2xl shadow-xl p-8 ${
                    plan.popular
                      ? "border-2 border-indigo-500"
                      : "border border-gray-200"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-gray-900">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-gray-600">{plan.description}</p>
                  <div className="mt-6">
                    {typeof plan.price === "number" ? (
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-gray-900">
                          ${plan.price}
                        </span>
                        <span className="ml-2 text-gray-600">/ month</span>
                      </div>
                    ) : (
                      <div className="text-4xl font-bold text-gray-900">
                        Contact Us
                      </div>
                    )}
                    {billingPeriod === "annual" &&
                      typeof plan.price === "number" && (
                        <p className="mt-1 text-sm text-green-600">
                          Save ${(plan.price * 0.2 * 12).toFixed(0)} annually
                        </p>
                      )}
                  </div>

                  <div className="mt-8">
                    <Button
                      to={plan.name === "Enterprise" ? "/contact" : "/signup"}
                      variant={plan.popular ? "gradient" : "secondary"}
                      className="w-full"
                    >
                      {plan.name === "Enterprise"
                        ? "Contact Sales"
                        : "Get Started"}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-sm font-medium text-gray-900 mb-4">
                      What's included:
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                      {plan.limitations?.map((limitation, idx) => (
                        <li key={idx} className="flex items-start">
                          <X className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-600">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600">
              All plans include these powerful features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="p-3 bg-indigo-50 rounded-lg inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.name}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I change plans later?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes
                take effect immediately.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and bank transfers for
                Enterprise plans.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you offer a free trial?
              </h3>
              <p className="text-gray-600">
                Yes, all plans come with a 14-day free trial. No credit card
                required.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What's included in the Enterprise plan?
              </h3>
              <p className="text-gray-600">
                Enterprise plans include custom features, dedicated support, and
                enterprise-grade security. Contact us for details.
              </p>
            </div>
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
                Ready to Get Started?
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Try our platform free for 14 days. No credit card required.
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
                  Talk to Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Chatbot */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-gradient-to-r from-indigo-500 to-indigo-500 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 group">
          <MessageSquare className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}
