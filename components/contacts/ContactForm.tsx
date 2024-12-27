import React from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, Building, User } from "lucide-react";

interface ContactFormProps {
  onSubmit: (data: any) => void;
  onCancel?: () => void;
  initialData?: any;
}

export default function ContactForm({
  onSubmit,
  onCancel,
  initialData,
}: ContactFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    onSubmit({});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        id="name"
        name="name"
        label="Full Name"
        placeholder="John Doe"
        icon={User}
        required
      />

      <Input
        id="email"
        name="email"
        type="email"
        label="Email Address"
        placeholder="john@example.com"
        icon={Mail}
        required
      />

      <Input
        id="phone"
        name="phone"
        label="Phone Number"
        placeholder="+1 (555) 000-0000"
        icon={Phone}
      />

      <Input
        id="company"
        name="company"
        label="Company"
        placeholder="Acme Inc."
        icon={Building}
      />

      <div className="flex justify-end space-x-4">
        {onCancel && (
          <Button type="button" variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button type="submit" variant="gradient">
          Save Contact
        </Button>
      </div>
    </form>
  );
}
