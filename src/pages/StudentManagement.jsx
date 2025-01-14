import React, { useState } from "react";

// Dummy data for students (can later be replaced with an API call or database)
const dummyStudents = [
  { id: 1, name: "John Doe", rollNumber: "001", course: "Math", status: "Active" },
  { id: 2, name: "Jane Smith", rollNumber: "002", course: "Science", status: "Inactive" },
  { id: 3, name: "Emily Johnson", rollNumber: "003", course: "History", status: "Active" },
];

function StudentManagement() {
  const [students, setStudents] = useState(dummyStudents);
  const [searchQuery, setSearchQuery] = useState("");

  // Add new student
  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  // Delete student
  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  // Edit student
  const editStudent = (id, updatedStudent) => {
    setStudents(students.map(student => student.id === id ? { ...student, ...updatedStudent } : student));
  };

  // Filter students based on search query
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.rollNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.course.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Student Management</h1>
      
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search students..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border rounded"
        />
      </div>

      {/* Student List */}
      <div className="mb-4">
        <button
          onClick={() => addStudent({ id: 4, name: "New Student", rollNumber: "004", course: "English", status: "Active" })}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add New Student
        </button>
      </div>

      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Roll Number</th>
            <th className="px-4 py-2">Course</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map(student => (
            <tr key={student.id}>
              <td className="border px-4 py-2">{student.name}</td>
              <td className="border px-4 py-2">{student.rollNumber}</td>
              <td className="border px-4 py-2">{student.course}</td>
              <td className="border px-4 py-2">{student.status}</td>
              <td className="border px-4 py-2">
                {/* Edit Button */}
                <button
                  onClick={() => editStudent(student.id, { name: "Updated Name", status: "Inactive" })}
                  className="px-2 py-1 bg-yellow-500 text-white rounded"
                >
                  Edit
                </button>
                {/* Delete Button */}
                <button
                  onClick={() => deleteStudent(student.id)}
                  className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Export and Import (Dummy for now) */}
      <div className="mt-4">
        <button className="px-4 py-2 bg-green-500 text-white rounded mr-2">
          Export Data
        </button>
        <button className="px-4 py-2 bg-purple-500 text-white rounded">
          Import Data
        </button>
      </div>
    </div>
  );
}

export default StudentManagement;
