import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      // hide on scroll down, show on scroll up
      if (y > lastY.current && y > 120) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform " +
        (visible ? "translate-y-0" : "-translate-y-20") +
        " " +
        (scrolled
          ? "bg-gray-900/90 backdrop-blur-md border-b border-purple-600/20 shadow-md rounded-b-2xl"
          : "bg-gray-900/70 backdrop-blur-sm border-b border-purple-600/10")
      }
    >
      <div className={`container mx-auto px-6 ${scrolled ? "py-1.5" : "py-3"} flex items-center justify-between`}>
        <Link href="#home" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="WizzTech logo"
            className={`rounded-md transition-all duration-300 ${scrolled ? "w-10" : "w-12"}`}
          />
          <img
            src="/text-logo.png"
            alt="WizzTech"
            className={`ml-4 transition-all duration-300 ${scrolled ? "opacity-0 md:opacity-40 scale-90" : "opacity-100 scale-100"} h-4 md:h-6`}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-base">
          <a href="#home" className="hover:text-yellow-300 transition hover:scale-105">Home</a>
          <a href="#about" className="hover:text-yellow-300 transition hover:scale-105">About</a>
          <a href="#competitions" className="hover:text-yellow-300 transition hover:scale-105">Competitions</a>
          <a href="#team" className="hover:text-yellow-300 transition hover:scale-105">Team</a>
          <a href="#contact" className="hover:text-yellow-300 transition hover:scale-105">Contact</a>
        </nav>

        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="p-2 rounded text-white"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Mobile nav: collapsible */}
      <div className={`md:hidden overflow-hidden transition-max-h duration-300 ${mobileOpen ? 'max-h-96' : 'max-h-0'}`}>
        <nav className="px-6 pb-4 flex flex-col gap-2">
          <a href="#home" onClick={() => setMobileOpen(false)} className="block py-2 text-lg text-gray-200 hover:text-yellow-300">Home</a>
          <a href="#about" onClick={() => setMobileOpen(false)} className="block py-2 text-lg text-gray-200 hover:text-yellow-300">About</a>
          <a href="#competitions" onClick={() => setMobileOpen(false)} className="block py-2 text-lg text-gray-200 hover:text-yellow-300">Competitions</a>
          <a href="#team" onClick={() => setMobileOpen(false)} className="block py-2 text-lg text-gray-200 hover:text-yellow-300">Team</a>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="block py-2 text-lg text-gray-200 hover:text-yellow-300">Contact</a>
        </nav>
      </div>
    </header>
  );
}
