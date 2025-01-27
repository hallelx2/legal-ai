import React, { ChangeEvent } from "react";
import { LucideIcon } from "lucide-react";

// Extend the existing InputProps interface to include onChange
interface InputProps {
  id: string;
  name: string;
  type?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  icon?: LucideIcon;
  error?: string;
  value?: string | number;
  // Add onChange handler
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export function Input({
  id,
  name,
  type = "text",
  label,
  placeholder,
  required = false,
  icon: Icon,
  error,
  value,
  // Add onChange to the destructured props
  onChange,
}: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" />
          </div>
        )}
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          className={`
            ${Icon ? "pl-10" : "pl-3"}
            block w-full border border-gray-300 rounded-lg py-3
            text-gray-900 placeholder-gray-500
            focus:ring-teal-500 focus:border-teal-500
            ${error ? "border-red-500" : ""}
          `}
          placeholder={placeholder}
          // Add value prop for controlled component
          value={value}
          // Add onChange handler
          onChange={onChange}
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
