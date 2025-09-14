// import React, { useState } from "react";

// interface Order {
//   id: number;
//   orderName: string;
//   quantity: number;
//   price: number;
//   buyerName: string;
//   address: string;
//   phone: string;
//   status: "Pending" | "Shipped" | "Delivered";
// }

// const Orders: React.FC = () => {
//   const [orders] = useState<Order[]>([
//     { id: 101, orderName: "Tomatoes", quantity: 10, price: 200, buyerName: "Ramesh Kumar", address: "123, MG Road", phone: "9876543210", status: "Pending" },
//     { id: 102, orderName: "Potatoes", quantity: 5, price: 150, buyerName: "Sita Sharma", address: "456, Gandhi Nagar", phone: "9123456780", status: "Shipped" },
//     { id: 103, orderName: "Mangoes", quantity: 20, price: 800, buyerName: "Arjun Reddy", address: "789, Jubilee Hills", phone: "9012345678", status: "Delivered" },
//   ]);

//   const [currentPage, setCurrentPage] = useState(1);
//   const ordersPerPage = 2;
//   const totalPages = Math.ceil(orders.length / ordersPerPage);

//   const [sortColumn, setSortColumn] = useState<keyof Order | null>(null);
//   const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
//   const [showSortMenu, setShowSortMenu] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSort = (column: keyof Order, direction: "asc" | "desc") => {
//     setSortColumn(column);
//     setSortDirection(direction);
//     setShowSortMenu(false);
//   };

//   // Filter orders based on search term
//   const filteredOrders = orders.filter(order =>
//     Object.values(order).some(value =>
//       String(value).toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   );

//   // Sort filtered orders
//   const sortedOrders = [...filteredOrders].sort((a, b) => {
//     if (!sortColumn) return 0;
//     const valueA = a[sortColumn];
//     const valueB = b[sortColumn];
//     if (typeof valueA === "number" && typeof valueB === "number") {
//       return sortDirection === "asc" ? valueA - valueB : valueB - valueA;
//     }
//     return sortDirection === "asc"
//       ? String(valueA).localeCompare(String(valueB))
//       : String(valueB).localeCompare(String(valueA));
//   });

//   // Pagination slice
//   const startIndex = (currentPage - 1) * ordersPerPage;
//   const currentOrders = sortedOrders.slice(startIndex, startIndex + ordersPerPage);

//   return (
//     <div className="min-h-screen bg-green-50 p-6">
//       <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
//         <div className="flex justify-between items-center mb-4 relative">
//           <h2 className="text-2xl font-bold text-green-700">Orders</h2>

//           {/* Sort Icon */}
//           <div className="relative">
//             <button
//               className="flex items-center gap-1 px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
//               onClick={() => setShowSortMenu(!showSortMenu)}
//             >
//               Sort
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>

//             {/* Sort Options Menu */}
//             {showSortMenu && (
//               <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-300 rounded shadow-lg z-10">
//                 {[
//                   { key: "orderName", label: "Order Name" },
//                   { key: "quantity", label: "Quantity" },
//                   { key: "price", label: "Price" },
//                   { key: "buyerName", label: "Buyer Name" },
//                   { key: "address", label: "Address" },
//                   { key: "phone", label: "Phone" },
//                   { key: "status", label: "Status" },
//                 ].map((col) => (
//                   <div key={col.key}>
//                     <div
//                       className="px-4 py-2 hover:bg-green-100 cursor-pointer"
//                       onClick={() => handleSort(col.key as keyof Order, "asc")}
//                     >
//                       {col.label} ↑
//                     </div>
//                     <div
//                       className="px-4 py-2 hover:bg-green-100 cursor-pointer"
//                       onClick={() => handleSort(col.key as keyof Order, "desc")}
//                     >
//                       {col.label} ↓
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Search Bar */}
//         <input
//           type="text"
//           placeholder="Search orders..."
//           value={searchTerm}
//           onChange={(e) => {
//             setSearchTerm(e.target.value);
//             setCurrentPage(1); // reset to first page on search
//           }}
//           className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//         />

//         {/* Orders Table */}
//         <table className="w-full border-collapse border border-gray-200">
//           <thead>
//             <tr className="bg-green-100">
//               <th className="border border-gray-200 p-3 text-left">Order ID</th>
//               <th className="border border-gray-200 p-3 text-left">Order Name</th>
//               <th className="border border-gray-200 p-3 text-left">Quantity</th>
//               <th className="border border-gray-200 p-3 text-left">Price (₹)</th>
//               <th className="border border-gray-200 p-3 text-left">Buyer Name</th>
//               <th className="border border-gray-200 p-3 text-left">Address</th>
//               <th className="border border-gray-200 p-3 text-left">Phone</th>
//               <th className="border border-gray-200 p-3 text-left">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentOrders.map((order) => (
//               <tr key={order.id} className="hover:bg-green-50">
//                 <td className="border border-gray-200 p-3">{order.id}</td>
//                 <td className="border border-gray-200 p-3">{order.orderName}</td>
//                 <td className="border border-gray-200 p-3">{order.quantity}</td>
//                 <td className="border border-gray-200 p-3">₹{order.price}</td>
//                 <td className="border border-gray-200 p-3">{order.buyerName}</td>
//                 <td className="border border-gray-200 p-3">{order.address}</td>
//                 <td className="border border-gray-200 p-3">{order.phone}</td>
//                 <td className="border border-gray-200 p-3">
//                   <span
//                     className={`px-2 py-1 rounded text-sm ${
//                       order.status === "Pending"
//                         ? "bg-yellow-200 text-yellow-800"
//                         : order.status === "Shipped"
//                         ? "bg-blue-200 text-blue-800"
//                         : "bg-green-200 text-green-800"
//                     }`}
//                   >
//                     {order.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Pagination Controls */}
//         <div className="flex justify-between mt-4">
//           {currentPage > 1 && (
//             <button
//               onClick={() => setCurrentPage(currentPage - 1)}
//               className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
//             >
//               Previous
//             </button>
//           )}
//           {currentPage < totalPages && (
//             <button
//               onClick={() => setCurrentPage(currentPage + 1)}
//               className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition ml-auto"
//             >
//               Next
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Orders;
const Orders = () => {
    //... rest of the code remains the same...      
    return (<></>
        //... rest of the code remains the same...      
    );
};  

export default Orders;
