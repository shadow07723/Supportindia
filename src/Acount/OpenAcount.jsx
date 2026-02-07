import React from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../Header/Footer";

const accountLinks = [
  { label: "Open Account", path: "/open-account" },
  { label: "Close Account", path: "/close-account" },
  { label: "Account Status", path: "/status-account" },
  
  { label: "Close Account", path: "/close-account" },
  { label: "Account Status", path: "/status-account" },
  
  { label: "Close Account", path: "/close-account" },
  { label: "Account Status", path: "/status-account" },
  
  { label: "Close Account", path: "/close-account" },
  { label: "Account Status", path: "/status-account" },

  { label: "Close Account", path: "/close-account" },
  { label: "Account Status", path: "/status-account" },
  
  { label: "Close Account", path: "/close-account" },
  { label: "Account Status", path: "/status-account" },
  
  { label: "Close Account", path: "/close-account" },
  { label: "Account Status", path: "/status-account" },
  
  { label: "Close Account", path: "/close-account" },
  { label: "Account Status", path: "/status-account" },
];

function OpenAccount() {
  const location = useLocation();

  return (
    <div className="grid grid-cols-[220px_1fr] min-h-screen">
      {/* Left Sidebar (scrollable) */}
      <div className="bg-gray-100 p-4 sticky top-0 h-screen shadow-md overflow-y-auto scrollbar-hide ">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          Bank Account Options
        </h2>
        <ul className="space-y-2">
          {accountLinks.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`block px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === item.path
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-blue-100"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side Content */}
      <div className="bg-white p-6">
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">
          Bank Account Section
        </h1>
        <p className="text-gray-600">
          Yah section Bank Account ke saare related options (open, close, status
          etc.) ke liye hai. Left side ke links alag routes pe navigate karenge.
        </p>

        <Footer />
      </div>
    </div>
  );
}

export default OpenAccount;
