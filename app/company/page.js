import React from 'react';

export default function CompanyPage() {
  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: 'blue' }}>Welcome to Our Company Page!</h1>
      <p>
        <strong>Middleware Magic:</strong> Aapne browser mein <code>/about-us</code> type kiya tha, lekin Middleware ne background mein request ko is page (<code>/company</code>) par <strong>Rewrite</strong> kar diya.
      </p>
      <p>URL Check kijiye, upar abhi bhi <code>/about-us</code> hi likha hoga! Yahi Rewrite ka jaadu hai.</p>
    </div>
  );
}
