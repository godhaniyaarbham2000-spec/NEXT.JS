'use client';
import { useState, useEffect } from 'react';
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
  
  // Badi screen par default open rahega (false), mobile par useEffect se close ho jayega.
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    // Check screen size on mount and window resize
    const checkScreenSize = () => {
      if (window.innerWidth < 768) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener for resize
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <aside className={`${collapsed ? 'w-full md:w-16' : 'w-full md:w-64'} transition-all duration-300 bg-gray-900 border-b md:border-b-0 md:border-r border-gray-800 flex flex-col md:h-screen text-white sticky top-0 z-40`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-800 md:border-none">
        {/* Header Title */}
        <span className={`font-bold text-lg text-purple-400 truncate ${collapsed ? 'md:hidden' : ''}`}>SaaS Demo</span>
        
        {/* Toggle Button */}
        <button 
          onClick={() => setCollapsed(!collapsed)} 
          className="text-gray-400 hover:text-white p-1 rounded hover:bg-gray-800 focus:outline-none"
        >
          <Menu size={20} className="md:hidden" />
          <span className="hidden md:block">
            {collapsed ? <ChevronRight size={20} /> : <Menu size={20} />}
          </span>
        </button>
      </div>
      
      {/* Navigation Links */}
      <nav className={`flex-1 px-2 py-2 md:py-4 overflow-y-auto overflow-x-hidden ${collapsed ? 'hidden md:block' : 'block'}`}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href) && item.href !== '/users');
          
          return (
            <Link 
              key={item.href} 
              href={item.href} 
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1.5 transition-colors whitespace-nowrap ${
                isActive 
                  ? 'bg-purple-600/20 text-purple-400 font-medium border border-purple-500/20' 
                  : 'text-gray-400 hover:bg-gray-800 hover:text-gray-100'
              }`}
              onClick={() => {
                // Mobile me link click hone par menu auto-close ho jaye
                if (window.innerWidth < 768) setCollapsed(true);
              }}
            >
              <Icon size={20} className="shrink-0" />
              <span className={`md:block ${collapsed ? 'md:hidden' : ''}`}>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
