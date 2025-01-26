import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@/components/ui/Dialog"; // Adjust path to match your project structure
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { SignatureLocation } from "@/types/template";

interface SignatureLocationModalProps {
  open: boolean;
  onClose: () => void;
  location: SignatureLocation;
  onSave: (location: SignatureLocation) => void;
}

export function SignatureLocationModal({
  open,
  onClose,
  location,
  onSave,
}: SignatureLocationModalProps) {
  const [email, setEmail] = useState(location.email || "");
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (emailToValidate: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailToValidate);
  };

  const handleSave = () => {
    // Validate email
    if (!validateEmail(email)) {
      setIsValid(false);
      return;
    }

    // Save the updated location with email
    onSave({
      ...location,
      email,
      required: true,
    });

    // Reset and close
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Signer: {location.role}</DialogTitle>
      <DialogContent>
        <p className="text-gray-600 mb-4">
          Enter the email address for the {location.role} signature.
        </p>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <Input
              id="email"
              name="email"
              label="Email Address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setIsValid(true);
              }}
              placeholder="Enter signer's email"
              className={`w-full ${!isValid ? "border-red-500" : ""}`}
            />
            {!isValid && (
              <p className="text-red-500 text-sm mt-1">
                Please enter a valid email address
              </p>
            )}
          </div>

          <div>
            <p className="text-sm text-gray-600">
              <strong>Signature Location:</strong>
              Page {location.page}, Position: ({location.x}, {location.y})
            </p>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={handleSave} disabled={!email || !isValid}>
          Add Signer
        </Button>
      </DialogActions>
    </Dialog>
  );
}
