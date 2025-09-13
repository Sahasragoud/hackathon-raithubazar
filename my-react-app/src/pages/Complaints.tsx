import React, { useState } from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid"; // Add Heroicons package

// Complaint interface
interface Complaint {
  id: number;
  customerId: number;
  customerName: string;
  productName: string;
  complaintText: string;
}

// Sample complaints
const complaints: Complaint[] = [
  { id: 1, customerId: 101, customerName: "Sita Devi", productName: "Fresh Tomatoes", complaintText: "The tomatoes were not fresh, some were rotten." },
  { id: 2, customerId: 102, customerName: "Ramesh Kumar", productName: "Golden Potatoes", complaintText: "Potatoes were smaller than expected." },
  { id: 3, customerId: 103, customerName: "Anita Sharma", productName: "Sweet Mangoes", complaintText: "Some mangoes were overripe and spoiled." },
  { id: 4, customerId: 104, customerName: "Vikram Singh", productName: "Organic Wheat", complaintText: "The wheat package was torn and some grains spilled out." },
  { id: 5, customerId: 105, customerName: "Geeta Rao", productName: "Bananas", complaintText: "Bananas were bruised and not suitable for sale." },
];

const ComplaintsPage: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleComplaint = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-4xl font-bold mb-6 text-red-600 flex items-center gap-2">
        <ExclamationTriangleIcon className="w-8 h-8" />
        Customer Complaints
      </h2>

      <div className="space-y-5">
        {complaints.map((complaint) => (
          <div
            key={complaint.id}
            className="bg-white rounded-xl shadow-md hover:shadow-2xl transition p-5 cursor-pointer border-l-4 border-red-500"
            onClick={() => toggleComplaint(complaint.id)}
          >
            <div className="flex justify-between items-center mb-3">
              <div>
                <span className="text-sm text-gray-500">Customer ID: {complaint.customerId}</span>
                <h3 className="text-xl font-semibold text-gray-800 mt-1">{complaint.customerName}</h3>
                <p className="text-sm text-gray-600 mt-0.5">
                  Product: <span className="font-medium text-gray-800">{complaint.productName}</span>
                </p>
              </div>

              <div className="text-red-500 font-bold">
                {expandedId === complaint.id ? "▲" : "▼"}
              </div>
            </div>

            {expandedId === complaint.id && (
              <p className="text-gray-700 mt-3 border-t pt-3">{complaint.complaintText}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplaintsPage;
