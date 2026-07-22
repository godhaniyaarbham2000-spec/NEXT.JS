'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SettingsLayout({ children }) {
  const pathname = usePathname();

  const navItems = [
    { href: '/dashboard/settings', label: 'Profile' },
    { href: '/dashboard/settings/billing', label: 'Billing' },
    { href: '/dashboard/settings/team', label: 'Team' },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <nav className="w-full md:w-48 shrink-0 flex flex-col gap-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href}
              href={item.href} 
              className={`px-3 py-2 rounded transition-colors ${
                isActive 
                  ? "bg-gray-100 dark:bg-gray-800 font-medium text-gray-900 dark:text-gray-100" 
                  : "text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800/50"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
