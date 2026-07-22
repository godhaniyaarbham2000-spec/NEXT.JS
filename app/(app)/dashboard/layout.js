export default function DashboardLayout({ children, analytics, team }) {
  // 1. YEH KYU HAI: Parallel Routes ka setup.
  // 'analytics' aur 'team' naam ke folders (jinke aage @ laga hai) directly is function ko prop ke roop mein milte hain.
  // Iska fayda yeh hai ki dono sections apna apna data independently load karte hain bina kisi dusre ko roke.
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <h2 className="text-xl font-bold mb-4 text-center md:text-left">Main Content (children)</h2>
        {/* Main page.js ka data */}
        {children}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 shadow-sm border border-blue-100 dark:border-blue-900/30">
          <h2 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">@analytics slot</h2>
          {/* Analytics slot yaha show hoga */}
          {analytics}
        </div>
        
        <div className="bg-green-50 dark:bg-green-950/20 rounded-xl p-6 shadow-sm border border-green-100 dark:border-green-900/30">
          <h2 className="text-lg font-bold text-green-600 dark:text-green-400 mb-2">@team slot</h2>
          {/* Team slot yaha show hoga */}
          {team}
        </div>
      </div>
    </div>
  );
}
