// RegisterAdmin.tsx
"use client";

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const RegisterAdmin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/admin/register', { username, password });
      alert('Admin registered successfully');
      setUsername('');
      setPassword('');
      router.push('/login'); // Redirect to homepage or login page after registration
    } catch (err) {
      console.error(err);
      alert('Failed to register admin');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Admin Registration</h2>
      <form onSubmit={handleSubmit} className="bg-white p-3 shadow-md">
        <div className="mb-4">
          <label className="block mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
         <button type="submit" className="bg-black text-white py-2 px-4 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterAdmin;
