"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';

interface Student {
  _id: string;
  name: string;
  whatsappNumber: string;
  level: string;
  department: string;
}

const Students = () => {
  const [name, setName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [level, setLevel] = useState('');
  const [department, setDepartment] = useState('');
  const [error, setError] = useState<string | null>(null); 



  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(
        'http://localhost:4000/api/students',
        { name, whatsappNumber, level, department },
        {
          headers: {
            'x-auth-token': localStorage.getItem('token'),
          },
        }
      );
      // Clear form inputs and fetch updated list of students
      setName('');
      setWhatsappNumber('');
      setLevel('');
      setDepartment('');
      setError(null); 
    } catch (err) {
      console.error(err);
      setError('Failed to add student'); 
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add Student</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md mb-6">
        {error && <div className="mb-4 text-red-600">{error}</div>}
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">WhatsApp Number</label>
          <input
            type="text"
            value={whatsappNumber}
            onChange={(e) => setWhatsappNumber(e.target.value)}
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
          Add Student
        </button>
      </form>
    </div>
  );
};

export default Students;
