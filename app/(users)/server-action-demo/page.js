'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { createContactAction } from './actions';

// Alag component jisme useFormStatus use ho (Zaroori hai ki yeh <form> ke andar ho)
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button 
      type="submit" 
      disabled={pending}
      className={`p-2 rounded text-white ${pending ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
    >
      {pending ? 'Saving...' : 'Submit on Server'}
    </button>
  );
}

export default function ServerActionDemo() {
  // useActionState ka use karke action aur state handle karte hain
  const [state, formAction] = useActionState(createContactAction, null);

  return (
    <div className="m-6 p-6 border rounded-md shadow-md max-w-md">
      <h1 className="text-2xl font-bold mb-4">Server Action Demo (Advanced)</h1>
      <p className="mb-4 text-gray-600">
        Ab yeh form <code className="bg-gray-100 p-1 rounded">useActionState</code> aur <code className="bg-gray-100 p-1 rounded">useFormStatus</code> use kar raha hai. 
        Button dabane par loading dekhein aur khali submit karne par validation error dekhein.
      </p>
      
      {/* Agar success ho gaya toh message dikhayein */}
      {state?.success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {state.message}
        </div>
      )}

      {/* action mein ab humara formAction pass hoga */}
      <form action={formAction} className="flex flex-col gap-3">
        <label className="font-semibold" htmlFor="name">Name:</label>
        
        <input 
          type="text" 
          id="name" 
          name="name" 
          // defaultValue={state?.name} // hum defaultValue use kar sakte hain pichla type kiya hua bachane ke liye
          className={`border p-2 rounded text-black ${state?.error ? 'border-red-500' : 'border-gray-300'}`} 
          placeholder="your name..."
        />
        
        {/* Validation Error dikhane ke liye */}
        {state?.error && (
          <p className="text-red-500 text-sm mt-[-8px]">{state.error}</p>
        )}

        {/* Submit button alag component mein taaki useFormStatus kaam kare */}
        <SubmitButton />
      </form>
    </div>
  );
}
