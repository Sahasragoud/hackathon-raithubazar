// src/pages/FeedbackPage.tsx
import React, { useState } from "react";
import Navbar from "../components/Navbar"; // ✅ Import Navbar

// Feedback interface
interface Feedback {
  id: number;
  customerName: string;
  productName: string;
  rating: number; // 1–5 stars
  ratingCount: number; // total ratings
  description: string; // customer review
  productImage?: string; // optional URL if available
}

// Sample feedbacks
const feedbacks: Feedback[] = [
  { id: 1, customerName: "Sita Devi", productName: "Fresh Tomatoes", rating: 5, ratingCount: 120, description: "Very fresh and juicy tomatoes, perfect for salads!" },
  { id: 2, customerName: "Ramesh Kumar", productName: "Golden Potatoes", rating: 4, ratingCount: 80, description: "Good quality potatoes, ideal for cooking and fries." },
  { id: 3, customerName: "Anita Sharma", productName: "Sweet Mangoes", rating: 5, ratingCount: 95, description: "Super sweet mangoes, tasted amazing!" },
  { id: 4, customerName: "Vikram Singh", productName: "Organic Wheat", rating: 3, ratingCount: 50, description: "Quality is okay, but a little coarse." },
  { id: 5, customerName: "Geeta Rao", productName: "Bananas", rating: 4, ratingCount: 70, description: "Fresh bananas, really good for daily consumption." },
  { id: 6, customerName: "Rohit Patel", productName: "Carrots", rating: 5, ratingCount: 60, description: "Crunchy and fresh carrots, very satisfied." },
  { id: 7, customerName: "Priya Singh", productName: "Green Grapes", rating: 4, ratingCount: 85, description: "Sweet and seedless, perfect for snacking." },
  { id: 8, customerName: "Sanjay Kumar", productName: "Brown Rice", rating: 3, ratingCount: 40, description: "Healthy rice but takes longer to cook." },
  { id: 9, customerName: "Anjali Reddy", productName: "Onions", rating: 5, ratingCount: 100, description: "Fresh onions, no bad smell, great quality." },
  { id: 10, customerName: "V SATHWIK", productName: "Apples", rating: 4, ratingCount: 90, description: "Crisp and sweet apples, perfect for desserts." },
];

const FeedbackPage: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleDescription = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <div className="p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">📝 Customer Feedback</h2>

        <div className="space-y-4">
          {feedbacks.map((feedback) => (
            <div
              key={feedback.id}
              className="flex flex-col max-w-2xl w-full mx-auto bg-white rounded-lg shadow-md hover:shadow-xl transition p-4 cursor-pointer"
              onClick={() => toggleDescription(feedback.id)}
            >
              <h3 className="text-lg font-semibold text-gray-800">{feedback.customerName}</h3>
              <p className="text-sm text-gray-500 mb-2">Product: {feedback.productName}</p>

              <div className="flex items-center gap-2 mb-2">
                {/* Stars */}
                <div className="flex">
                  {Array.from({ length: 5 }, (_, index) => (
                    <svg
                      key={index}
                      className={`w-5 h-5 ${index < feedback.rating ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.538 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.783.57-1.838-.197-1.538-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.034 9.382c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.955z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600">({feedback.ratingCount})</span>
              </div>

              {/* Customer Description */}
              {expandedId === feedback.id && (
                <p className="text-sm text-gray-700 mt-2">{feedback.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
