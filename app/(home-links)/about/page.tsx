import React from "react";
import Link from "next/link";
import {
  Scale,
  Users,
  Globe,
  Award,
  ArrowRight,
  Target,
  Heart,
  Sparkles,
  Shield,
  MessageSquare,
} from "lucide-react";

export default function About() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-founder",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
      bio: "Former legal tech executive with 15+ years of experience",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
      bio: "Tech innovator with background in AI and security",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Legal",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
      bio: "Corporate lawyer turned legal tech enthusiast",
    },
    {
      name: "David Kim",
      role: "Head of Product",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
      bio: "Product leader with focus on user experience",
    },
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-indigo-600" />,
      title: "Mission-Driven",
      description:
        "Dedicated to transforming legal operations through technology",
    },
    {
      icon: <Heart className="h-8 w-8 text-indigo-600" />,
      title: "Customer First",
      description: "Every decision is made with our customers' success in mind",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-indigo-600" />,
      title: "Innovation",
      description: "Constantly pushing boundaries in legal tech",
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      title: "Trust & Security",
      description: "Unwavering commitment to data security and privacy",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/95 via-purple-900/95 to-indigo-900/95"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-200">
              Our Mission to Transform Legal Work
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We're building the future of legal operations with AI-powered
              solutions and DocuSign integration.
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Founded in 2023, LegalAI emerged from a simple observation:
                  legal teams spent too much time on repetitive document tasks
                  and not enough on strategic work.
                </p>
                <p>
                  We set out to build a platform that would revolutionize how
                  legal teams create, manage, and track agreements. By combining
                  AI technology with DocuSign integration, we've created a
                  solution that saves time, reduces errors, and improves
                  collaboration.
                </p>
                <p>
                  Today, we're proud to serve thousands of customers worldwide,
                  from small businesses to Fortune 500 companies, helping them
                  streamline their legal operations.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-indigo-500/20 rounded-2xl filter blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Team collaboration"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="p-3 bg-indigo-50 rounded-lg inline-block mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The people behind the innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                <div className="relative p-6 bg-white rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-1">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 text-center mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-center">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500K+</div>
              <div className="text-indigo-200">Documents Processed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">10K+</div>
              <div className="text-indigo-200">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">180+</div>
              <div className="text-indigo-200">Countries Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-indigo-500 p-12">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-600 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent animate-shine"></div>
            </div>

            <div className="relative text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Join Us in Transforming Legal Work
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Experience the future of legal operations with our AI-powered
                platform
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-indigo-600 font-semibold shadow-lg hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-indigo-900/30 text-white font-semibold backdrop-blur-sm hover:bg-indigo-900/40 transition-all duration-300"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
