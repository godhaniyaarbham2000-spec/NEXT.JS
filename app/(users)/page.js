import Link from 'next/link';

export default function Home() {
  const routes = [
    {
      category: "1. Core & Public Pages",
      links: [
        { path: "/about", name: "About Us", desc: "Main about page." },
        { path: "/about/teams", name: "About Teams", desc: "Nested teams page under about." },
        { path: "/contact", name: "Contact", desc: "Contact information." },
        { path: "/service", name: "Services", desc: "Services offered." },
        { path: "/company", name: "Company", desc: "Detailed company info." },
      ]
    },
    {
      category: "2. Dashboard & Settings (App Group)",
      links: [
        { path: "/dashboard", name: "Dashboard", desc: "Main dashboard (Parallel routes @analytics & @team)." },
        { path: "/dashboard/settings", name: "Settings", desc: "Dashboard settings main page." },
        { path: "/dashboard/settings/billing", name: "Billing Settings", desc: "Nested billing page." },
        { path: "/dashboard/settings/team", name: "Team Settings", desc: "Nested team settings page." },
      ]
    },
    {
      category: "3. Data Fetching & Rendering",
      links: [
        { path: "/clientcomp", name: "Client Components", desc: "React client-side rendering." },
        { path: "/servercomp", name: "Server Components", desc: "React server-side rendering." },
        { path: "/datafetch", name: "Data Fetching (DB)", desc: "Direct database fetch." },
        { path: "/datafetch/clientcomp?name=arbham", name: "Client Data Fetch", desc: "Client-side data fetching with searchParams." },
        { path: "/datafetch/servercomp?name=arbham", name: "Server Data Fetch", desc: "Server-side data fetching with searchParams." },
      ]
    },
    {
      category: "4. Caching & Next.js Advanced Features",
      links: [
        { path: "/caching-demo", name: "Caching Demo Home", desc: "Main caching strategies page." },
        { path: "/caching-demo/client-fetch", name: "Client Fetch Cache", desc: "Caching via client." },
        { path: "/caching-demo/data-cache", name: "Data Cache", desc: "Next.js Data cache API." },
        { path: "/caching-demo/on-demand", name: "On-Demand Revalidate", desc: "On-demand revalidation." },
        { path: "/caching-demo/streaming", name: "Streaming", desc: "React Suspense & streaming." },
        { path: "/server-action-demo", name: "Server Actions", desc: "Form mutations via Server Actions." },
        { path: "/revalidate-test", name: "Revalidation (ISR)", desc: "Testing Incremental Static Regeneration." },
        { path: "/error-test", name: "Error Boundaries", desc: "Testing error.js UI." },
        { path: "/loading-test", name: "Loading UI", desc: "Testing loading.js UI." },
      ]
    },
    {
      category: "5. Content, Dynamic Routes & Media",
      links: [
        { path: "/products", name: "Products", desc: "Static products catalog." },
        { path: "/blog/22", name: "Blog Post (Dynamic ID)", desc: "Dynamic route [id]." },
        { path: "/blog/tech/2026/01", name: "Blog Catch-all", desc: "Catch-all route [...slug]." },
        { path: "/users/arbham", name: "User Profile (Dynamic)", desc: "Dynamic route [username]." },
        { path: "/users/arbham/posts/101", name: "User Posts (Nested Dynamic)", desc: "Nested dynamic routes [username] and [postId]." },
        { path: "/photos", name: "Photo Gallery", desc: "Main photo gallery." },
        { path: "/photos/123", name: "Single Photo (Intercepting)", desc: "Photo view demonstrating intercepting route (.)[id]." },
      ]
    },
    {
      category: "6. Admin, Auth & Security",
      links: [
        { path: "/login", name: "Login", desc: "Authentication login page." },
        { path: "/user-panel", name: "User Panel", desc: "Dashboard for standard users." },
        { path: "/admin", name: "Admin Dashboard", desc: "Restricted admin area." },
        { path: "/admin/about", name: "Admin About", desc: "Nested admin about page." },
        { path: "/add-author", name: "Add Author", desc: "Form to add authors." },
        { path: "/add-post", name: "Add Post", desc: "Form to add posts." },
        { path: "/security-demo", name: "Security Demo", desc: "Security implementations demo." },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 tracking-tight">
            Complete Project Directory
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            An exhaustive index of every single route, page, and feature built in this Next.js App Router project.
          </p>
        </div>

        <div className="space-y-12">
          {routes.map((section, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="bg-slate-50 border-b border-slate-100 px-6 py-4">
                <h2 className="text-xl font-bold text-slate-800 flex items-center">
                  <span className="w-2 h-6 bg-indigo-500 rounded-full mr-3"></span>
                  {section.category}
                </h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {section.links.map((link, linkIdx) => (
                    <Link href={link.path} key={linkIdx} className="group block h-full">
                      <div className="h-full p-4 rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:shadow-md hover:border-indigo-200 hover:-translate-y-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-md font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight">
                              {link.name}
                            </h3>
                          </div>
                          <p className="text-xs text-slate-500 mb-3">
                            {link.desc}
                          </p>
                        </div>
                        <div className="mt-auto">
                          <span className="inline-block px-2 py-1 text-[11px] font-mono font-medium text-indigo-600 bg-indigo-50 rounded-md break-all">
                            {link.path}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-400 font-medium">
            Next.js App Router Architecture
          </p>
        </div>
      </div>
    </div>
  );
}