import Link from 'next/link';

export default function SettingsLayout({ children }) {
  // 6. YEH KYU HAI: Advanced Nested Layout (Sub-navigation).
  // Jab aap /dashboard/settings pe aayenge, toh yeh side navigation dikhega jo sirf settings ke andar rahega.
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <nav className="w-full md:w-48 shrink-0 flex flex-col gap-2">
        <Link href="/dashboard/settings" className="px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded font-medium">Profile</Link>
        <Link href="/dashboard/settings/billing" className="px-3 py-2 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded">Billing</Link>
        <Link href="/dashboard/settings/team" className="px-3 py-2 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded">Team</Link>
      </nav>
      <div className="flex-1">
        {/* Profile ya Billing ka jo bhi page khulega wo yaha load hoga */}
        {children}
      </div>
    </div>
  );
}
