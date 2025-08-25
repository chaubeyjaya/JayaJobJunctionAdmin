"use client";
import React, { useEffect, useState } from "react";

export default function Welcome() {
  const [adminName, setAdminName] = useState("");

  useEffect(() => {
    // Read token from query param
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      // Save token in localStorage for future use
      localStorage.setItem("adminToken", token);

      // Verify token with backend
      fetch("http://localhost:5000/api/admin/profile", {
        headers: { Authorization: token },
      })
        .then(res => res.json())
        .then(data => {
          if (data.name) setAdminName(data.name);
          else window.location.href = "http://localhost:3000/admin-login";
        })
        .catch(() => window.location.href = "http://localhost:3000/adminregister");
    } else {
      // No token → redirect to UserFrontend login
      window.location.href = "http://localhost:3000/adminregister";
    }
  }, []);

  return (
    <div>
      {adminName ? <h1>Welcome, {adminName} 🎉</h1> : <p>Loading...</p>}
    </div>
  );
}
