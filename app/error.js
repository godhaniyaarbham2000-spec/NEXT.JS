'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application Error:', error);
  }, [error]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f8d7da',
      color: '#721c24',
      fontFamily: 'sans-serif'
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Oops! this is error🚨</h2>
      <p style={{ marginBottom: '2rem' }}>Sorry, unexpected error .</p>
      
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        style={{
          padding: '10px 20px',
          fontSize: '1rem',
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
         Try Again
      </button>
    </div>
  );
}
