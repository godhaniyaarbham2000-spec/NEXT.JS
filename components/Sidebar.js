'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, Users, Image as ImageIcon, Settings, Menu, X, ChevronRight } from 'lucide-react';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
  { href: '/about', label: 'About Us', icon: Users },
  { href: '/photos', label: 'Photo Gallery', icon: ImageIcon },
];

export default function Sidebar() {
  // 13. YEH KYU HAI: Navigation Pattern (Active State & Collapsed Sidebar).
  
  // 'usePathname' Next.js ka hook hai jisse pata chalta hai ki user currently kis URL par hai. 
  // Iska use karke hum Active link (jis page pe hain) ko highlight kar sakte hain.
  const pathname = usePathname();
  
  // Yeh Sidebar ko open ya collapse karne ka state hai (chota ya bada).
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`${collapsed ? 'w-16' : 'w-64'} transition-all duration-300 bg-gray-900 border-r border-gray-800 flex flex-col h-screen text-white sticky top-0`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        {!collapsed && <span className="font-bold text-lg text-purple-400 truncate">SaaS Demo</span>}
        <button 
          onClick={() => setCollapsed(!collapsed)} 
          className="text-gray-400 hover:text-white p-1 rounded hover:bg-gray-800"
        >
          {collapsed ? <ChevronRight size={20} /> : <Menu size={20} />}
        </button>
      </div>
      
      <nav className="flex-1 px-2 py-4 overflow-y-auto overflow-x-hidden">
        {navItems.map((item) => {
          const Icon = item.icon;
          
          // Agar pathname (current URL) hamare menu ke link (item.href) se start hota hai, to isActive 'true' ho jayega.
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href) && item.href !== '/users');
          
          return (
            <Link 
              key={item.href} 
              href={item.href} 
              // Yaha hum conditional CSS laga rahe hain: Agar isActive 'true' hai toh purple color, warna grey color.
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1.5 transition-colors whitespace-nowrap ${
                isActive 
                  ? 'bg-purple-600/20 text-purple-400 font-medium border border-purple-500/20' 
                  : 'text-gray-400 hover:bg-gray-800 hover:text-gray-100'
              }`}
            >
              <Icon size={20} className="shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
