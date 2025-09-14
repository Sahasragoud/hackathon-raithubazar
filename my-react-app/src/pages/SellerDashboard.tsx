// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   UserIcon,
//   EnvelopeIcon,
//   PhoneIcon,
//   CubeIcon,
// } from "@heroicons/react/24/solid";

// const SellerDashboard: React.FC = () => {
//   const seller = {
//     name: "Ramesh Traders",
//     owner: "Ramesh Kumar",
//     email: "ramesh@example.com",
//     phone: "+91 98765 43210",
//     totalProducts: 24,
//   };

//   const location = useLocation();

//   const pages = [
//     { name: "Products", link: "/products" },
//     { name: "Orders", link: "/orders" },
//     { name: "Feedback", link: "/feedback" },
//     { name: "Complaints", link: "/complaints" },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
//       {/* ✅ Fixed Navbar */}
//       <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-green-600 to-emerald-600 shadow-lg py-4 px-8 flex justify-center gap-6 z-50">
//         {pages.map((page) => (
//           <Link
//             key={page.name}
//             to={page.link}
//             className={`px-5 py-2.5 rounded-lg font-semibold transition text-lg ${
//               location.pathname === page.link
//                 ? "bg-white text-green-700 shadow-md"
//                 : "text-white hover:bg-white/20"
//             }`}
//           >
//             {page.name}
//           </Link>
//         ))}
//       </nav>

//       {/* ✅ Seller Info in the middle */}
//       <div className="flex justify-center items-center min-h-screen pt-28">
//         <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-3xl text-center border-t-8 border-green-500">
//           <UserIcon className="w-20 h-20 text-green-600 mx-auto mb-6" />
//           <h1 className="text-4xl font-bold text-green-700 mb-2">
//             {seller.name}
//           </h1>
//           <p className="text-lg text-gray-600 mb-6">Owned by {seller.owner}</p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
//             <div className="flex items-center gap-3 bg-green-50 p-4 rounded-xl shadow-sm">
//               <EnvelopeIcon className="w-8 h-8 text-green-600" />
//               <span className="text-gray-700">{seller.email}</span>
//             </div>
//             <div className="flex items-center gap-3 bg-green-50 p-4 rounded-xl shadow-sm">
//               <PhoneIcon className="w-8 h-8 text-green-600" />
//               <span className="text-gray-700">{seller.phone}</span>
//             </div>
//             <div className="flex items-center gap-3 bg-green-50 p-4 rounded-xl shadow-sm sm:col-span-2">
//               <CubeIcon className="w-8 h-8 text-green-600" />
//               <span className="text-gray-700 text-lg font-medium">
//                 Total Products: {seller.totalProducts}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SellerDashboard;


import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  CubeIcon,
} from "@heroicons/react/24/solid";

const SellerDashboard: React.FC = () => {
  const seller = {
    name: "Ramesh Traders",
    owner: "Ramesh Kumar",
    email: "ramesh@example.com",
    phone: "+91 98765 43210",
    totalProducts: 24,
  };

  const location = useLocation();

  const pages = [
    { name: "Products", link: "/products" },
    { name: "Orders", link: "/orders" },
    { name: "Feedback", link: "/feedback" },
    { name: "Complaints", link: "/complaints" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-green-600 to-emerald-600 shadow-lg py-4 px-8 flex justify-center gap-6 z-50">
        {pages.map((page) => (
          <Link
            key={page.name}
            to={page.link}
            className={`px-5 py-2.5 rounded-lg font-semibold transition text-lg ${
              location.pathname === page.link
                ? "bg-white text-green-700 shadow-md"
                : "text-white hover:bg-white/20"
            }`}
          >
            {page.name}
          </Link>
        ))}
      </nav>

      {/* Dashboard Content */}
      <div className="flex justify-center items-center min-h-screen pt-28">
        <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-3xl text-center border-t-8 border-green-500">
          <UserIcon className="w-20 h-20 text-green-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-green-700 mb-2">
            {seller.name}
          </h1>
          <p className="text-lg text-gray-600 mb-6">Owned by {seller.owner}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <div className="flex items-center gap-3 bg-green-50 p-4 rounded-xl shadow-sm">
              <EnvelopeIcon className="w-8 h-8 text-green-600" />
              <span className="text-gray-700">{seller.email}</span>
            </div>
            <div className="flex items-center gap-3 bg-green-50 p-4 rounded-xl shadow-sm">
              <PhoneIcon className="w-8 h-8 text-green-600" />
              <span className="text-gray-700">{seller.phone}</span>
            </div>
            <div className="flex items-center gap-3 bg-green-50 p-4 rounded-xl shadow-sm sm:col-span-2">
              <CubeIcon className="w-8 h-8 text-green-600" />
              <span className="text-gray-700 text-lg font-medium">
                Total Products: {seller.totalProducts}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
