import React from "react";
import Link from "next/link";
import { Scale } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">LegalAI</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/features"
              className="text-[var(--text-secondary)] hover:text-gray-900"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-[var(--text-secondary)] hover:text-gray-900"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-[var(--text-secondary)] hover:text-gray-900"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-[var(--text-secondary)] hover:text-gray-900"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/signin" className="text-gray-600 hover:text-gray-900">
              Sign In
            </Link>
            <Link
              href="/signup"
              className="bg-[var(--app-blue)] text-white px-4 py-2 rounded-md hover:bg-[var(--text-blue)] transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
