"use client";
import { useState, useEffect } from "react";

const Contact = () => {
  const [apiData, setApiData] = useState("Loading...");
  const [nameInput, setNameInput] = useState("");
  const [postResponse, setPostResponse] = useState("");

  // GET Request wala function (Pehle wala)
  useEffect(() => {
    const fetchData = async () => {
      
      try {
        const response = await fetch('/api');
        const data = await response.json();
        setApiData(data.message);
      } catch (error) {
        setApiData("Error fetching data!");
      }
    };
    fetchData();
  }, []);

  // Form submit (POST Request) wala function
  const handleSubmit = async (e) => {
    e.preventDefault(); // Page refresh hone se rokne ke liye
    
    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Yaha par hum Backend ko bata rahe hain ki data Contact page se aa raha hai
        body: JSON.stringify({ name: nameInput, source: 'Contact Page' }) 
      });
    
      const data = await response.json();
      setPostResponse(data.message); // Backend se aaya hua reply screen par dikhane ke liye
      setNameInput(""); // Input khali karne ke liye
    } catch (error) {
      setPostResponse("Kuch gadbad ho gayi POST karne me.");
    }
  };

  return (
    <div className="m-6">
      <h1 className="text-2xl font-bold mb-4">Welcome! Contact Page</h1>
      
      {/* Puraana GET wala data */}
      <div className="p-4 bg-gray-100 rounded shadow mb-6">
        <h2 className="font-semibold text-lg">GET API se aaya data:</h2>
        <p className="text-blue-600 mt-2">{apiData}</p>
      </div>

      {/* Naya Form POST test karne ke liye */}
      <div className="p-4 border rounded shadow">
        <h2 className="font-semibold text-lg mb-2">Form Test (POST)</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Apna naam likho..." 
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            className="border p-2 mr-2 rounded text-black"
            required
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Send (POST)
          </button>
        </form>

        {/* Backend se wapas aaya reply */}
        {postResponse && (
          <p className="mt-4 text-green-600 font-medium">👉 {postResponse}</p>
        )}
      </div>
    </div>
  );
};

export default Contact;