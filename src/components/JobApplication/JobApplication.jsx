// "use client";
// import React, { useEffect, useState } from "react";

// const JobApplications = () => {
//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchApplications = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/jobapply");
//         const data = await res.json();
//         setApplications(data);
//       } catch (err) {
//         setError("Failed to fetch applications");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchApplications();
//   }, []);

//   if (loading) return <p className="text-center mt-10">Loading applications...</p>;
//   if (error) return <p className="text-red-600 text-center mt-10">{error}</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6 text-center">Student Job Applications</h1>

//       {applications.length === 0 ? (
//         <p className="text-center text-gray-500">No applications found.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="px-4 py-2 border-b">Name</th>
//                 <th className="px-4 py-2 border-b">Email</th>
//                 <th className="px-4 py-2 border-b">Phone</th>
//                 <th className="px-4 py-2 border-b">Message</th>
//                 <th className="px-4 py-2 border-b">Resume</th>
//                 <th className="px-4 py-2 border-b">Applied At</th>
//               </tr>
//             </thead>
//             <tbody>
//               {applications.map((app) => (
//                 <tr key={app._id} className="hover:bg-gray-50">
//                   <td className="px-4 py-2 border-b">{app.name}</td>
//                   <td className="px-4 py-2 border-b">{app.email}</td>
//                   <td className="px-4 py-2 border-b">{app.phone}</td>
//                   <td className="px-4 py-2 border-b">{app.message}</td>
//                   <td className="px-4 py-2 border-b text-blue-600">
//                     <a
//                       href={`http://localhost:5000/${app.file}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="underline"
//                     >
//                       View File
//                     </a>
//                   </td>
//                   <td className="px-4 py-2 border-b">
//                     {new Date(app.createdAt).toLocaleString()}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default JobApplications;




//ekdms hi code hai dlt mt krna isko final hai bs niche wala code isliye likhi hu kyuki copmay bhi dikhana chahti hu user kisme apply kiya hai
// "use client";
// import React, { useEffect, useState } from "react";
// import { User, Mail, Phone, FileText, Calendar, ExternalLink, Search } from "lucide-react"; // npm install lucide-react

// const JobApplications = () => {
//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     const fetchApplications = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/jobapply");
//         const data = await res.json();
//         setApplications(data);
//       } catch (err) {
//         setError("Failed to fetch applications. Please check your connection.");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchApplications();
//   }, []);

//   const filteredApps = applications.filter(app => 
//     app.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
//     app.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (loading) return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
//       <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
//       <p className="mt-4 text-slate-500 font-medium animate-pulse">Fetching Applications...</p>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-slate-50 p-4 md:p-8">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header & Stats Section */}
//         <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
//           <div>
//             <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
//               Application <span className="text-indigo-600">Inbox</span>
//             </h1>
//             <p className="text-slate-500 mt-1">You have {applications.length} total applications from students.</p>
//           </div>

//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
//             <input 
//               type="text" 
//               placeholder="Search by name or email..."
//               className="pl-10 pr-4 py-2 w-full md:w-80 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all shadow-sm"
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//         </div>

//         {error ? (
//           <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-center">
//             {error}
//           </div>
//         ) : filteredApps.length === 0 ? (
//           <div className="bg-white rounded-3xl p-20 text-center border border-dashed border-slate-300">
//             <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//               <User className="text-slate-400" />
//             </div>
//             <h3 className="text-lg font-semibold text-slate-700">No applications found</h3>
//             <p className="text-slate-500">Try adjusting your search or check back later.</p>
//           </div>
//         ) : (
//           <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
//             <div className="overflow-x-auto">
//               <table className="w-full text-left border-collapse">
//                 <thead>
//                   <tr className="bg-slate-50/50 border-b border-slate-100">
//                     <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider text-center w-16">#</th>
//                     <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider">Student Info</th>
//                     <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider">Message</th>
//                     <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider">Resume</th>
//                     <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider">Date</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-slate-50">
//                   {filteredApps.map((app, index) => (
//                     <tr key={app._id} className="hover:bg-indigo-50/30 transition-colors group">
//                       <td className="px-6 py-4 text-center font-medium text-slate-400">
//                         {index + 1}
//                       </td>
//                       <td className="px-6 py-4">
//                         <div className="flex items-center gap-3">
//                           <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm">
//                             {app.name.charAt(0)}
//                           </div>
//                           <div>
//                             <p className="font-bold text-slate-800">{app.name}</p>
//                             <div className="flex flex-col text-xs text-slate-500 gap-1 mt-1">
//                               <span className="flex items-center gap-1"><Mail size={12}/> {app.email}</span>
//                               <span className="flex items-center gap-1"><Phone size={12}/> {app.phone}</span>
//                             </div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4">
//                         <p className="text-sm text-slate-600 line-clamp-2 max-w-xs italic">
//                           "{app.message || 'No message provided'}"
//                         </p>
//                       </td>
//                       <td className="px-6 py-4">
//                         <a
//                           href={`http://localhost:5000/${app.file}`}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
//                         >
//                           <FileText size={16} />
//                           View Resume
//                           <ExternalLink size={12} className="opacity-50" />
//                         </a>
//                       </td>
//                       <td className="px-6 py-4 text-sm text-slate-500">
//                         <div className="flex items-center gap-2">
//                           <Calendar size={14} className="text-slate-400" />
//                           {new Date(app.createdAt).toLocaleDateString(undefined, {
//                             month: 'short',
//                             day: 'numeric',
//                             year: 'numeric'
//                           })}
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default JobApplications;





"use client";
import React, { useEffect, useState } from "react";
import { User, Mail, Phone, FileText, Calendar, ExternalLink, Search, Building2, MapPin, PhoneCall } from "lucide-react";

const JobApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/jobapply");
        const data = await res.json();
        // Ensure data is an array
        setApplications(Array.isArray(data) ? data : []);
      } catch (err) {
        setError("Failed to fetch applications. Please check your connection.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchApplications();
  }, []);

  const filteredApps = applications.filter(app => 
    app.name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
    app.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.companyName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
        <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-slate-500 font-medium animate-pulse">Fetching Applications...</p>
      </div>
    );
  }

  const uniqueCompaniesCount = new Set(applications.map(app => app.companyName).filter(Boolean)).size;

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Application <span className="text-indigo-600">Inbox</span>
            </h1>
            <p className="text-slate-500 mt-1">
              {applications.length} total applications • {uniqueCompaniesCount} companies
            </p>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by name, email or company..."
              className="pl-10 pr-4 py-2 w-full md:w-80 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all shadow-sm"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 font-medium">Total Applications</p>
                <p className="text-3xl font-bold text-slate-900 mt-1">{applications.length}</p>
              </div>
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <User className="text-indigo-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 font-medium">Active Companies</p>
                <p className="text-3xl font-bold text-blue-600 mt-1">{uniqueCompaniesCount}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Building2 className="text-blue-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 font-medium">New This Month</p>
                <p className="text-3xl font-bold text-green-600 mt-1">
                  {applications.filter(app => {
                    const appDate = new Date(app.createdAt);
                    const now = new Date();
                    return appDate.getMonth() === now.getMonth() && 
                           appDate.getFullYear() === now.getFullYear();
                  }).length}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Calendar className="text-green-600" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Table Section */}
        {error ? (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-center">
            {error}
          </div>
        ) : filteredApps.length === 0 ? (
          <div className="bg-white rounded-3xl p-20 text-center border border-dashed border-slate-300">
            <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-700">No applications found</h3>
            <p className="text-slate-500">No data matches your current search criteria.</p>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-100">
                    <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider text-center w-16">#</th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider">Student Info</th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider">Company Details</th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider">Message</th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider">Resume</th>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {filteredApps.map((app, index) => (
                    <tr key={app._id} className="hover:bg-indigo-50/30 transition-colors group">
                      <td className="px-6 py-4 text-center font-medium text-slate-400 text-xs">
                        {index + 1}
                      </td>
                      
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm border border-indigo-200">
                            {app.name?.charAt(0) || "U"}
                          </div>
                          <div>
                            <p className="font-bold text-slate-800 leading-none">{app.name}</p>
                            <div className="flex flex-col text-[11px] text-slate-500 mt-1.5 space-y-0.5">
                              <span className="flex items-center gap-1"><Mail size={10} /> {app.email}</span>
                              <span className="flex items-center gap-1"><Phone size={10} /> {app.phone}</span>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        {app.companyName ? (
                          <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-3 min-w-[220px] shadow-sm">
                            <div className="flex items-start gap-2 mb-2">
                              <Building2 size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                              <p className="font-bold text-blue-900 text-sm leading-tight">
                                {app.companyName}
                              </p>
                            </div>
                            
                            <div className="space-y-1">
                              {app.companyAddress && (
                                <div className="flex items-start gap-2 text-[11px] text-slate-600">
                                  <MapPin size={12} className="mt-0.5 flex-shrink-0 text-slate-400" />
                                  <span className="line-clamp-1">{app.companyAddress}</span>
                                </div>
                              )}
                              
                              {app.companyContact && (
                                <div className="flex items-center gap-2 text-[11px] text-slate-600">
                                  <PhoneCall size={12} className="flex-shrink-0 text-slate-400" />
                                  <span>{app.companyContact}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        ) : (
                          <span className="text-slate-300 italic text-sm">Direct Application</span>
                        )}
                      </td>

                      <td className="px-6 py-4">
                        <p className="text-xs text-slate-600 line-clamp-3 max-w-[200px] leading-relaxed italic">
                          "{app.message || 'No message provided'}"
                        </p>
                      </td>

                      <td className="px-6 py-4">
                        <a 
                          href={`http://localhost:5000/${app.file?.replace(/\\/g, '/')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-2 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-700 transition-all shadow-md active:scale-95"
                        >
                          <FileText size={14} />
                          Resume
                          <ExternalLink size={10} />
                        </a>
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex flex-col text-xs text-slate-500">
                          <span className="font-semibold text-slate-700">
                            {new Date(app.createdAt).toLocaleDateString()}
                          </span>
                          <span>
                            {new Date(app.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobApplications;