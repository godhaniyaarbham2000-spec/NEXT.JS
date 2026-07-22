import Sidebar from '@/components/Sidebar';

export default function PhotosLayout({ children, modal }) {
  // 8. YEH KYU HAI: Photos page ka layout. 
  // Isme 'modal' prop @modal slot se aa raha hai (parallel route).
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 p-6 relative">
        {/* Background ki picture gallery yaha aayegi */}
        {children}
        
        {/* Agar koi intercept karta hai route ko (photo click karke) to yaha Modal overlay aayega */}
        {modal}
      </div>
    </div>
  );
}
