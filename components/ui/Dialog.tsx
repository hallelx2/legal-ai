import React from "react";
import { X } from "lucide-react";

export function Dialog({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-4 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>
  );
}

export function DialogTitle({ children }) {
  return (
    <h2 className="text-lg font-semibold text-gray-900 mb-4">{children}</h2>
  );
}

export function DialogContent({ children }) {
  return <div className="mb-4 text-gray-700">{children}</div>;
}

export function DialogActions({ children }) {
  return <div className="flex justify-end space-x-4">{children}</div>;
}
