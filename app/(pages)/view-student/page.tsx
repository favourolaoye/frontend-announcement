"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Page() {
  interface Student {
    _id: string;
    name: string;
    whatsappNumber: string;
    level: string;
    department: string;
  }

  const [students, setStudents] = useState<Student[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch students from the server
  const fetchStudents = async () => {
    try {
      const res = await axios.get<Student[]>('http://localhost:4000/api/students', {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      });
      setStudents(res.data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch students');
    }
  };

  // useEffect to fetch students on component mount
  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Students</h2>
      {error && (
        <p className="text-red-500 bg-red-100 rounded-md p-4 w-full mb-4">
          {error}
        </p>
      )}
      <ul className="space-y-4">
        {students.map((student) => (
          <li key={student._id} className="p-4 border rounded-lg shadow-md bg-white">
            <h3 className="text-2xl font-semibold mb-2">{student.name}</h3>
            <p className="text-gray-700"><strong>WhatsApp Number:</strong> {student.whatsappNumber}</p>
            <p className="text-gray-700"><strong>Level:</strong> {student.level}</p>
            <p className="text-gray-700"><strong>Department:</strong> {student.department}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
