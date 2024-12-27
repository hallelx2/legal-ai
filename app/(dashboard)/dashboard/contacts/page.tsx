"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Search, UserPlus, Mail, Phone, Building, X } from "lucide-react";
import ContactForm from "@/components/contacts/ContactForm";

export default function Contacts() {
  const [showAddContact, setShowAddContact] = useState(false);
  const contacts = [
    {
      id: 1,
      name: "Sarah Smith",
      company: "Tech Corp",
      email: "sarah@techcorp.com",
      phone: "+1 234 567 8900",
      agreements: 3,
    },
    {
      id: 2,
      name: "John Wilson",
      company: "Legal Solutions",
      email: "john@legalsolutions.com",
      phone: "+1 234 567 8901",
      agreements: 5,
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Contacts</h1>
        <Button variant="gradient" onClick={() => setShowAddContact(true)}>
          <UserPlus className="h-5 w-5 mr-2" />
          Add Contact
        </Button>
      </div>

      {showAddContact && (
        <Card className="mb-6">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium text-gray-900">
                Add New Contact
              </h2>
              <button
                onClick={() => setShowAddContact(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <ContactForm
              onSubmit={() => setShowAddContact(false)}
              onCancel={() => setShowAddContact(false)}
            />
          </div>
        </Card>
      )}

      <Card className="mb-6">
        <div className="p-4 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search contacts..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-teal-500 focus:border-teal-500">
            <option value="">All Companies</option>
            <option value="tech-corp">Tech Corp</option>
            <option value="legal-solutions">Legal Solutions</option>
          </select>
        </div>
      </Card>

      <div className="grid gap-4">
        {contacts.map((contact) => (
          <Card key={contact.id}>
            <div className="p-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {contact.name}
                  </h3>
                  <div className="mt-1 flex items-center text-gray-500">
                    <Building className="h-4 w-4 mr-1" />
                    {contact.company}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="secondary"
                    to={`/dashboard/agreements/new?contact=${contact.id}`}
                  >
                    Create Agreement
                  </Button>
                  <Button
                    variant="secondary"
                    to={`/dashboard/contacts/${contact.id}`}
                  >
                    View Profile
                  </Button>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center text-gray-600">
                  <Mail className="h-4 w-4 mr-2" />
                  {contact.email}
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  {contact.phone}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t">
                <p className="text-sm text-gray-600">
                  {contact.agreements} agreements created
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
