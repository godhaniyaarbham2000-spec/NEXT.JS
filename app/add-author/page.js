'use client'; 

import { useState } from 'react';

export default function AddAuthorPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio: ''
  });
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/authors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('✅ Author successfully added!');
        setFormData({ name: '', email: '', bio: '' });
      } else {
        setMessage('❌ Error: ' + data.error);
      }
    } catch (error) {
      setMessage('❌ Something went wrong: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-6">
      <div className="w-full max-w-lg bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-10 transform transition-all hover:scale-[1.01] duration-300">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">Create Author</h1>
          <p className="text-gray-500">Fill in the details to add a new author profile.</p>
        </div>
        
        {message && (
          <div className={`mb-6 p-4 rounded-xl text-sm font-medium flex items-center gap-2 transition-all ${message.includes('❌') ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-emerald-50 text-emerald-700 border border-emerald-100'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-gray-800 placeholder-gray-400 shadow-sm"
              placeholder="e.g. Amit Sharma"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all text-gray-800 placeholder-gray-400 shadow-sm"
              placeholder="amit@example.com"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-gray-700">Biography</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all text-gray-800 placeholder-gray-400 shadow-sm resize-none"
              placeholder="Write a short bio about the author..."
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3.5 px-4 rounded-xl text-white font-bold text-lg shadow-lg shadow-indigo-200 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 transform transition-all active:scale-95 ${isLoading ? 'opacity-70 cursor-wait' : 'hover:-translate-y-0.5'}`}
          >
            {isLoading ? 'Saving Author...' : 'Save Author'}
          </button>
        </form>
      </div>
    </div>
  );
}
