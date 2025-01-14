import React, { useState } from "react";
import Sidebar from "./Sidebar";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="bg-blue-600 text-white flex justify-between items-center p-4 shadow-md">
      {/* Left Section: App Name */}
      <h1 className="text-xl font-bold flex-grow text-center">
        Tuition Attendance System
      </h1>

      {/* Right Section: User Icon */}
      <button
        onClick={toggleSidebar}
        className="flex items-center justify-center w-10 h-10 bg-blue-700 rounded-full focus:outline-none hover:bg-blue-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 12c2.485 0 4.5-2.015 4.5-4.5S14.485 3 12 3 7.5 5.015 7.5 7.5 9.515 12 12 12zM16.5 13.5H7.5c-2.9 0-5.25 2.35-5.25 5.25v.75c0 .415.335.75.75.75h18c.415 0 .75-.335.75-.75v-.75c0-2.9-2.35-5.25-5.25-5.25z"
          />
        </svg>
      </button>

      {/* Right-Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-blue-700 text-white w-64 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4 flex justify-between items-center border-b border-blue-500">
          <h2 className="text-lg font-bold">User Profile</h2>
          <button
            onClick={toggleSidebar}
            className="text-white text-2xl hover:text-gray-300"
          >
            &times;
          </button>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">Admin Name</h3>
          <button className="w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
