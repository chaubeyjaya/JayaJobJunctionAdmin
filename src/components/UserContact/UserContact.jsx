"use client"
import React, { useEffect, useState } from 'react';
import { Mail, Phone, User, Calendar } from 'lucide-react';

const UserContact = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/contact/all');
        const data = await response.json();
        if (data.success) {
          setMessages(data.messages);
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) return <div className="text-center py-20 text-white">Loading messages...</div>;

  return (
    <div className="min-h-screen bg-zinc-950 p-8 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 border-l-4 border-cyan-500 pl-4">
          Contact Submissions
        </h1>

        {messages.length === 0 ? (
          <p className="text-gray-400 text-center py-10">No messages found.</p>
        ) : (
          <div className="grid gap-6">
            {messages.map((msg) => (
              <div key={msg._id} className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg shadow-md hover:border-cyan-500/50 transition-all">
                <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                      <User size={18} />
                      <span>{msg.fullName}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Mail size={16} />
                      <span>{msg.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Phone size={16} />
                      <span>{msg.phoneNumber}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-500 text-sm italic">
                    <Calendar size={16} />
                    <span>{new Date(msg.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="bg-zinc-800/50 p-4 rounded-md mt-2 border-l-2 border-zinc-700">
                  <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                    {msg.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserContact;