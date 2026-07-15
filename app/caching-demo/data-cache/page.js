export const dynamic = 'force-dynamic'; // Ensures this page renders dynamically to show the different fetch behaviors

export default async function DataCachePage() {
  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';

  // 1. Force Cache (Never updates unless redeployed)
  const res1 = await fetch(`${baseUrl}/api/time`, { cache: 'force-cache' });
  const dataForceCache = await res1.json();

  // 2. No Store (Updates on every single refresh)
  const res2 = await fetch(`${baseUrl}/api/time`, { cache: 'no-store' });
  const dataNoStore = await res2.json();

  // 3. Time-based ISR (Updates every 10 seconds)
  const res3 = await fetch(`${baseUrl}/api/time`, { next: { revalidate: 10 } });
  const dataISR = await res3.json();

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h2>Topic 02: fetch() Cache Options</h2>
      <p>Is page ko baar-baar refresh (F5) karo aur dekho time kaise badalta hai.</p>

      <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
        <Card title="1. force-cache (Static)" time={dataForceCache.timeFetched} desc="Time kabhi change nahi hoga. Hamesha cache se aayega." />
        <Card title="2. no-store (Dynamic)" time={dataNoStore.timeFetched} desc="Time har refresh par change hoga (Live data)." color="#e74c3c" />
        <Card title="3. ISR (revalidate: 10)" time={dataISR.timeFetched} desc="Har 10 second baad background mein refresh hoga." color="#f39c12" />
      </div>
    </div>
  );
}

function Card({ title, time, desc, color = '#2ecc71' }) {
  return (
    <div style={{ border: `2px solid ${color}`, padding: '20px', borderRadius: '10px', width: '300px' }}>
      <h3 style={{ color }}>{title}</h3>
      <p>Data fetch time:</p>
      <h1 style={{ fontSize: '30px', margin: '10px 0' }}>{time}</h1>
      <p style={{ fontSize: '14px', color: '#555' }}>{desc}</p>
    </div>
  );
}
