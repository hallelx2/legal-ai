import React from 'react';
import Link from 'next/link';
import {
  FileText,
  Shield,
  Clock,
  Users,
  Check,
  Zap,
  Globe,
  Award,
  ArrowRight,
  CheckCircle,
  Scale,
  Sparkles
} from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {
  const features = [
    {
      icon: <Sparkles className="h-8 w-8 text-indigo-600" />,
      title: 'AI-Powered Generation',
      description: 'Create custom legal agreements in minutes using advanced AI technology that understands legal context and requirements.'
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      title: 'Legal Compliance',
      description: 'Stay compliant with automatic updates and validations across multiple jurisdictions and regulatory frameworks.'
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-600" />,
      title: 'Global Coverage',
      description: 'Support for multiple languages and jurisdictions, ensuring your agreements are valid wherever you do business.'
    },
    {
      icon: <Zap className="h-8 w-8 text-indigo-600" />,
      title: 'Lightning Fast',
      description: 'Generate complex legal documents in minutes, not hours or days. Save time and focus on what matters most.'
    }
  ];

  const testimonials = [
    {
      quote: "LegalAI has transformed our legal operations. We've reduced document creation time by 90% while maintaining perfect accuracy.",
      author: "Sarah Johnson",
      role: "Legal Operations Director",
      company: "TechCorp Global",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120"
    },
    {
      quote: "The AI-powered generation is incredibly sophisticated. It understands context and nuance in a way that other solutions simply can't match.",
      author: "Michael Chen",
      role: "General Counsel",
      company: "Innovation Labs",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120&h=120"
    },
    {
      quote: "We've seen a 75% reduction in legal review cycles. The accuracy and consistency of the documents is remarkable.",
      author: "Emily Rodriguez",
      role: "CEO",
      company: "LegalTech Solutions",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120&h=120"
    }
  ];

  const stats = [
    { value: '500K+', label: 'Documents Generated' },
    { value: '10K+', label: 'Active Users' },
    { value: '99.9%', label: 'Accuracy Rate' },
    { value: '50+', label: 'Countries Served' }
  ];

  return (
    <>
    <Header/>
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Animated Gradient */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-teal-900 text-white pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-purple-900/90 to-teal-900/90"></div>

        {/* Animated Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-500/20 text-indigo-200">
                  Revolutionizing Legal Document Creation
                </span>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-teal-200">
                  Create Legal Agreements with AI in Minutes
                </h1>
                <p className="text-xl text-indigo-100 leading-relaxed">
                  Generate personalized legal documents instantly using advanced AI. Save time and money while ensuring legal compliance across jurisdictions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-teal-500 text-white font-semibold shadow-lg hover:from-indigo-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 text-white font-semibold backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                >
                  Watch Demo
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-2 text-indigo-200">
                  <CheckCircle className="h-5 w-5 text-teal-400" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2 text-indigo-200">
                  <CheckCircle className="h-5 w-5 text-teal-400" />
                  <span>14-day free trial</span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-teal-500/20 rounded-2xl filter blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
                alt="Legal Document Platform"
                className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-xl p-6 transform hover:-translate-y-1 transition-all duration-300">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600">{stat.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
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
              Powerful Features for Modern Legal Teams
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Everything you need to create, manage, and execute legal agreements efficiently
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                <div className="relative p-8 bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <div className="p-3 bg-indigo-50 rounded-lg inline-block">
                    {feature.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Trusted by Industry Leaders</h2>
            <p className="mt-4 text-xl text-indigo-200">
              Join thousands of satisfied customers who trust LegalAI
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                <div className="relative p-8 bg-white/10 backdrop-blur-xl rounded-xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="font-medium text-lg">{testimonial.author}</div>
                      <div className="text-indigo-200 text-sm">{testimonial.role}</div>
                      <div className="text-indigo-200 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                  <p className="text-indigo-100 italic">"{testimonial.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-teal-500 p-12">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-teal-600 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent animate-shine"></div>
            </div>

            <div className="relative text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Legal Operations?
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Join thousands of businesses creating legal agreements with AI
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
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}
