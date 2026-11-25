'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const NAV_LINKS = [
  { href: '/', label: 'Acasă' },
  { href: '/echipa', label: 'Echipa' },
  { href: '/activitate', label: 'Activitate' },
  { href: '/sponsori', label: 'Sponsori' },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Navigating (including via the back button) closes the menu. Adjusting
  // state during render avoids the extra commit a reset effect would cause.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
  }

  // Show a hairline under the bar once the page has scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // While the menu is open: lock the page, and let Escape close it
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setMenuOpen(false);
      toggleRef.current?.focus();
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  const renderLinks = () =>
    NAV_LINKS.map(({ href, label }) => {
      const isActive = href === pathname;
      return (
        <li key={href}>
          <Link href={href} aria-current={isActive ? 'page' : undefined}>
            {label}
          </Link>
        </li>
      );
    });

  return (
    <>
      <header className={scrolled ? 'navbar scrolled' : 'navbar'}>
        <nav className="wrap nav-inner" aria-label="Navigare principală">
          <Link href="/" className="brand" aria-label="WizzTech, pagina principală">
            <Image
              src="/wizztech-logo2023-2024.png"
              alt=""
              width={391}
              height={575}
              loading="eager"
              fetchPriority="high"
            />
            WizzTech
          </Link>

          <ul className="nav-links">{renderLinks()}</ul>

          <Link href="/sponsori#contact" className="btn nav-cta">Contact</Link>

          <button
            ref={toggleRef}
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? 'Închide' : 'Meniu'}
          </button>
        </nav>
      </header>

      {/* Closed state is `visibility: hidden` in CSS, which keeps the transition
          while removing the links from the tab order. */}
      <div id="mobile-menu" className={menuOpen ? 'mobile-menu open' : 'mobile-menu'}>
        <ul>
          {renderLinks()}
          <li><Link href="/sponsori#contact">Contact</Link></li>
        </ul>
      </div>
    </>
  );
}
