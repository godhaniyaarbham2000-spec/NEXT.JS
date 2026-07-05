"use client";
import { useState, useEffect } from "react";

const Contact = () => {
  // --- States for Dummy API (/api) ---
  const [dummyApiData, setDummyApiData] = useState("Loading...");
  const [dummyNameInput, setDummyNameInput] = useState("");
  const [dummyPostResponse, setDummyPostResponse] = useState("");

  // --- States for Database API (/api/contact) ---
  const [dbApiData, setDbApiData] = useState("Loading...");
  const [dbNameInput, setDbNameInput] = useState("");
  const [dbEmailInput, setDbEmailInput] = useState("");
  const [dbPostResponse, setDbPostResponse] = useState("");

  // ==========================================
  // DUMMY API LOGIC (/api)
  // ==========================================
  useEffect(() => {
    const fetchDummyData = async () => {
      try {
        const response = await fetch('/api');
        const data = await response.json();
        setDummyApiData(data.message);
      } catch (error) {
        setDummyApiData("Error fetching dummy data!");
      }
    };
    fetchDummyData();
  }, []);

  const handleDummySubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: dummyNameInput }) 
      });
      const data = await response.json();
      
      // Browser ke "Inspect -> Console" tab me data dikhane ke liye
      console.log("Browser Console - Dummy API Response:", data);
      
      setDummyPostResponse(data.message);
      setDummyNameInput("");
    } catch (error) {
      setDummyPostResponse("Error in Dummy POST");
    }
  };

  // ==========================================
  // DATABASE API LOGIC (/api/contact)
  // ==========================================
  useEffect(() => {
    const fetchDbData = async () => {
      try {
        const response = await fetch('/api/contact');
        const data = await response.json();
        if (response.ok && Array.isArray(data)) {
          setDbApiData(`Total Contacts in Database: ${data.length}`);
        } else {
          setDbApiData(`Error: ${data.error || "Unknown Error"}`);
        }
      } catch (error) {
        setDbApiData("Error fetching database data!");
      }
    };
    fetchDbData();
  }, [dbPostResponse]); // Re-run when new data is posted

  const handleDbSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: dbNameInput, email: dbEmailInput }) 
      });
      const data = await response.json();
      
      if (response.ok) {
        setDbPostResponse(data.message);
        setDbNameInput("");
        setDbEmailInput("");
      } else {
        setDbPostResponse("Error: " + data.error);
      }
    } catch (error) {
      setDbPostResponse("Error in Database POST");
    }
  };

  return (
    <div className="m-6 flex flex-col gap-8">
      <h1 className="text-2xl font-bold">Welcome! Contact Page</h1>
      
      {/* ========================================== */}
      {/* SECTION 1: DUMMY API(Without Database) */}
      {/* ========================================== */}
      <div className="p-4 border-2 border-gray-300 rounded shadow">
        <h2 className="text-xl font-bold mb-4 text-gray-700">1.  API WIthout Database </h2>
        
        <div className="mb-4">
          <p className="font-semibold">GET Request (from /api):</p>
          <p className="text-blue-600">{dummyApiData}</p>
        </div>

        <form onSubmit={handleDummySubmit} className="flex flex-col gap-2 max-w-sm">
          <p className="font-semibold">POST Request (to /api):</p>
          <input 
            type="text" 
            placeholder="your name" 
            value={dummyNameInput}
            onChange={(e) => setDummyNameInput(e.target.value)}
            className="border p-2 rounded text-black"
            required
          />
          <button type="submit" className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600">
            Send Dummy Data
          </button>
        </form>

        {dummyPostResponse && (
          <p className="mt-2 text-green-600 font-medium">👉 {dummyPostResponse}</p>
        )}
      </div>


      {/* ========================================== */}
      {/* SECTION 2: PRISMA DATABASE API */}
      {/* ========================================== */}
      <div className="p-4 border-2 border-blue-400 rounded shadow bg-blue-50">
        <h2 className="text-xl font-bold mb-4 text-blue-800">2 API With MySQL Database</h2>
        
        <div className="mb-4">
          <p className="font-semibold">GET Request (from /api/contact):</p>
          <p className="text-blue-600">{dbApiData}</p>
        </div>

        <form onSubmit={handleDbSubmit} className="flex flex-col gap-2 max-w-sm">
          <p className="font-semibold">POST Request (to /api/contact):</p>
          <input 
            type="text" 
            placeholder="your name..." 
            value={dbNameInput}
            onChange={(e) => setDbNameInput(e.target.value)}
            className="border p-2 rounded text-black"
            required
          />
          <input 
            type="email" 
            placeholder="your email..." 
            value={dbEmailInput}
            onChange={(e) => setDbEmailInput(e.target.value)}
            className="border p-2 rounded text-black"
            required
          />
          <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
            Save in Database
          </button>
        </form>

        {dbPostResponse && (
          <p className="mt-2 text-green-600 font-medium">👉 {dbPostResponse}</p>
        )}
      </div>

    </div>
  );
};

export default Contact;