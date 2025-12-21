"use client";
import React, { useEffect, useState } from "react";

const JobApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/jobapply");
        const data = await res.json();
        setApplications(data);
      } catch (err) {
        setError("Failed to fetch applications");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading applications...</p>;
  if (error) return <p className="text-red-600 text-center mt-10">{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Student Job Applications</h1>

      {applications.length === 0 ? (
        <p className="text-center text-gray-500">No applications found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border-b">Name</th>
                <th className="px-4 py-2 border-b">Email</th>
                <th className="px-4 py-2 border-b">Phone</th>
                <th className="px-4 py-2 border-b">Message</th>
                <th className="px-4 py-2 border-b">Resume</th>
                <th className="px-4 py-2 border-b">Applied At</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{app.name}</td>
                  <td className="px-4 py-2 border-b">{app.email}</td>
                  <td className="px-4 py-2 border-b">{app.phone}</td>
                  <td className="px-4 py-2 border-b">{app.message}</td>
                  <td className="px-4 py-2 border-b text-blue-600">
                    <a
                      href={`http://localhost:5000/${app.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      View File
                    </a>
                  </td>
                  <td className="px-4 py-2 border-b">
                    {new Date(app.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default JobApplications;
