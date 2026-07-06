import { revalidatePath } from 'next/cache';

export default function ServerActionDemo() {
  
  // Yeh ek Server Action hai
  async function handleFormSubmit(formData) {
    'use server'; 
    
    const name = formData.get('name');
    
    // Yeh log browser console mein nahi, balki aapke VS Code/Terminal mein dikhega 
    // jahan Next.js server run ho raha hai (npm run dev).
    console.log("🔥 [SERVER ACTION EXECUTED] Form submit hua hai! User ka naam:", name);
  }

  return (
    <div className="m-6 p-6 border rounded-md shadow-md max-w-md">
      <h1 className="text-2xl font-bold mb-4">Server Action Demo</h1>
      <p className="mb-4 text-gray-600">
        Yeh form bina alag se API banaye directly server par run hoga. Submit karne ke baad apna Terminal check karein!
      </p>
      
      <form action={handleFormSubmit} className="flex flex-col gap-3">
        <label className="font-semibold" htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required 
          className="border border-gray-300 p-2 rounded text-black" 
          placeholder="your name..."
        />
        <button 
          type="submit" 
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Submit on Server
        </button>
      </form>
    </div>
  );
}
