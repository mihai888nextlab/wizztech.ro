'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { SOCIALS } from './SocialIcons';

const NAV_LINKS = [
  { href: '/', label: 'Acasă' },
  { href: '/echipa', label: 'Echipă' },
  { href: '/activitate', label: 'Activitate' },
  { href: '/sponsori', label: 'Sponsori' },
  { href: '/sponsori#contact', label: 'Contact' },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Navigating (including via the back button) closes the drawer. Adjusting
  // state during render is React's recommended alternative to a reset effect —
  // it avoids the extra commit a setState-in-effect would cause.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
  }

  // Brighten the nav once the page has moved off the hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // While the drawer is open: lock the page, and give Escape an escape route
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
          <Link
            href={href}
            className={isActive ? 'active' : undefined}
            aria-current={isActive ? 'page' : undefined}
          >
            {label}
          </Link>
        </li>
      );
    });

  return (
    <>
      <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
        <Link href="/" className="logo" aria-label="WizzTech — pagina principală">
          <Image
            src="/wizztech-logo2023-2024.png"
            alt=""
            width={391}
            height={575}
            className="nav-logo-img"
            loading="eager"
            fetchPriority="high"
          />
          <Image
            src="/wizztech-logo-text-2023-2024.png"
            alt=""
            width={1846}
            height={249}
            className="nav-logo-text-img"
            loading="eager"
          />
        </Link>

        <ul className="nav-links">{renderLinks()}</ul>

        <div className="nav-socials">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon />
            </a>
          ))}
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="nav-hamburger"
          aria-label={menuOpen ? 'Închide meniul' : 'Deschide meniul'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="ham-line" />
          <span className="ham-line" />
          <span className="ham-line" />
        </button>
      </nav>

      {/* Closed state is `visibility: hidden` in CSS — keeps the slide transition
          while still removing the links from the tab order. */}
      <div id="mobile-menu" className={menuOpen ? 'mobile-menu open' : 'mobile-menu'}>
        <ul>{renderLinks()}</ul>
        <div className="mobile-socials">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
