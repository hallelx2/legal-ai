import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "gradient";
  className?: string;
  onClick?: () => void;
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
