export default function GlobalLoading() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f4f6f8',
      fontFamily: 'sans-serif'
    }}>
      {/* CSS For Spinner Animation */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .custom-spinner {
            border: 6px solid #e9ecef;
            border-top: 6px solid #007bff;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            animation: spin 1s linear infinite;
            margin-bottom: 20px;
          }
          .pulsing-text {
            animation: pulse 1.5s infinite;
            color: #007bff;
            font-size: 1.5rem;
            margin: 0;
          }
          @keyframes pulse {
            0% { opacity: 0.6; }
            50% { opacity: 1; }
            100% { opacity: 0.6; }
          }
        `}
      </style>

      {/* Loading UI */}
      <div className="custom-spinner"></div>
      <h2 className="pulsing-text">Loading...</h2>
      <p style={{ color: '#6c757d', marginTop: '10px' }}>Data fetching... please wait⏳</p>
    </div>
  );
}
