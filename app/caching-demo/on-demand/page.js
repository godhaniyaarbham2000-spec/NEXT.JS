import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

// Server Action for On-Demand Revalidation
async function refreshDataAction() {
  'use server'
  revalidateTag('my-live-tag'); 
  // Ye action execute hone pe cache delete ho jayega!
}

export default async function OnDemandPage() {
  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';

  // Fetch with a specific tag
  const res = await fetch(`${baseUrl}/api/time`, { 
    next: { tags: ['my-live-tag'] } 
  });
  const data = await res.json();

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h2>Topic 03: On-Demand Revalidation (revalidateTag)</h2>
      <p>Ye time <strong>hamesha cache rahega</strong>, chahe aap kitni baar bhi refresh (F5) karo.</p>
      
      <div style={{ padding: '20px', border: '2px dashed #0070f3', borderRadius: '10px', width: '350px', marginTop: '20px' }}>
        <h3>Cached Time:</h3>
        <h1 style={{ fontSize: '35px', color: '#0070f3' }}>{data.timeFetched}</h1>
        
        <form action={refreshDataAction}>
          <button 
            type="submit" 
            style={{ padding: '10px 20px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
            Bust Cache & Fetch New Data!
          </button>
        </form>
        <p style={{ fontSize: '12px', marginTop: '10px' }}>Button dabane par `revalidateTag('my-live-tag')` chalega.</p>
      </div>
    </div>
  );
}
