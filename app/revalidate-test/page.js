// Option 1: Pura page har 10 seconds baad revalidate karna ho toh yahan export likhte hain:
// export const revalidate = 10; 

export default async function RevalidateTest() {
  
  
  const res = await fetch('https://timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata', {
    next: { revalidate: 10 } 
  });
  
  if (!res.ok) {
    throw new Error('API down  fetch failed');
  }

  const data = await res.json();

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Next.js Revalidate (ISR) Demo ⏱️</h1>
      <p style={{ fontSize: '1.2rem' }}>
        Yeh page data ko <strong>10 Seconds</strong> ke liye cache (save) kar leta hai.
      </p>
      
      <div style={{ padding: '1rem', backgroundColor: '#e9ecef', borderRadius: '8px', marginTop: '1rem', borderLeft: '5px solid #007bff' }}>
        <h2>Fetched Time from Server:</h2>
        <h1 style={{ color: '#007bff' }}>{data.time} - {data.seconds} seconds</h1>
      </div>
      
      
    </div>
  );
}
