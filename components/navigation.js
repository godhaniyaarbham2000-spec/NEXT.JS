import Link from "next/link";

export default function Navigation(){
    return (
      <header className="grid grid-cols-2 items-center gap-4 px-6 py-4">
        <div>Arbham Logo</div>
        <nav className="justify-self-end">
          <ul className="flex gap-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/clientcomp">ClientComp</Link></li>
            <li><Link href="/servercomp">ServerComp</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/service">Service</Link></li>
          </ul>
        </nav>
      </header>
    );
}

