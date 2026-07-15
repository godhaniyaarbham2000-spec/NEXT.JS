import Link from 'next/link';

export default function Home() {
  const routes = [
    {
      category: "1. Core & Public Pages",
      links: [
        { path: "/about", name: "About Us", desc: "Main about page.", topic: "Day 01–02: App Router, Routing (useRouter)" },
        { path: "/about/teams", name: "About Teams", desc: "Nested teams page under about.", topic: "Day 01–02: App Router, Routing, Layouts" },
        { path: "/contact", name: "Contact", desc: "Contact information.", topic: "Day 05: API Routes & Day 06: Prisma + MySQL" },
        { path: "/service", name: "Services", desc: "Services offered.", topic: "Day 01–02: App Router & Day 08: SEO & next/image" },
        { path: "/company", name: "Company", desc: "Detailed company info.", topic: "Day 01–02: App Router, Routing, Layouts" },
      ]
    },
    {
      category: "2. Dashboard & Settings (App Group)",
      links: [
        { path: "/dashboard", name: "Dashboard", desc: "Main dashboard (Parallel routes @analytics & @team).", topic: "Day 01–02: Routing & Day 10: Parallel slots" },
        { path: "/dashboard/settings", name: "Settings", desc: "Dashboard settings main page.", topic: "Day 01–02: Nested settings layout" },
        { path: "/dashboard/settings/billing", name: "Billing Settings", desc: "Nested billing page.", topic: "Day 01–02: Nested settings layout" },
        { path: "/dashboard/settings/team", name: "Team Settings", desc: "Nested team settings page.", topic: "Day 01–02: Nested settings layout" },
      ]
    },
    {
      category: "3. Data Fetching & Rendering",
      links: [
        { path: "/clientcomp", name: "Client Components", desc: "React client-side rendering.", topic: "Day 03: Client Components & Day 04: Client Data Fetching" },
        { path: "/servercomp", name: "Server Components", desc: "React server-side rendering.", topic: "Day 03: Server Components & Day 04: Server Data Fetching" },
        { path: "/datafetch", name: "Data Fetching (DB)", desc: "Direct database fetch.", topic: "Day 06: Database Integration Prisma + MySQL" },
        { path: "/datafetch/clientcomp?name=arbham", name: "Client Data Fetch", desc: "Client-side data fetching with searchParams.", topic: "Day 04: Data Fetching & Rendering" },
        { path: "/datafetch/servercomp?name=arbham", name: "Server Data Fetch", desc: "Server-side data fetching with searchParams.", topic: "Day 04: Data Fetching & Rendering" },
      ]
    },
    {
      category: "4. Caching & Next.js Advanced Features",
      links: [
        { path: "/caching-demo", name: "Caching Demo Home", desc: "Main caching strategies page.", topic: "Day 11: Caching & Performance" },
        { path: "/caching-demo/client-fetch", name: "Client Fetch Cache", desc: "Caching via client.", topic: "Day 11: Caching & Performance" },
        { path: "/caching-demo/data-cache", name: "Data Cache", desc: "Next.js Data cache API.", topic: "Day 11: Caching & Performance" },
        { path: "/caching-demo/on-demand", name: "On-Demand Revalidate", desc: "On-demand revalidation.", topic: "Day 11: Caching & Performance" },
        { path: "/caching-demo/streaming", name: "Streaming", desc: "React Suspense & streaming.", topic: "Day 04: Suspense & Day 11: Streaming" },
        { path: "/server-action-demo", name: "Server Actions", desc: "Form mutations via Server Actions.", topic: "Day 05: API Routes & Server Actions" },
        { path: "/revalidate-test", name: "Revalidation (ISR)", desc: "Testing Incremental Static Regeneration.", topic: "Day 04: Data Fetching (ISR)" },
        { path: "/error-test", name: "Error Boundaries", desc: "Testing error.js UI.", topic: "Day 01–02: App Router Core" },
        { path: "/loading-test", name: "Loading UI", desc: "Testing loading.js UI.", topic: "Day 04: Data Fetching (Suspense)" },
      ]
    },
    {
      category: "5. Content, Dynamic Routes & Media",
      links: [
        { path: "/products", name: "Products", desc: "Static products catalog.", topic: "Day 01–02: App Router, Routing" },
        { path: "/blog/22", name: "Blog Post (Dynamic ID)", desc: "Dynamic route [id].", topic: "Day 01–02: Dynamic Routing" },
        { path: "/blog/tech/2026/01", name: "Blog Catch-all", desc: "Catch-all route [...slug].", topic: "Day 01–02: Catch-all Routing" },
        { path: "/users/arbham", name: "User Profile (Dynamic)", desc: "Dynamic route [username].", topic: "Day 01–02: Dynamic Routing" },
        { path: "/users/arbham/posts/101", name: "User Posts (Nested Dynamic)", desc: "Nested dynamic routes [username] and [postId].", topic: "Day 01–02: Nested Dynamic Routing" },
        { path: "/photos", name: "Photo Gallery", desc: "Main photo gallery.", topic: "Day 10: Advanced App Router" },
        { path: "/photos/123", name: "Single Photo (Intercepting)", desc: "Photo view demonstrating intercepting route (.)[id].", topic: "Day 10: Parallel + Intercepting Routes" },
      ]
    },
    {
      category: "6. Admin, Auth & Security",
      links: [
        { path: "/login", name: "Login", desc: "Authentication login page.", topic: "Day 07: Auth & RBAC" },
        { path: "/user-panel", name: "User Panel", desc: "Dashboard for standard users.", topic: "Day 07: Auth & RBAC (User Role)" },
        { path: "/admin", name: "Admin Dashboard", desc: "Restricted admin area.", topic: "Day 07: Auth & RBAC (Admin Role)" },
        { path: "/admin/about", name: "Admin About", desc: "Nested admin about page.", topic: "Day 01–02: Nested Routing" },
        { path: "/add-author", name: "Add Author", desc: "Form to add authors.", topic: "Day 05: Server Actions CRUD" },
        { path: "/add-post", name: "Add Post", desc: "Form to add posts.", topic: "Day 05: Server Actions CRUD" },
        { path: "/security-demo", name: "Security Demo", desc: "Security implementations demo.", topic: "Day 09: Middleware & Security" },
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
                          
                          {/* Topic with red text & border as requested */}
                          <div className="mb-3 pb-2 border-b border-red-100">
                            <span className="text-[11px] font-bold text-red-500 uppercase tracking-wide">
                              Topic: {link.topic}
                            </span>
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