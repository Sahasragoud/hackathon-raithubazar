import React, { useState } from "react";

interface Order {
  id: number;
  orderName: string;
  quantity: number;
  price: number;
  buyerName: string;
  address: string;
  phone: string;
  status: "Pending" | "Shipped" | "Delivered";
}

const Orders: React.FC = () => {
  const [orders] = useState<Order[]>([
    { id: 101, orderName: "Tomatoes", quantity: 10, price: 200, buyerName: "Ramesh Kumar", address: "123, MG Road", phone: "9876543210", status: "Pending" },
    { id: 102, orderName: "Potatoes", quantity: 5, price: 150, buyerName: "Sita Sharma", address: "456, Gandhi Nagar", phone: "9123456780", status: "Shipped" },
    { id: 103, orderName: "Mangoes", quantity: 20, price: 800, buyerName: "Arjun Reddy", address: "789, Jubilee Hills", phone: "9012345678", status: "Delivered" },
    { id: 104, orderName: "Apples", quantity: 15, price: 600, buyerName: "Neha Singh", address: "321, Park Street", phone: "9871234567", status: "Pending" },
    { id: 105, orderName: "Bananas", quantity: 25, price: 250, buyerName: "Vikram Patel", address: "654, Main Road", phone: "9123459876", status: "Shipped" },
    { id: 106, orderName: "Carrots", quantity: 8, price: 120, buyerName: "Rita Verma", address: "987, MG Road", phone: "9012348765", status: "Delivered" },
    { id: 107, orderName: "Onions", quantity: 12, price: 180, buyerName: "Suresh Kumar", address: "147, Gandhi Nagar", phone: "9876541230", status: "Pending" },
    { id: 108, orderName: "Pineapples", quantity: 6, price: 300, buyerName: "Anjali Sharma", address: "258, Jubilee Hills", phone: "9123786540", status: "Shipped" },
    { id: 109, orderName: "Grapes", quantity: 18, price: 500, buyerName: "Rahul Reddy", address: "369, Park Street", phone: "9012456789", status: "Delivered" },
    { id: 110, orderName: "Strawberries", quantity: 10, price: 400, buyerName: "Pooja Singh", address: "753, Main Road", phone: "9873216540", status: "Pending" }
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;
  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const [sortColumn, setSortColumn] = useState<keyof Order | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter orders based on search term
  const filteredOrders = orders.filter(order =>
    Object.values(order).some(value =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Sort filtered orders
  const sortedOrders = [...filteredOrders].sort((a, b) => {
    if (!sortColumn) return 0;
    const valueA = a[sortColumn];
    const valueB = b[sortColumn];
    if (typeof valueA === "number" && typeof valueB === "number") {
      return sortDirection === "asc" ? valueA - valueB : valueB - valueA;
    }
    return sortDirection === "asc"
      ? String(valueA).localeCompare(String(valueB))
      : String(valueB).localeCompare(String(valueA));
  });

  // Pagination slice
  const startIndex = (currentPage - 1) * ordersPerPage;
  const currentOrders = sortedOrders.slice(startIndex, startIndex + ordersPerPage);

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-6">

        {/* Navbar */}
        <div className="flex justify-between items-center mb-6 p-4 bg-green-700 rounded-md text-white">
          <h2 className="text-2xl font-bold">Orders</h2>

          <div className="flex gap-3">
            {/* Sort Column Dropdown */}
            <select
              value={sortColumn || ""}
              onChange={(e) => setSortColumn(e.target.value as keyof Order)}
              className="p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-black"
            >
              <option value="" disabled>Sort By</option>
              <option value="orderName">Order Name</option>
              <option value="quantity">Quantity</option>
              <option value="price">Price</option>
              <option value="buyerName">Buyer Name</option>
              <option value="address">Address</option>
              <option value="phone">Phone</option>
              <option value="status">Status</option>
            </select>

            {/* Direction Dropdown */}
            <select
              value={sortDirection}
              onChange={(e) => setSortDirection(e.target.value as "asc" | "desc")}
              className="p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-black"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search orders..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* Orders Table */}
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-green-200">
              <th className="border border-gray-200 p-3 text-left">Order ID</th>
              <th className="border border-gray-200 p-3 text-left">Order Name</th>
              <th className="border border-gray-200 p-3 text-left">Quantity</th>
              <th className="border border-gray-200 p-3 text-left">Price (₹)</th>
              <th className="border border-gray-200 p-3 text-left">Buyer Name</th>
              <th className="border border-gray-200 p-3 text-left">Address</th>
              <th className="border border-gray-200 p-3 text-left">Phone</th>
              <th className="border border-gray-200 p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr key={order.id} className="hover:bg-green-50">
                <td className="border border-gray-200 p-3">{order.id}</td>
                <td className="border border-gray-200 p-3">{order.orderName}</td>
                <td className="border border-gray-200 p-3">{order.quantity}</td>
                <td className="border border-gray-200 p-3">₹{order.price}</td>
                <td className="border border-gray-200 p-3">{order.buyerName}</td>
                <td className="border border-gray-200 p-3">{order.address}</td>
                <td className="border border-gray-200 p-3">{order.phone}</td>
                <td className="border border-gray-200 p-3">
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      order.status === "Pending"
                        ? "bg-yellow-200 text-yellow-800"
                        : order.status === "Shipped"
                        ? "bg-blue-200 text-blue-800"
                        : "bg-green-200 text-green-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="flex justify-between mt-4">
          {currentPage > 1 && (
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
            >
              Previous
            </button>
          )}
          {currentPage < totalPages && (
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition ml-auto"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
