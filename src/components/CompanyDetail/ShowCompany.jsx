// "use client"
// import React, { useState, useEffect } from 'react';

// const ShowCompany = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [companies, setCompanies] = useState([]);
//   const [formData, setFormData] = useState({
//     name: '',
//     address: '',
//     contact: '',
//     email: '',   // 👈 New field
//     status: '',
//     interviewDate: '',
//     interviewLocation: '',
//   });

//   // Load companies on mount
//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         const res = await fetch('http://localhost:5000/api/companies/all');
//         const data = await res.json();
//         setCompanies(data);
//       } catch (err) {
//         console.error('Error fetching companies:', err);
//       }
//     };
//     fetchCompanies();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/api/companies/add', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) throw new Error('Failed to save company');

//       const newCompany = await response.json();
//       setCompanies((prev) => [newCompany, ...prev]); // update UI

//       // Reset form and close modal
//       setFormData({
//         name: '',
//         address: '',
//         contact: '',
//         email: '',   // reset email
//         status: '',
//         interviewDate: '',
//         interviewLocation: '',
//       });
//       setShowForm(false);
//     } catch (err) {
//       console.error('Error:', err.message);
//     }
//   };

//   return (
//     <div className={`p-6 relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 ${showForm ? 'overflow-hidden' : ''}`}>
//       {/* Header */}
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold text-gray-800">Company Tracker</h1>
//         <button
//           className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center gap-2"
//           onClick={() => setShowForm(true)}
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//             <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
//           </svg>
//           Add Company
//         </button>
//       </div>

//       {/* Company Cards */}
//       <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {companies.length === 0 ? (
//           <div className="col-span-full flex flex-col items-center justify-center py-12">
//             <p className="text-gray-500 text-lg">No companies added yet.</p>
//             <p className="text-gray-400">Click "Add Company" to get started</p>
//           </div>
//         ) : (
//           companies.map((company, index) => (
//             <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 border-l-4 border-blue-500">
//               <div className="flex justify-between items-start mb-3">
//                 <h2 className="text-xl font-bold text-gray-800">{company.name}</h2>
//                 <span
//                   className={`text-xs px-2 py-1 rounded-full font-medium ${
//                     company.status === 'Applied'
//                       ? 'bg-yellow-100 text-yellow-800'
//                       : company.status === 'Interview Scheduled'
//                       ? 'bg-blue-100 text-blue-800'
//                       : company.status === 'Offer Received'
//                       ? 'bg-green-100 text-green-800'
//                       : 'bg-red-100 text-red-800'
//                   }`}
//                 >
//                   {company.status}
//                 </span>
//               </div>
//               <div className="text-gray-600 space-y-2">
//                 <p><strong>📍 Address:</strong> {company.address}</p>
//                 <p><strong>📞 Contact:</strong> {company.contact}</p>
//                 <p><strong>📧 Email:</strong> {company.email}</p> {/* 👈 Show email */}
//                 {company.interviewDate && (
//                   <p><strong>📅 Interview:</strong> {company.interviewDate} at {company.interviewLocation}</p>
//                 )}
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Modal */}
//       {showForm && (
//         <div className="fixed inset-0 z-50 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center p-4">
//           <div className="bg-white rounded-xl shadow-2xl w-full max-w-md border border-gray-200">
//             <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
//               <h3 className="text-lg font-semibold">Add New Company</h3>
//               <button onClick={() => setShowForm(false)}>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>

//             <form onSubmit={handleSubmit} className="p-6 space-y-4">
//               <input type="text" name="name" placeholder="Company Name" value={formData.name} onChange={handleChange} required className="w-full p-3 border rounded" />
//               <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required className="w-full p-3 border rounded" />
//               <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} required className="w-full p-3 border rounded" />
              
//               {/* 👇 New Email Input */}
//               <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-3 border rounded" />

//               <select name="status" value={formData.status} onChange={handleChange} required className="w-full p-3 border rounded">
//                 <option value="">Select Status</option>
//                 <option value="Applied">Applied</option>
//                 <option value="Interview Scheduled">Interview Scheduled</option>
//                 <option value="Offer Received">Offer Received</option>
//                 <option value="Rejected">Rejected</option>
//               </select>

//               <input type="date" name="interviewDate" value={formData.interviewDate} onChange={handleChange} className="w-full p-3 border rounded" />
//               <input type="text" name="interviewLocation" placeholder="Interview Location" value={formData.interviewLocation} onChange={handleChange} className="w-full p-3 border rounded" />

//               <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
//                 Save Company
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShowCompany;



//today i comment this just for new code only changing UI

// "use client";
// import React, { useState, useEffect } from "react";

// const ShowCompany = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [companies, setCompanies] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     address: "",
//     contact: "",
//     email: "",
//     status: "",
//     interviewDate: "",
//     interviewLocation: "",
//   });

//   // 🔹 Fetch all companies
//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/companies/all");
//         const data = await res.json();
//         setCompanies(data);
//       } catch (err) {
//         console.error("Error fetching companies:", err);
//       }
//     };
//     fetchCompanies();
//   }, []);

//   // 🔹 Handle form change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // 🔹 Add company
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("http://localhost:5000/api/companies/add", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (!res.ok) {
//         alert("Failed to add company");
//         return;
//       }

//       const newCompany = await res.json();
//       setCompanies((prev) => [newCompany, ...prev]);

//       setFormData({
//         name: "",
//         address: "",
//         contact: "",
//         email: "",
//         status: "",
//         interviewDate: "",
//         interviewLocation: "",
//       });
//       setShowForm(false);
//     } catch (err) {
//       console.error("Add error:", err);
//     }
//   };

//   // 🗑️ DELETE COMPANY (🔥 FIXED)
//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this company?")) return;

//     try {
//       const res = await fetch(
//         `http://localhost:5000/api/companies/delete/${id}`,
//         { method: "DELETE" }
//       );

//       if (!res.ok) {
//         console.error("Delete failed, status:", res.status);
//         alert("Delete failed");
//         return;
//       }

//       // ✅ JSON nahi, TEXT read karo
//       const text = await res.text();
//       console.log("Delete response:", text);

//       // ✅ UI update
//       setCompanies((prev) => prev.filter((c) => c._id !== id));
//     } catch (err) {
//       console.error("Delete error:", err);
//     }
//   };

//   return (
//     <div className="p-6 min-h-screen bg-gray-100">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">Company Tracker</h1>
//         <button
//           onClick={() => setShowForm(true)}
//           className="bg-blue-600 text-white px-5 py-2 rounded"
//         >
//           + Add Company
//         </button>
//       </div>

//       {/* Company Cards */}
//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {companies.length === 0 ? (
//           <p>No companies found</p>
//         ) : (
//           companies.map((company) => (
//             <div
//               key={company._id}
//               className="bg-white p-5 rounded shadow border-l-4 border-blue-500"
//             >
//               <div className="flex justify-between items-start mb-2">
//                 <h2 className="text-xl font-bold">{company.name}</h2>

//                 <button
//                   onClick={() => handleDelete(company._id)}
//                   className="text-red-600 hover:text-red-800"
//                   title="Delete Company"
//                 >
//                   🗑
//                 </button>
//               </div>

//               <p><b>📍 Address:</b> {company.address}</p>
//               <p><b>📞 Contact:</b> {company.contact}</p>
//               <p><b>📧 Email:</b> {company.email}</p>
//               <p><b>Status:</b> {company.status}</p>

//               {company.interviewDate && (
//                 <p>
//                   <b>📅 Interview:</b> {company.interviewDate} (
//                   {company.interviewLocation})
//                 </p>
//               )}
//             </div>
//           ))
//         )}
//       </div>

//       {/* Add Company Modal */}
//       {showForm && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
//           <form
//             onSubmit={handleSubmit}
//             className="bg-white p-6 rounded w-96 space-y-3"
//           >
//             <input name="name" placeholder="Company Name" value={formData.name} onChange={handleChange} className="w-full border p-2" required />
//             <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full border p-2" required />
//             <input name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} className="w-full border p-2" required />
//             <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full border p-2" required />

//             <select name="status" value={formData.status} onChange={handleChange} className="w-full border p-2" required>
//               <option value="">Select Status</option>
//               <option>Applied</option>
//               <option>Interview Scheduled</option>
//               <option>Offer Received</option>
//               <option>Rejected</option>
//             </select>

//             <input type="date" name="interviewDate" value={formData.interviewDate} onChange={handleChange} className="w-full border p-2" />
//             <input name="interviewLocation" placeholder="Interview Location" value={formData.interviewLocation} onChange={handleChange} className="w-full border p-2" />

//             <div className="flex gap-3">
//               <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Save</button>
//               <button type="button" onClick={() => setShowForm(false)} className="bg-gray-300 px-4 py-2 rounded w-full">Cancel</button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShowCompany;


"use client";
import React, { useState, useEffect } from "react";
import { Plus, Trash2, MapPin, Phone, Mail, Calendar, X } from "lucide-react"; // Recommended: npm install lucide-react

const ShowCompany = () => {
  const [showForm, setShowForm] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: "",
    email: "",
    status: "",
    interviewDate: "",
    interviewLocation: "",
  });

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/companies/all");
        const data = await res.json();
        setCompanies(data);
      } catch (err) {
        console.error("Error fetching companies:", err);
      }
    };
    fetchCompanies();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/companies/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        alert("Failed to add company");
        return;
      }

      const newCompany = await res.json();
      setCompanies((prev) => [newCompany, ...prev]);
      setShowForm(false);
      setFormData({ name: "", address: "", contact: "", email: "", status: "", interviewDate: "", interviewLocation: "" });
    } catch (err) {
      console.error("Add error:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this company?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/companies/delete/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      setCompanies((prev) => prev.filter((c) => c._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Applied": return "bg-blue-100 text-blue-700";
      case "Interview Scheduled": return "bg-yellow-100 text-yellow-700";
      case "Offer Received": return "bg-green-100 text-green-700";
      case "Rejected": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6 min-h-screen bg-slate-50 text-slate-900">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Company Tracker</h1>
          <p className="text-slate-500 mt-1">Manage and monitor your job application pipeline.</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-indigo-200 active:scale-95"
        >
          <Plus size={20} />
          Add Company
        </button>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {companies.length === 0 ? (
          <div className="col-span-full py-20 text-center bg-white rounded-3xl border-2 border-dashed border-slate-200">
            <p className="text-slate-400 text-lg">No companies found. Start by adding one!</p>
          </div>
        ) : (
          companies.map((company) => (
            <div
              key={company._id}
              className="group bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getStatusColor(company.status)}`}>
                  {company.status || "Pending"}
                </span>
                <button
                  onClick={() => handleDelete(company._id)}
                  className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors rounded-lg"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              <h2 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-indigo-600 transition-colors">
                {company.name}
              </h2>

              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-indigo-500" />
                  <span className="truncate">{company.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-indigo-500" />
                  <span>{company.contact}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-indigo-500" />
                  <span className="truncate">{company.email}</span>
                </div>
                
                {company.interviewDate && (
                  <div className="mt-4 pt-4 border-t border-slate-50 flex items-center gap-3 text-indigo-700 font-medium">
                    <Calendar size={16} />
                    <span>{new Date(company.interviewDate).toLocaleDateString()} @ {company.interviewLocation}</span>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Add Company Modal - GLASSMORPHISM EFFECT */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex justify-center items-center p-4">
          {/* Animated Blur Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity"
            onClick={() => setShowForm(false)}
          ></div>
          
          <form
            onSubmit={handleSubmit}
            className="relative bg-white/90 backdrop-blur-xl p-8 rounded-3xl w-full max-w-md shadow-2xl border border-white/20 space-y-4 transform transition-all scale-100"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-bold text-slate-800">New Company</h2>
              <button type="button" onClick={() => setShowForm(false)} className="text-slate-400 hover:text-slate-600">
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <input name="name" placeholder="Company Name" value={formData.name} onChange={handleChange} className="w-full bg-white border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" required />
              <input name="address" placeholder="Location/Address" value={formData.address} onChange={handleChange} className="w-full bg-white border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" required />
              
              <div className="grid grid-cols-2 gap-3">
                <input name="contact" placeholder="Phone" value={formData.contact} onChange={handleChange} className="w-full bg-white border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" required />
                <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full bg-white border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" required />
              </div>

              <select name="status" value={formData.status} onChange={handleChange} className="w-full bg-white border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" required>
                <option value="">Select Status</option>
                <option>Applied</option>
                <option>Interview Scheduled</option>
                <option>Offer Received</option>
                <option>Rejected</option>
              </select>

              <div className="pt-2">
                <label className="text-xs font-semibold text-slate-500 uppercase ml-1">Interview Details (Optional)</label>
                <div className="grid grid-cols-2 gap-3 mt-1">
                  <input type="date" name="interviewDate" value={formData.interviewDate} onChange={handleChange} className="w-full bg-white border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
                  <input name="interviewLocation" placeholder="Location" value={formData.interviewLocation} onChange={handleChange} className="w-full bg-white border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button type="submit" className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-indigo-100">
                Save Details
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ShowCompany;