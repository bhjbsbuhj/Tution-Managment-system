import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing

function Sidebar({ onToggleSidebar, isSidebarOpen }) {
  const toggleSidebar = () => {
    onToggleSidebar(!isSidebarOpen); // Notify the parent about the state change
  };

  return (
    <>
      {/* Hamburger Menu Icon */}
      {!isSidebarOpen && (
        <button
          className="fixed top-4 left-4 z-50 flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded focus:outline-none"
          onClick={toggleSidebar}
        >
          <span className="text-2xl font-bold">&gt;</span>
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-blue-700 text-white w-64 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            className="text-white text-2xl hover:text-gray-300"
            onClick={toggleSidebar}
          >
            &times; {/* Close icon */}
          </button>
        </div>
        <ul className="mt-4">
          <li className="p-4 hover:bg-blue-500 cursor-pointer">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="p-4 hover:bg-blue-500 cursor-pointer">
            <Link to="/students">Student Management</Link>
          </li>
          <li className="p-4 hover:bg-blue-500 cursor-pointer">
            <Link to="/attendance">Attendance Tracking</Link>
          </li>
          <li className="p-4 hover:bg-blue-500 cursor-pointer">
            <Link to="/view-attendance">View Attendance</Link>
          </li>
          <li className="p-4 hover:bg-blue-500 cursor-pointer">
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
