import React from "react";
import Link from "next/link";
import { FileText, Shield, Clock, Users, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-500 to-blue-600 text-white pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Create Legal Agreements with AI in Minutes
                </h1>
                <p className="mt-6 text-xl text-teal-50">
                  Generate personalized legal documents instantly using advanced
                  AI. Save time and money while ensuring legal compliance.
                </p>
                <div className="mt-8 flex space-x-4">
                  <Link
                    href="/dashboard"
                    className="bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
                  >
                    Get Started Free
                  </Link>
                  <Link
                    href="/demo"
                    className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Watch Demo
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <img
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
                  alt="Legal Document"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                Powerful Features
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Everything you need to create and manage legal agreements
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FileText className="h-8 w-8 text-teal-600" />,
                  title: "AI-Powered Generation",
                  description:
                    "Create custom legal agreements in minutes using advanced AI technology",
                },
                {
                  icon: <Shield className="h-8 w-8 text-teal-600" />,
                  title: "Legal Compliance",
                  description:
                    "Ensure your documents meet all legal requirements and standards",
                },
                {
                  icon: <Clock className="h-8 w-8 text-teal-600" />,
                  title: "Quick Turnaround",
                  description:
                    "Get your documents ready in minutes, not days or weeks",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-8 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  {feature.icon}
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                Trusted by Businesses
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Join thousands of satisfied customers
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "LegalAI has revolutionized how we handle our legal documents. It's fast, reliable, and cost-effective.",
                  author: "Sarah Johnson",
                  role: "CEO, TechStart Inc.",
                },
                {
                  quote:
                    "The AI-powered generation saves us countless hours. The documents are always precise and professional.",
                  author: "Michael Chen",
                  role: "Legal Director, Innovation Co.",
                },
                {
                  quote:
                    "Outstanding platform that delivers exactly what it promises. Our legal workflow has never been smoother.",
                  author: "Emily Rodriguez",
                  role: "Operations Manager, Growth Labs",
                },
              ].map((testimonial, index) => (
                <blockquote
                  key={index}
                  className="p-8 bg-white rounded-xl shadow-md"
                >
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                  <footer className="mt-4">
                    <p className="text-gray-900 font-semibold">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-teal-500 to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-xl text-teal-50">
              Join thousands of businesses creating legal agreements with AI
            </p>
            <Link
              href="/signup"
              className="mt-8 inline-block bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
            >
              Start Free Trial
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
