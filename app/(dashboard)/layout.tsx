"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Scale, Bell, User } from "lucide-react";
import Sidebar from "@/components/dashboard/Sidebar";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import Chatbot from "@/components/dashboard/Chatbot";
import { ConnectionProvider } from "@/components/auth/Connections";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-[#4700b3]" />
              <span className="text-xl font-bold text-[#4700b3]">LegalAI</span>
            </Link>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Bell className="h-6 w-6" />
              </button>
              <Link
                href="/dashboard/settings/profile"
                className={`flex items-center space-x-2 text-gray-700 ${
                  pathname === "/dashboard/settings/profile"
                    ? "text-gray-900"
                    : "hover:text-gray-900"
                }`}
              >
                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <User className="h-5 w-5" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-16 flex h-[calc(100vh-4rem)]">
        <Sidebar />
        <main className="flex-1 overflow-auto p-8">
          <ProtectedRoute>
            <ConnectionProvider>{children}</ConnectionProvider>
          </ProtectedRoute>

          <Chatbot />
        </main>
      </div>
    </div>
  );
}
