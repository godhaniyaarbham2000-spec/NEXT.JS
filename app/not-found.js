import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f8f9fa',
      color: '#343a40',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ fontSize: '4rem', margin: '0' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Page Not Found 🔍</h2>
      <p style={{ marginBottom: '2rem' }}>Lagta hai aap kisi galat URL par aa gaye hain.</p>
      
      <Link href="/" style={{
        padding: '10px 20px',
        fontSize: '1rem',
        backgroundColor: '#007bff',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px'
      }}>
        Home
      </Link>
    </div>
  );
}
