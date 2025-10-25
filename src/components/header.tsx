import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/70 backdrop-blur-sm border-b border-purple-600/10">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-3">
          <img src="/logo.png" alt="WizzTech logo" className="w-12 rounded-md" />
          <img src="/text-logo.png" alt="WizzTech" className="h-4 md:h-6 ml-4" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#home" className="hover:text-yellow-300 transition-colors">Home</a>
          <a href="#about" className="hover:text-yellow-300 transition-colors">About</a>
          <a href="#competitions" className="hover:text-yellow-300 transition-colors">Competitions</a>
          <a href="#team" className="hover:text-yellow-300 transition-colors">Team</a>
          <a href="#contact" className="hover:text-yellow-300 transition-colors">Contact</a>
        </nav>

        <div className="md:hidden">
          <button aria-label="Open menu" className="p-2 rounded text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
