import React from 'react';

// ==========================================
// TOPIC 5: XSS (Cross-Site Scripting) aur
// TOPIC 6: CSRF (Cross-Site Request Forgery)
// ==========================================

// TOPIC 6 (CSRF) Example: Server Action
// Code kya kehta hai: Jab 'use server' likhte hain, Next.js apne aap ek secure, hidden Action ID 
// banata hai. Ye token assure karta hai ki request sirf isi app se aayi hai, CSRF attacks se bachata hai.
async function safeSubmitAction(formData) {
  'use server'; // Yeh function ko sirf Server par run karega
  const name = formData.get('name');
  console.log(`Server received: ${name}`);
}

export default function SecurityDemoPage() {
  // TOPIC 5 (XSS) Example Data:
  // Maan lijiye kisi hacker ne comment form mein yeh input diya hai
  const maliciousUserInput = "<img src='x' onerror='alert(\"XSS Attack! Hacker ne script chala di!\")' />";
  
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Security Demo</h1>

      <hr />

      {/* TOPIC 5: XSS Section */}
      <h2>TOPIC 5: XSS (Cross-Site Scripting)</h2>
      <p>
        <strong>Code kya kehta hai:</strong> Niche do tarike dikhaye hain data render karne ke. Ek Safe aur dusra Dangerous.
      </p>
      
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ border: '2px solid green', padding: '10px', width: '50%' }}>
          <h3>Safe Approach (React Default)</h3>
          <p>React string ko escape kar deta hai, isliye script run nahi hoti, bas text dikhta hai.</p>
          <div><strong>Output:</strong><br />{maliciousUserInput}</div>
        </div>

        <div style={{ border: '2px solid red', padding: '10px', width: '50%' }}>
          <h3>Dangerous Approach (dangerouslySetInnerHTML)</h3>
          <p>Agar 'dangerouslySetInnerHTML' use karein, toh browser isko asli code mankar run kar deta hai. Yahi XSS attack hai!</p>
          <div>
            <strong>Output:</strong><br />
            {/* ALERT: Ye code actual mein browser me attack simulate karega */}
            <div dangerouslySetInnerHTML={{ __html: maliciousUserInput }} />
          </div>
        </div>
      </div>

      <hr />

      {/* TOPIC 6: CSRF Section */}
      <h2>TOPIC 6: CSRF (Cross-Site Request Forgery)</h2>
      <p>
        <strong>Code kya kehta hai:</strong> Niche diye gaye Form mein <code>action=&#123;safeSubmitAction&#125;</code> pass kiya hai. Next.js isme automatic CSRF token lagakar form ko secure banata hai.
      </p>

      <div style={{ border: '2px solid blue', padding: '10px', marginTop: '10px' }}>
        <h3>Safe Form Example</h3>
        <form action={safeSubmitAction} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
          <label htmlFor="name">Enter Name:</label>
          <input type="text" id="name" name="name" required style={{ padding: '5px' }} />
          <button type="submit" style={{ padding: '8px', cursor: 'pointer' }}>Submit securely</button>
        </form>
      </div>

    </div>
  );
}
