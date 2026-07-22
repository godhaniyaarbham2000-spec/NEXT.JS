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
    <div className="p-5 md:p-8 font-sans max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Security Demo</h1>

      <hr className="my-6 border-gray-200" />

      {/* TOPIC 5: XSS Section */}
      <h2 className="text-2xl font-bold text-slate-800 mb-4">TOPIC 5: XSS (Cross-Site Scripting)</h2>
      <p className="mb-6 text-gray-700">
        <strong>Code kya kehta hai:</strong> Niche do tarike dikhaye hain data render karne ke. Ek Safe aur dusra Dangerous.
      </p>
      
      <div className="flex flex-col md:flex-row gap-5 mb-8">
        <div className="border-2 border-green-500 rounded-lg p-5 w-full md:w-1/2 bg-green-50">
          <h3 className="text-xl font-bold text-green-700 mb-2">Safe Approach (React Default)</h3>
          <p className="text-sm text-green-800 mb-4">React string ko escape kar deta hai, isliye script run nahi hoti, bas text dikhta hai.</p>
          <div className="bg-white p-3 rounded border border-green-200 overflow-x-auto text-sm">
            <strong className="block mb-1 text-gray-700">Output:</strong>
            {maliciousUserInput}
          </div>
        </div>

        <div className="border-2 border-red-500 rounded-lg p-5 w-full md:w-1/2 bg-red-50">
          <h3 className="text-xl font-bold text-red-700 mb-2">Dangerous Approach (dangerouslySetInnerHTML)</h3>
          <p className="text-sm text-red-800 mb-4">Agar &apos;dangerouslySetInnerHTML&apos; use karein, toh browser isko asli code mankar run kar deta hai. Yahi XSS attack hai!</p>
          <div className="bg-white p-3 rounded border border-red-200 overflow-x-auto text-sm">
            <strong className="block mb-1 text-gray-700">Output:</strong>
            {/* ALERT: Ye code actual mein browser me attack simulate karega */}
            <div dangerouslySetInnerHTML={{ __html: maliciousUserInput }} />
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-200" />

      {/* TOPIC 6: CSRF Section */}
      <h2 className="text-2xl font-bold text-slate-800 mb-4">TOPIC 6: CSRF (Cross-Site Request Forgery)</h2>
      <p className="mb-6 text-gray-700">
        <strong>Code kya kehta hai:</strong> Niche diye gaye Form mein <code>action=&#123;safeSubmitAction&#125;</code> pass kiya hai. Next.js isme automatic CSRF token lagakar form ko secure banata hai.
      </p>

      <div className="border-2 border-blue-500 rounded-lg p-5 mt-4 bg-blue-50 max-w-md">
        <h3 className="text-xl font-bold text-blue-700 mb-4">Safe Form Example</h3>
        <form action={safeSubmitAction} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-semibold text-gray-700">Enter Name:</label>
            <input type="text" id="name" name="name" required className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
            Submit securely
          </button>
        </form>
      </div>

    </div>
  );
}
