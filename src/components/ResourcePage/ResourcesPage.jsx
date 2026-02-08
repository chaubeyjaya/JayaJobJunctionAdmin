"use client";
import React, { useState } from "react";

const ResourcesPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: "",
    category: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/resources/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        setMessage("Resource added successfully ✅");
        setFormData({
          title: "",
          description: "",
          link: "",
          category: ""
        });
      } else {
        setMessage("Failed to add resource ❌");
      }
    } catch (error) {
      setMessage("Server error ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Add New Resource
        </h1>

        {message && (
          <p className="text-center mb-4 text-sm text-green-600">
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Resource Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          />

          <textarea
            name="description"
            placeholder="Resource Description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          />

          <input
            type="url"
            name="link"
            placeholder="Resource Link"
            value={formData.link}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          />

          <input
            type="text"
            name="category"
            placeholder="Category (Optional)"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add Resource
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResourcesPage;

