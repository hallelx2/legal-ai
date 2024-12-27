import React from "react";
import { Card } from "@/components/ui/Card";
import { Clock, Search } from "lucide-react";

export default function History() {
  const activities = [
    {
      id: 1,
      action: "Created Agreement",
      document: "Non-Disclosure Agreement",
      date: new Date("2024-03-15"),
      user: "John Doe",
    },
    {
      id: 2,
      action: "Signed Agreement",
      document: "Service Contract",
      date: new Date("2024-03-14"),
      user: "Sarah Smith",
    },
    {
      id: 3,
      action: "Modified Agreement",
      document: "Employment Contract",
      date: new Date("2024-03-13"),
      user: "John Doe",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Activity History</h1>
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search history..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
      </div>

      <Card>
        <div className="divide-y">
          {activities.map((activity) => (
            <div key={activity.id} className="p-4 flex items-center space-x-4">
              <div className="bg-teal-100 p-2 rounded-full">
                <Clock className="h-5 w-5 text-teal-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-900 font-medium">{activity.action}</p>
                <p className="text-gray-500 text-sm">{activity.document}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-900">{activity.user}</p>
                <p className="text-gray-500 text-sm">
                  {activity.date.toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
