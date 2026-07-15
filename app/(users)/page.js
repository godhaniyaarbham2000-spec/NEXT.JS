import Link from 'next/link';

export default function Home() {
  const routes = [
    {
      category: "Core Pages",
      links: [
        { path: "/about", name: "About Us", desc: "Learn more about our company and team." },
        { path: "/contact", name: "Contact", desc: "Get in touch with us." },
        { path: "/service", name: "Services", desc: "Explore the services we offer." },
        { path: "/company", name: "Company", desc: "Detailed company information." },
      ]
    },
    {
      category: "Next.js Features Demo",
      links: [
        { path: "/clientcomp", name: "Client Components", desc: "Demonstration of React client-side rendering." },
        { path: "/servercomp", name: "Server Components", desc: "Demonstration of React server-side rendering." },
        { path: "/datafetch", name: "Data Fetching (DB)", desc: "Database fetching methods in Next.js." },
        { path: "/datafetch/clientcomp?name=navghan", name: "Client Data Fetch", desc: "Client data fetching with searchParams." },
        { path: "/datafetch/servercomp?name=navghan", name: "Server Data Fetch", desc: "Server data fetching with searchParams." },
        { path: "/caching-demo", name: "Caching Demo", desc: "Explore Next.js caching layers and strategies." },
        { path: "/server-action-demo", name: "Server Actions", desc: "Form mutations using Next.js server actions." },
        { path: "/revalidate-test", name: "Revalidation (ISR)", desc: "Testing Incremental Static Regeneration." },
        { path: "/error-test", name: "Error Boundaries", desc: "Testing Next.js error.js behavior." },
        { path: "/loading-test", name: "Loading UI", desc: "Testing Next.js loading.js behavior." },
      ]
    },
    {
      category: "Content & Data",
      links: [
        { path: "/blog/22", name: "Dynamic Blog", desc: "Read our dynamic blog post (ID: 22)." },
        { path: "/products", name: "Products", desc: "Browse our product catalog." },
        { path: "/users", name: "Users Directory", desc: "List of users in the system." },
        { path: "/photos", name: "Photo Gallery", desc: "A gallery of images and photos." },
      ]
    },
    {
      category: "Admin & Auth",
      links: [
        { path: "/dashboard", name: "Dashboard", desc: "Main application dashboard." },
        { path: "/login", name: "Login", desc: "User authentication page." },
        { path: "/user-panel", name: "User Panel", desc: "Manage your user account." },
        { path: "/admin", name: "Admin Area", desc: "Restricted administration area." },
        { path: "/add-author", name: "Add Author", desc: "Form to add a new author." },
        { path: "/add-post", name: "Add Post", desc: "Form to create a new blog post." },
        { path: "/security-demo", name: "Security", desc: "Security and middleware demonstration." },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 tracking-tight">
            Project Directory
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Welcome to the centralized index of all the pages and demonstrations built in this Next.js project. Use this directory to easily navigate through the application after deployment.
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.links.map((link, linkIdx) => (
                    <Link href={link.path} key={linkIdx} className="group block h-full">
                      <div className="h-full p-5 rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:shadow-md hover:border-indigo-200 hover:-translate-y-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                            {link.name}
                          </h3>
                          <svg className="w-5 h-5 text-slate-400 group-hover:text-indigo-500 transform group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed">
                          {link.desc}
                        </p>
                        <div className="mt-4 flex items-center text-xs font-medium text-indigo-500 bg-indigo-50 inline-block px-2 py-1 rounded">
                          {link.path}
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
          <p className="text-sm text-slate-400">
            Deployed with Next.js App Router
          </p>
        </div>
      </div>
    </div>
  );
}