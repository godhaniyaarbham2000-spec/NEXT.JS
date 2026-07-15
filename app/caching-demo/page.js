import Link from 'next/link';

export default function CachingDemo() {
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Day 11: Caching & Performance Demos 🚀</h1>
      <p>Yahan par aap cache ki alag-alag strategies ko live test kar sakte ho.</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '30px' }}>
        <Link href="/caching-demo/data-cache" style={linkStyle}>
          1. Data Cache Options (force-cache, no-store, time-based)
        </Link>
        <Link href="/caching-demo/on-demand" style={linkStyle}>
          2. On-Demand Revalidation (revalidateTag)
        </Link>
        <Link href="/caching-demo/streaming" style={linkStyle}>
          3. React Suspense Streaming (Progressive Loading)
        </Link>
        <Link href="/caching-demo/client-fetch" style={linkStyle}>
          4. Client-Side Fetch (Inspect Network Tab)
        </Link>
      </div>
    </div>
  );
}

const linkStyle = {
  padding: '15px 20px',
  backgroundColor: '#0070f3',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '8px',
  fontWeight: 'bold',
  width: 'fit-content'
};
