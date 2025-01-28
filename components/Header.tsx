"use client"

import React from "react";
import Link from "next/link";
import { Scale } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="border-b">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <Scale className="h-6 w-6 text-indigo-600" />
            <span className="text-xl font-bold">LegalAI</span>
          </Link>

          <nav className="flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-2 ${
                  pathname === item.href
                    ? "text-indigo-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <div className="absolute bottom-0 left-0 h-0.5 w-full bg-indigo-600" />
                )}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href="/signin"
            className="text-gray-600 hover:text-gray-900"
          >
            Sign In
          </Link>
          <Link
            href="/get-started"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
