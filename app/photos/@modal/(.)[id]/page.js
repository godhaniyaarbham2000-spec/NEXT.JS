'use client';
import { use } from 'react';
import { useRouter } from 'next/navigation';

export default function PhotoModal({ params }) {
  const router = useRouter();
  
  // Safe params unwrap: Next.js 14 vs 15 compatibility
  // Agar params Promise nahi hai to `use()` crash kar sakta hai.
  const id = params && typeof params.then === 'function' ? use(params).id : params?.id;

  // 11. YEH KYU HAI: Intercepted Route '(.)'.
  // Yeh current folder ke route (localhost:3000/photos/1) ko intercept karega jab user link pe click karke aayega.
  // Result yeh hoga ki background me Gallery dikhegi, aur upar se yeh Modal pop-up hoga.
  return (
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={() => router.back()} // Background click karne par close ho jayega (wapis pichle page pe jayega)
    >
      <div 
        className="bg-white dark:bg-gray-900 rounded-xl max-w-3xl w-full p-6 shadow-2xl"
        onClick={e => e.stopPropagation()} // Card ke upar click karne se modal band na ho
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Modal Overlay</h2>
          <button 
            onClick={() => router.back()} // Back button dabane se URL apne aap purana ho jata hai aur modal close hota hai.
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-900 dark:text-gray-100"
          >
            ✕
          </button>
        </div>
        
        <div className="bg-gray-200 dark:bg-gray-800 rounded-xl aspect-video relative overflow-hidden flex items-center justify-center mb-4">
          <img 
            src={`https://picsum.photos/seed/${id}/1200/800`} 
            alt={`Photo ${id}`}
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <span className="font-medium text-4xl text-white z-10 drop-shadow-md bg-black/50 px-4 py-2 rounded">Photo {id}</span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400">
          This is the intercepted modal view. Notice how the gallery is still mounted in the background!
        </p>
      </div>
    </div>
  );
}
