import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header"; // Header Component
import Footer from "./components/Footer"; // Footer Component
import StudentManagement from "./pages/StudentManagement";
import AttendanceTracking from "./pages/AttendanceTracking";
import ViewAttendance from "./pages/ViewAttendance";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1 p-8 bg-gray-100 flex flex-col items-center justify-center">
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-gray-700 mb-6">
                    Welcome to the Tuition Attendance System
                  </h1>
                  <div className="flex space-x-4">
                    {/* Navigation Buttons */}
                    <Link
                      to="/students"
                      className="px-6 py-4 bg-green-500 text-white font-bold rounded-lg shadow hover:bg-green-600 transition"
                    >
                      Student Management
                    </Link>

                    <Link
                      to="/attendance"
                      className="px-6 py-4 bg-yellow-500 text-white font-bold rounded-lg shadow hover:bg-yellow-600 transition"
                    >
                      Attendance Tracking
                    </Link>

                    <Link
                      to="/view-attendance"
                      className="px-6 py-4 bg-red-500 text-white font-bold rounded-lg shadow hover:bg-red-600 transition"
                    >
                      View Attendance
                    </Link>

                    <Link
                      to="/settings"
                      className="px-6 py-4 bg-purple-500 text-white font-bold rounded-lg shadow hover:bg-purple-600 transition"
                    >
                      Settings
                    </Link>
                  </div>
                </div>
              }
            />
            {/* Individual Pages */}
            <Route path="/students" element={<StudentManagement />} />
            <Route path="/attendance" element={<AttendanceTracking />} />
            <Route path="/view-attendance" element={<ViewAttendance />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center py-4">
          © 2025 Tuition Attendance System
        </footer>
      </div>
    </Router>
  );
}

export default App;
