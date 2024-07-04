"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Page() {
  const [announcements, setAnnouncements] = useState([]);
  const [error, setError] = useState("");

  const fetchAnnouncements = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No token found');
        return;
      }

      const res = await axios.get('http://localhost:4000/api/announcements', {
        headers: {
          'x-auth-token': token,
        },
      });
      setAnnouncements(res.data);
      setError("");
    } catch (err:any) {
      console.error('Fetch Announcements Error:', err);
      if (err.response && err.response.status === 401) {
        setError('Unauthorized: Please log in again.');
      } else {
        setError('Failed to fetch announcements');
      }
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Announcements</h2>
      {error && (
        <p className="text-red-500 bg-red-100 rounded-md p-4 w-full mb-4">
          {error}
        </p>
      )}
      <ul className="space-y-4">
        {announcements.map((announcement: any) => (
          <li key={announcement._id} className="p-4 border rounded-lg shadow-md bg-white">
            <h3 className="text-2xl font-semibold mb-2">{announcement.title}</h3>
            <p className="text-gray-700 mb-2">{announcement.content}</p>
            <p className="text-gray-700"><strong>Level:</strong> {announcement.level}</p>
            <p className="text-gray-700"><strong>Department:</strong> {announcement.department}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
