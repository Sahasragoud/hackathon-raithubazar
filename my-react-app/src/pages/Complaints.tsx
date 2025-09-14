import React, { useState } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";

// Complaint interface
interface Complaint {
  id: number;
  customerId: number;
  customerName: string;
  productName: string;
  complaintText: string;
  status: "Pending" | "Resolved";
}

// Sample complaints
const initialComplaints: Complaint[] = [
  {
    id: 1,
    customerId: 101,
    customerName: "Sita Devi",
    productName: "Fresh Tomatoes",
    complaintText: "The tomatoes were not fresh, some were rotten.",
    status: "Pending",
  },
  {
    id: 2,
    customerId: 102,
    customerName: "Ramesh Kumar",
    productName: "Golden Potatoes",
    complaintText: "Potatoes were smaller than expected.",
    status: "Resolved",
  },
  {
    id: 3,
    customerId: 103,
    customerName: "Anita Sharma",
    productName: "Sweet Mangoes",
    complaintText: "Some mangoes were overripe and spoiled.",
    status: "Pending",
  },
  {
    id: 4,
    customerId: 104,
    customerName: "Vikram Singh",
    productName: "Organic Wheat",
    complaintText: "The wheat package was torn and some grains spilled out.",
    status: "Resolved",
  },
  {
    id: 5,
    customerId: 105,
    customerName: "Geeta Rao",
    productName: "Bananas",
    complaintText: "Bananas were bruised and not suitable for sale.",
    status: "Pending",
  },
];

const ComplaintsPage: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [complaints, setComplaints] = useState<Complaint[]>(initialComplaints);

  const toggleComplaint = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const toggleStatus = (id: number) => {
    setComplaints((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, status: c.status === "Pending" ? "Resolved" : "Pending" }
          : c
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6 flex flex-col items-center">
      {/* Header */}
      <h2 className="text-3xl font-bold mb-8 text-blue-700 flex items-center gap-2">
        📢 Customer Complaints
      </h2>

      {/* Complaints List */}
      <div className="w-full max-w-2xl space-y-6">
        {complaints.map((complaint) => (
          <div
            key={complaint.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-6 border-l-4 border-blue-500 flex flex-col items-center text-center"
          >
            {/* Customer + Product */}
            <span className="text-sm text-gray-500 mb-1">
              Customer ID: {complaint.customerId}
            </span>
            <h3 className="text-lg font-semibold text-gray-800">
              {complaint.customerName}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Product:{" "}
              <span className="font-medium text-gray-800">
                {complaint.productName}
              </span>
            </p>

            {/* Status Badge */}
            <span
              className={`mt-3 inline-block px-4 py-1 text-sm font-medium rounded-full transition ${
                complaint.status === "Resolved"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {complaint.status}
            </span>

            {/* Toggle Button */}
            <button
              onClick={() => toggleStatus(complaint.id)}
              className={`mt-4 flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium shadow transition ${
                complaint.status === "Resolved"
                  ? "bg-red-100 text-red-700 hover:bg-red-200"
                  : "bg-green-100 text-green-700 hover:bg-green-200"
              }`}
            >
              {complaint.status === "Resolved" ? (
                <>
                  <XCircleIcon className="w-5 h-5" />
                  Mark as Pending
                </>
              ) : (
                <>
                  <CheckCircleIcon className="w-5 h-5" />
                  Mark as Resolved
                </>
              )}
            </button>

            {/* Expand/Collapse */}
            <div
              onClick={() => toggleComplaint(complaint.id)}
              className="mt-4 cursor-pointer text-blue-600 flex items-center gap-1"
            >
              {expandedId === complaint.id ? (
                <>
                  <ChevronUpIcon className="w-5 h-5" /> Hide Details
                </>
              ) : (
                <>
                  <ChevronDownIcon className="w-5 h-5" /> View Details
                </>
              )}
            </div>

            {/* Expanded Complaint Text */}
            {expandedId === complaint.id && (
              <p className="text-gray-700 mt-4 border-t pt-4 leading-relaxed">
                {complaint.complaintText}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplaintsPage;
