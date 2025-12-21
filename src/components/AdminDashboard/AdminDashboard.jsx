"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const studentData = [
  { name: "Jan", students: 30 },
  { name: "Feb", students: 45 },
  { name: "Mar", students: 60 },
  { name: "Apr", students: 50 },
  { name: "May", students: 70 },
];

const companyData = [
  { name: "Google", applications: 120 },
  { name: "Microsoft", applications: 90 },
  { name: "Amazon", applications: 150 },
  { name: "Infosys", applications: 80 },
];

const applicationStatus = [
  { name: "Accepted", value: 45 },
  { name: "Rejected", value: 25 },
  { name: "Pending", value: 30 },
];

const COLORS = ["#4ade80", "#f87171", "#60a5fa"];

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">📊 Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-lg font-semibold">Total Students</h2>
          <p className="text-3xl font-bold text-blue-600">320</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-lg font-semibold">Total Companies</h2>
          <p className="text-3xl font-bold text-green-600">25</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-lg font-semibold">Applications</h2>
          <p className="text-3xl font-bold text-purple-600">640</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">📈 Student Registrations</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={studentData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="students" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">🏢 Applications by Company</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={companyData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="applications" fill="#16a34a" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="bg-white shadow-lg rounded-xl p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">📌 Application Status</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={applicationStatus}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {applicationStatus.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Table */}
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">👨‍🎓 Recent Student Applications</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 border">Student</th>
                <th className="px-4 py-2 border">Company</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="border px-4 py-2">Aarav</td>
                <td className="border px-4 py-2">Google</td>
                <td className="border px-4 py-2 text-green-600 font-semibold">
                  Accepted
                </td>
                <td className="border px-4 py-2">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded">
                    View
                  </button>
                </td>
              </tr>
              <tr className="text-center">
                <td className="border px-4 py-2">Isha</td>
                <td className="border px-4 py-2">Amazon</td>
                <td className="border px-4 py-2 text-yellow-500 font-semibold">
                  Pending
                </td>
                <td className="border px-4 py-2">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded">
                    View
                  </button>
                </td>
              </tr>
              <tr className="text-center">
                <td className="border px-4 py-2">Rahul</td>
                <td className="border px-4 py-2">Microsoft</td>
                <td className="border px-4 py-2 text-red-600 font-semibold">
                  Rejected
                </td>
                <td className="border px-4 py-2">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

