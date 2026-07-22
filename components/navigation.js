import Link from "next/link";

export default function Navigation(){
    return (
      <header className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-4 md:px-6 bg-white border-b border-gray-100">
        <div className="font-extrabold text-2xl md:text-3xl text-gray-800 w-full md:w-auto text-center md:text-left whitespace-nowrap">Arbham Logo</div>
        <nav className="w-full md:w-auto">
          <ul className="flex flex-wrap items-center justify-center md:justify-end gap-3 md:gap-6 text-sm font-medium text-gray-600">
            <li><Link href="/" className="hover:text-blue-600 transition-colors px-1 py-1">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-600 transition-colors px-1 py-1">About</Link></li>
            <li><Link href="/clientcomp" className="hover:text-blue-600 transition-colors px-1 py-1">ClientComp</Link></li>
            <li><Link href="/servercomp" className="hover:text-blue-600 transition-colors px-1 py-1">ServerComp</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600 transition-colors px-1 py-1">Contact</Link></li>
            <li><Link href="/service" className="hover:text-blue-600 transition-colors px-1 py-1">Service</Link></li>
          </ul>
        </nav>
      </header>
    );
}

