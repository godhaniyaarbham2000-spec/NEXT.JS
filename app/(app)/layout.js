import Sidebar from '@/components/Sidebar';

export default function AppLayout({ children }) {
  // 14. YEH KYU HAI: Route Group Layout.
  // Folder ka naam `(app)` hai, parentheses ke andar hai.
  // Iska fayda yeh hai ki URL path change nahi hoga (URL me `/app` nahi aayega),
  // lekin iske andar jitne bhi pages honge, un sabhi par yeh layout aur sidebar common apply ho jayega.
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 h-16 flex items-center px-6">
          <h1 className="font-semibold">Top Navigation</h1>
        </header>
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
