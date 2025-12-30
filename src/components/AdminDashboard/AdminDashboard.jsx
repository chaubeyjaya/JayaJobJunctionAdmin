
// "use client";
// import React, { useEffect, useState } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts";

// const studentData = [
//   { name: "Jan", students: 30 },
//   { name: "Feb", students: 45 },
//   { name: "Mar", students: 60 },
//   { name: "Apr", students: 50 },
//   { name: "May", students: 70 },
// ];

// const companyData = [
//   { name: "Google", applications: 120 },
//   { name: "Microsoft", applications: 90 },
//   { name: "Amazon", applications: 150 },
//   { name: "Infosys", applications: 80 },
// ];

// const applicationStatus = [
//   { name: "Accepted", value: 45 },
//   { name: "Rejected", value: 25 },
//   { name: "Pending", value: 30 },
// ];

// const COLORS = ["#4ade80", "#f87171", "#60a5fa"];

// const AdminDashboard = () => {
//   const [recentApplications, setRecentApplications] = useState([]);

//   // Fetch recent student applications (limit to 5)
//   useEffect(() => {
//     const fetchApplications = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/jobapply");
//         const data = await res.json();

//         // Sort by newest first and take latest 5
//         const latestFive = data
//           .sort(
//             (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
//           )
//           .slice(0, 5);

//         setRecentApplications(latestFive);
//       } catch (err) {
//         console.error("Error fetching applications:", err);
//       }
//     };

//     fetchApplications();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold mb-6">📊 Admin Dashboard</h1>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//         <div className="bg-white shadow-lg rounded-xl p-6">
//           <h2 className="text-lg font-semibold">Total Students</h2>
//           <p className="text-3xl font-bold text-blue-600">320</p>
//         </div>
//         <div className="bg-white shadow-lg rounded-xl p-6">
//           <h2 className="text-lg font-semibold">Total Companies</h2>
//           <p className="text-3xl font-bold text-green-600">25</p>
//         </div>
//         <div className="bg-white shadow-lg rounded-xl p-6">
//           <h2 className="text-lg font-semibold">Applications</h2>
//           <p className="text-3xl font-bold text-purple-600">640</p>
//         </div>
//       </div>

//       {/* Charts */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
//         <div className="bg-white shadow-lg rounded-xl p-6">
//           <h2 className="text-lg font-semibold mb-4">📈 Student Registrations</h2>
//           <ResponsiveContainer width="100%" height={250}>
//             <BarChart data={studentData}>
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="students" fill="#4f46e5" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         <div className="bg-white shadow-lg rounded-xl p-6">
//           <h2 className="text-lg font-semibold mb-4">🏢 Applications by Company</h2>
//           <ResponsiveContainer width="100%" height={250}>
//             <BarChart data={companyData}>
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="applications" fill="#16a34a" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Pie Chart */}
//       <div className="bg-white shadow-lg rounded-xl p-6 mb-6">
//         <h2 className="text-lg font-semibold mb-4">📌 Application Status</h2>
//         <ResponsiveContainer width="100%" height={250}>
//           <PieChart>
//             <Pie
//               data={applicationStatus}
//               cx="50%"
//               cy="50%"
//               labelLine={false}
//               label={({ name, percent }) =>
//                 `${name} ${(percent * 100).toFixed(0)}%`
//               }
//               outerRadius={100}
//               fill="#8884d8"
//               dataKey="value"
//             >
//               {applicationStatus.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index]} />
//               ))}
//             </Pie>
//             <Legend />
//             <Tooltip />
//           </PieChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Recent Applications Table */}
//       <div className="bg-white shadow-lg rounded-xl p-6">
//         <h2 className="text-lg font-semibold mb-4">👨‍🎓 Recent Student Applications</h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border rounded-lg">
//             <thead className="bg-gray-200">
//               <tr>
//                 <th className="px-4 py-2 border">Name</th>
//                 <th className="px-4 py-2 border">Email</th>
//                 <th className="px-4 py-2 border">Phone</th>
//                 <th className="px-4 py-2 border">Message</th>
//                 <th className="px-4 py-2 border">Resume</th>
//                 <th className="px-4 py-2 border">Applied At</th>
//               </tr>
//             </thead>
//             <tbody>
//               {recentApplications.length === 0 ? (
//                 <tr className="text-center">
//                   <td colSpan={6} className="border px-4 py-2">
//                     No recent applications
//                   </td>
//                 </tr>
//               ) : (
//                 recentApplications.map((app) => (
//                   <tr key={app._id} className="text-center">
//                     <td className="border px-4 py-2">{app.name}</td>
//                     <td className="border px-4 py-2">{app.email}</td>
//                     <td className="border px-4 py-2">{app.phone}</td>
//                     <td className="border px-4 py-2">{app.message}</td>
//                     <td className="border px-4 py-2">
//                       {app.resume ? (
//                         <a
//                           href={app.resume}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-blue-600 hover:underline"
//                         >
//                           View File
//                         </a>
//                       ) : (
//                         "No File"
//                       )}
//                     </td>
//                     <td className="border px-4 py-2">
//                       {new Date(app.createdAt).toLocaleString()}
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;







"use client";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const AdminDashboard = () => {
  const [recentApplications, setRecentApplications] = useState([]);
  const [totalApplications, setTotalApplications] = useState(0);

  const [studentGraph, setStudentGraph] = useState([]);
  const [companyGraph, setCompanyGraph] = useState([]);
  const [totalCompanies, setTotalCompanies] = useState(0);

  // ================= FETCH DATA =================
  useEffect(() => {
    fetchApplications();
    fetchStudentGraph();
    fetchCompanyGraph();
    fetchTotalCompanies();
  }, []);

  // 🔹 Student applications + recent 5
  const fetchApplications = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/jobapply");
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();

      setTotalApplications(data.length);

      const latestFive = data
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 5);

      setRecentApplications(latestFive);
    } catch (err) {
      console.error("Fetch applications error:", err);
    }
  };

  // 🔹 Student graph (unchanged)
  const fetchStudentGraph = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/jobapply/stats/monthly");
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setStudentGraph(data);
    } catch (err) {
      console.error("Fetch student graph error:", err);
    }
  };

  // 🔹 Company graph
  const fetchCompanyGraph = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/companies/stats");
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setCompanyGraph(data);
    } catch (err) {
      console.error("Fetch company graph error:", err);
    }
  };

  // 🔹 Total companies
  const fetchTotalCompanies = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/companies/count");
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setTotalCompanies(data.total);
    } catch (err) {
      console.error("Fetch total companies error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">📊 Admin Dashboard</h1>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Total Students</h2>
          <p className="text-3xl font-bold text-blue-600">{totalApplications}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Total Companies</h2>
          <p className="text-3xl font-bold text-green-600">{totalCompanies}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Applications</h2>
          <p className="text-3xl font-bold text-purple-600">{totalApplications}</p>
        </div>
      </div>

      {/* ================= GRAPHS ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Student Graph */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="mb-4">📈 Student Applications</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={studentGraph}>
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Legend />
              <Bar dataKey="students" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Company Graph */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="mb-4">🏢 Company Registrations</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={companyGraph}>
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Legend />
              <Bar dataKey="applications" fill="#16a34a" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ================= RECENT APPLICATIONS ================= */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="mb-4">👨‍🎓 Recent Applications</h2>
        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Phone</th>
                <th className="border p-2">Applied At</th>
              </tr>
            </thead>
            <tbody>
              {recentApplications.map((app) => (
                <tr key={app._id} className="text-center">
                  <td className="border p-2">{app.name}</td>
                  <td className="border p-2">{app.email}</td>
                  <td className="border p-2">{app.phone}</td>
                  <td className="border p-2">
                    {new Date(app.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}

              {recentApplications.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center p-4">
                    No applications found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

