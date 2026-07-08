'use client'; 

import { useState, useEffect } from 'react';

export default function AddPostPage() {
  const [authors, setAuthors] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: ''
  });
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const res = await fetch('/api/authors');
        const json = await res.json();
        if (json.success) {
          setAuthors(json.data);
        }
      } catch (error) {
        console.error("Authors load  error:", error);
      }
    };
    fetchAuthors();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('✅ Post successfully published!');
        setFormData({ title: '', content: '', author: '' });
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-rose-100 via-sky-50 to-teal-100 p-6">
      <div className="w-full max-w-2xl bg-white/70 backdrop-blur-2xl border border-white/50 shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] rounded-[2rem] p-10 transform transition-all hover:scale-[1.01] duration-500">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-600 tracking-tight mb-3">
            Write a New Post
          </h1>
          <p className="text-gray-500 text-lg">Share your thoughts with the world, beautifully.</p>
        </div>
        
        {message && (
          <div className={`mb-6 p-4 rounded-2xl text-sm font-semibold flex items-center gap-3 transition-all ${message.includes('❌') ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-teal-50 text-teal-700 border border-teal-100'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">Post Title</label>
            <input
              type="text"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-white/60 border border-gray-200/80 rounded-2xl focus:outline-none focus:ring-4 focus:ring-sky-500/20 focus:border-sky-500 transition-all text-gray-900 placeholder-gray-400 font-medium text-lg shadow-sm"
              placeholder="e.g. The Future of Web Development"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">Content</label>
            <textarea
              name="content"
              required
              value={formData.content}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-white/60 border border-gray-200/80 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-gray-900 placeholder-gray-400 font-medium text-base shadow-sm resize-none"
              placeholder="Write your amazing post here..."
              rows="6"
            ></textarea>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">Author</label>
            <div className="relative">
              <select
                name="author"
                required
                value={formData.author}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-white/60 border border-gray-200/80 rounded-2xl focus:outline-none focus:ring-4 focus:ring-sky-500/20 focus:border-sky-500 transition-all text-gray-900 font-medium shadow-sm appearance-none cursor-pointer"
              >
                <option value="" disabled>Select an author...</option>
                {authors.map((auth) => (
                  <option key={auth._id} value={auth._id}>
                    {auth.name} ({auth.email})
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-500">
                <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
            {authors.length === 0 && (
              <p className="text-sm text-rose-500 mt-2 font-medium">Please add an author first before creating a post.</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading || authors.length === 0}
            className={`w-full py-4 px-6 rounded-2xl text-white font-black text-xl tracking-wide shadow-[0_10px_20px_rgba(2,_132,_199,_0.3)] bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 focus:outline-none focus:ring-4 focus:ring-sky-500/40 transform transition-all active:scale-95 ${
              (isLoading || authors.length === 0) 
                ? 'opacity-60 cursor-not-allowed shadow-none hover:translate-y-0' 
                : 'hover:-translate-y-1'
            }`}
          >
            {isLoading ? 'Publishing...' : 'Publish Post 🚀'}
          </button>
        </form>
      </div>
    </div>
  );
}
