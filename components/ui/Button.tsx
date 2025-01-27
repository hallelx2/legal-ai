import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "gradient" | "docsign" | "success";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({
  children,
  to,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "flex justify-center items-center px-4 py-2 rounded-lg font-medium transition-colors";

  const variantStyles = {
    primary: "bg-teal-600 text-white hover:bg-teal-700",
    secondary: "border border-gray-300 text-gray-700 hover:bg-gray-50",
    gradient:
      "bg-gradient-to-r from-teal-500 to-blue-600 text-white hover:from-teal-600 hover:to-blue-700",
    docsign:
      "bg-gradient-to-r from-[var(--app-blue)] to-blue-600 text-white hover:to-[var(--app-blue)] hover:from-blue-700",
    success: "bg-green-500 text-white",
  };

  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link href={to} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={styles} onClick={onClick}>
      {children}
    </button>
  );
}
