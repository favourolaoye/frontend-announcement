"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';

const Announcements = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [level, setLevel] = useState('');
  const [department, setDepartment] = useState('');
  const [announcements, setAnnouncements] = useState([]);
  const [error, setError] = useState("");

  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No token found');
        return;
      }

      await axios.post('http://localhost:4000/api/announcements', { title, content, level, department },
        {
          headers: {
            'x-auth-token': token,
          },
        }
      );
      setTitle('');
      setContent('');
      setLevel('');
      setDepartment('');
      setError("");
    } catch (err : any) {
      console.error('Create Announcement Error:', err);
      if (err.response && err.response.status === 401) {
        setError('Unauthorized: Please log in again.');
      } else {
        setError('Failed to create announcement');
      }
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Create Announcement</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md mb-6">
        {error && <div className="mb-4 text-red-600">{error}</div>}
        <div className="mb-2">
          <label className="block mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Level</label>
          <input
            type="text"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Department</label>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
          Send
        </button>
      </form>

    </div>
  );
};

export default Announcements;
