'use client';
import { useState } from 'react';

export default function ClientFetchDemo() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchTime = async () => {
    setLoading(true);
    // Ye fetch browser se jaayega, isliye Inspect -> Network tab mein dikhega!
    const res = await fetch('/api/time');
    const json = await res.json();
    setData(json);
    setLoading(false);
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h2>Client-Side Fetch (Inspect &gt; Network tab demo)</h2>
      <p>Ye button dabane par API call tumhare <strong>Browser</strong> se jayegi, Server se nahi.</p>
      
      <button 
        onClick={fetchTime} 
        style={{ padding: '10px 20px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
        Fetch Time API
      </button>

      <div style={{ marginTop: '20px', padding: '20px', border: '2px solid #0070f3', borderRadius: '10px', width: '300px' }}>
        <h3>API Data:</h3>
        {loading ? <p>Loading...</p> : (
          data ? (
            <>
              <h1 style={{ fontSize: '30px', margin: '10px 0', color: '#0070f3' }}>{data.timeFetched}</h1>
              <p>{data.data}</p>
            </>
          ) : <p>Button dabao API call dekhne ke liye.</p>
        )}
      </div>
      <p style={{ marginTop: '20px', color: '#555', fontSize: '14px' }}>
        <strong>Kahan dekhein:</strong> F12 dabao, Network tab kholo, aur button dabao. Tumhe wahan <code>time</code> naam ki request saaf dikhegi!
      </p>
    </div>
  );
}
