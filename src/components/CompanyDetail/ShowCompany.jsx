"use client"
import React, { useState, useEffect } from 'react';

const ShowCompany = () => {
  const [showForm, setShowForm] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contact: '',
    email: '',   // 👈 New field
    status: '',
    interviewDate: '',
    interviewLocation: '',
  });

  // Load companies on mount
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/companies/all');
        const data = await res.json();
        setCompanies(data);
      } catch (err) {
        console.error('Error fetching companies:', err);
      }
    };
    fetchCompanies();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/companies/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to save company');

      const newCompany = await response.json();
      setCompanies((prev) => [newCompany, ...prev]); // update UI

      // Reset form and close modal
      setFormData({
        name: '',
        address: '',
        contact: '',
        email: '',   // reset email
        status: '',
        interviewDate: '',
        interviewLocation: '',
      });
      setShowForm(false);
    } catch (err) {
      console.error('Error:', err.message);
    }
  };

  return (
    <div className={`p-6 relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 ${showForm ? 'overflow-hidden' : ''}`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Company Tracker</h1>
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center gap-2"
          onClick={() => setShowForm(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Add Company
        </button>
      </div>

      {/* Company Cards */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {companies.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center py-12">
            <p className="text-gray-500 text-lg">No companies added yet.</p>
            <p className="text-gray-400">Click "Add Company" to get started</p>
          </div>
        ) : (
          companies.map((company, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 border-l-4 border-blue-500">
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-xl font-bold text-gray-800">{company.name}</h2>
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium ${
                    company.status === 'Applied'
                      ? 'bg-yellow-100 text-yellow-800'
                      : company.status === 'Interview Scheduled'
                      ? 'bg-blue-100 text-blue-800'
                      : company.status === 'Offer Received'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {company.status}
                </span>
              </div>
              <div className="text-gray-600 space-y-2">
                <p><strong>📍 Address:</strong> {company.address}</p>
                <p><strong>📞 Contact:</strong> {company.contact}</p>
                <p><strong>📧 Email:</strong> {company.email}</p> {/* 👈 Show email */}
                {company.interviewDate && (
                  <p><strong>📅 Interview:</strong> {company.interviewDate} at {company.interviewLocation}</p>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md border border-gray-200">
            <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
              <h3 className="text-lg font-semibold">Add New Company</h3>
              <button onClick={() => setShowForm(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <input type="text" name="name" placeholder="Company Name" value={formData.name} onChange={handleChange} required className="w-full p-3 border rounded" />
              <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required className="w-full p-3 border rounded" />
              <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} required className="w-full p-3 border rounded" />
              
              {/* 👇 New Email Input */}
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-3 border rounded" />

              <select name="status" value={formData.status} onChange={handleChange} required className="w-full p-3 border rounded">
                <option value="">Select Status</option>
                <option value="Applied">Applied</option>
                <option value="Interview Scheduled">Interview Scheduled</option>
                <option value="Offer Received">Offer Received</option>
                <option value="Rejected">Rejected</option>
              </select>

              <input type="date" name="interviewDate" value={formData.interviewDate} onChange={handleChange} className="w-full p-3 border rounded" />
              <input type="text" name="interviewLocation" placeholder="Interview Location" value={formData.interviewLocation} onChange={handleChange} className="w-full p-3 border rounded" />

              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
                Save Company
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowCompany;
