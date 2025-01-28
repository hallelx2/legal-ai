"use client";

import React from "react";
import Link from "next/link";
import {
  FileText,
  ArrowRight,
  CheckCircle,
  FileSignature,
  MessageSquare,
  PenTool,
  Mail,
  Eye,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  const features = [
    {
      icon: <PenTool className="h-8 w-8 text-indigo-600" />,
      title: "Custom Template Builder",
      description:
        "Create and customize your own templates with our intuitive drag-and-drop builder. Add dynamic fields, conditional logic, and signature blocks.",
    },
    {
      icon: <FileSignature className="h-8 w-8 text-indigo-600" />,
      title: "DocuSign Integration",
      description:
        "Seamless integration with DocuSign for secure, legally-binding electronic signatures. Track status and get instant notifications.",
    },
    {
      icon: <Eye className="h-8 w-8 text-indigo-600" />,
      title: "Real-time Monitoring",
      description:
        "Track document status, view signature progress, and manage all your agreements from a single dashboard.",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-indigo-600" />,
      title: "AI Assistant",
      description:
        "Get instant help with our AI chatbot for template selection, document creation, and process guidance.",
    },
  ];

  const workflowSteps = [
    {
      icon: <FileText className="h-12 w-12 text-indigo-600" />,
      title: "Create Agreement",
      description:
        "Choose from pre-built templates or create your own custom template using our intuitive builder.",
    },
    {
      icon: <PenTool className="h-12 w-12 text-indigo-600" />,
      title: "Customize Content",
      description:
        "Fill in dynamic fields, add clauses, and customize terms to match your specific needs.",
    },
    {
      icon: <Mail className="h-12 w-12 text-indigo-600" />,
      title: "Send for Signature",
      description:
        "Send documents for signature via DocuSign with automatic email notifications and reminders.",
    },
    {
      icon: <Eye className="h-12 w-12 text-indigo-600" />,
      title: "Track Progress",
      description:
        "Monitor signature status, view audit trails, and manage the entire process from your dashboard.",
    },
  ];

  const testimonials = [
    {
      quote:
        "The combination of custom templates and DocuSign integration has revolutionized how we handle contracts. The AI assistant makes the whole process incredibly smooth.",
      author: "Sarah Johnson",
      role: "Legal Operations Director",
      company: "TechCorp Global",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120",
    },
    {
      quote:
        "Being able to create custom templates and monitor signatures in real-time has cut our contract completion time by 80%. The chatbot is incredibly helpful.",
      author: "Michael Chen",
      role: "General Counsel",
      company: "Innovation Labs",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120&h=120",
    },
    {
      quote:
        "The platform's DocuSign integration and real-time tracking make managing hundreds of agreements effortless. It's transformed our legal operations.",
      author: "Emily Rodriguez",
      role: "CEO",
      company: "LegalTech Solutions",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120&h=120",
    },
  ];

  const stats = [
    { value: "500K+", label: "Documents Signed via DocuSign" },
    { value: "10K+", label: "Custom Templates Created" },
    { value: "99.9%", label: "Completion Rate" },
    { value: "180+", label: "Countries Covered" },
  ];

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen">
        {/* Hero Section with Animated Gradient */}
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-teal-900 text-white pt-32 pb-20">
          {/* Changed background image to a more modern office setting */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/95 via-purple-900/95 to-teal-900/95"></div>

          {/* Enhanced animated shapes with more dynamic positioning */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm text-white border border-white/20">
                      Powered by DocuSign
                    </span>
                    <Image
                      src="/assets/DocuSign_Logo_1.png"
                      alt="DocuSign"
                      className="h-6 items-center"
                      width={120}
                      height={120}
                    />
                  </div>
                  <h1 className="text-5xl md:text-6xl font-bold mb-10 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-teal-200 animate-gradient">
                    Create, Sign & Track Legal Agreements
                  </h1>
                  <p className="text-xl text-white/90 leading-relaxed backdrop-blur-sm">
                    Build custom templates, generate agreements, and manage
                    DocuSign signatures all in one platform. Get help from our
                    AI assistant at every step.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-indigo-600 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    href="/demo"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 text-white font-semibold backdrop-blur-sm hover:bg-white/20 border border-white/20 transition-all duration-300"
                  >
                    Watch Demo
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center space-x-2 text-white/90 backdrop-blur-sm p-2 rounded-lg bg-white/5 border border-white/10">
                    <CheckCircle className="h-5 w-5 text-teal-400" />
                    <span>Custom Templates</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/90 backdrop-blur-sm p-2 rounded-lg bg-white/5 border border-white/10">
                    <CheckCircle className="h-5 w-5 text-teal-400" />
                    <span>DocuSign Integration</span>
                  </div>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-teal-500/20 rounded-2xl filter blur-3xl"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20">
                  <Image
                    width={1000}
                    height={1000}
                    src="/assets/image.png"
                    alt="Legal Document Platform"
                    className="rounded-lg shadow-xl mb-4"
                  />
                  <div className="flex items-center justify-between p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                    <div className="flex items-center space-x-2">
                      <FileSignature className="h-5 w-5 text-teal-400" />
                      <span className="text-white">Ready for DocuSign</span>
                    </div>
                    <Image
                      src="/assets/DocuSign_Logo_1.png"
                      alt="DocuSign"
                      className="h-6 items-center"
                      width={120}
                      height={120}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Steps */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
              <p className="mt-4 text-xl text-gray-600">
                Streamlined document workflow from creation to signature
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workflowSteps.map((step, index) => (
                <div key={index} className="relative">
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-teal-500 transform translate-x-1/2"></div>
                  )}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900">
                Everything You Need in One Platform
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Create, customize, sign, and track all your legal agreements
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  <div className="relative p-8 bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                    <div className="p-3 bg-indigo-50 rounded-lg inline-block">
                      {feature.icon}
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-teal-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold">{stat.value}</div>
                  <div className="mt-2 text-indigo-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="text-center">
    <h2 className="text-3xl font-bold text-gray-900">
      Trusted by Legal Teams
    </h2>
    <p className="mt-4 text-xl text-gray-600">
      See how teams are transforming their legal operations
    </p>
  </div>

  <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
    {testimonials.map((testimonial, index) => (
      <div
        key={index}
        className="bg-white rounded-xl shadow-xl p-8 relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
        <div className="relative">
          <div className="flex items-center space-x-4 mb-6">
            <Image
              src={testimonial.image}
              alt={testimonial.author}
              className="w-12 h-12 rounded-full"
              width={120}
              height={120}

            />
            <div>
              <div className="font-medium text-gray-900">
                {testimonial.author}
              </div>
              <div className="text-gray-600 text-sm">
                {testimonial.role}
              </div>
              <div className="text-gray-600 text-sm">
                {testimonial.company}
              </div>
            </div>
          </div>
          <p className="text-gray-600 italic">
            "{testimonial.quote}"
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
</section>
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-teal-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-teal-500 p-12">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-teal-600 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent animate-shine"></div>
              </div>

              <div className="relative text-center">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Ready to Transform Your Document Workflow?
                </h2>
                <p className="text-xl text-indigo-100 mb-8">
                  Start creating and managing agreements with DocuSign
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
        </section>

        {/* AI Chatbot */}
        <div className="fixed bottom-8 right-8 z-50">
          <button className="bg-gradient-to-r from-indigo-500 to-teal-500 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <MessageSquare className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
