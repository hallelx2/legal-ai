"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import {
    LayoutDashboard,
    FileText,
    Settings,
    History,
    Users,
    Menu,
    X,
    LogOut,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

// Define a type for menu items
interface MenuItem {
    icon: React.ElementType; // Icon component type
    label: string;
    path: string;
}

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const pathname = usePathname();

    const menuItems: MenuItem[] = [
        { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
        { icon: FileText, label: "Agreements", path: "/dashboard/agreements" },
        { icon: History, label: "History", path: "/dashboard/history" },
        { icon: Users, label: "Contacts", path: "/dashboard/contacts" },
        { icon: Settings, label: "Settings", path: "/dashboard/settings" },
    ];

    const toggleSidebar = (): void => setIsOpen(!isOpen);
    const toggleCollapse = (): void => setIsCollapsed(!isCollapsed);

    const handleLogout = async (): Promise<void> => {
        await signOut({ callbackUrl: "/" });
    };

    const isRouteActive = (path: string): boolean => {
        if (path === "/dashboard") {
            return pathname === "/dashboard";
        }
        return pathname.startsWith(path);
    };

    const sidebarWidth: string = isCollapsed && !isHovered ? "w-16" : "w-64";

    return (
        <>
            {/* Mobile menu button */}
            <button
                onClick={toggleSidebar}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md"
                aria-label="Toggle menu"
            >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={toggleSidebar}
                />
            )}

            {/* Sidebar */}
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={` sidebar
          fixed lg:static inset-y-0 left-0 z-40
          transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 transition-all duration-300 ease-in-out
          ${sidebarWidth} bg-white h-full border-r border-gray-200
          flex flex-col justify-between relative
        `}
            >
                {/* Collapse Toggle Button */}
                <button
                    onClick={toggleCollapse}
                    className="absolute -right-3 top-10 bg-white rounded-full p-1 border border-gray-200 hidden lg:block"
                    aria-label="Toggle collapse"
                >
                    {isCollapsed ? (
                        <ChevronRight className="h-4 w-4" />
                    ) : (
                        <ChevronLeft className="h-4 w-4" />
                    )}
                </button>

                {/* Menu Items */}
                <div className="p-4 space-y-1">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = isRouteActive(item.path);

                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
                                    isActive
                                        ? "bg-[#CBC2FF]/40 text-[var(--text-blue)]"
                                        : "text-gray-600 hover:bg-gray-50"
                                } ${isCollapsed && !isHovered ? "justify-center" : ""}`}
                            >
                                <Icon className="h-5 w-5 flex-shrink-0" />
                                <span
                                    className={`font-medium transition-all duration-300 ${
                                        isCollapsed && !isHovered ? "hidden" : "block"
                                    }`}
                                >
                  {item.label}
                </span>
                            </Link>
                        );
                    })}
                </div>

                {/* Logout Button */}
                <div className="p-4 border-t border-gray-200">
                    <button
                        onClick={handleLogout}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg w-full text-white bg-red-400 hover:bg-red-600 ${
                            isCollapsed && !isHovered ? "justify-center" : ""
                        }`}
                        aria-label="Logout"
                    >
                        <LogOut className="h-5 w-5 flex-shrink-0" />
                        <span
                            className={`font-medium transition-all duration-300 ${
                                isCollapsed && !isHovered ? "hidden" : "block"
                            }`}
                        >
              Logout
            </span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
