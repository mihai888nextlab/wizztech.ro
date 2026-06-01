'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/', label: 'Acasă' },
  { href: '/istorie', label: 'Istorie' },
  { href: '/echipa', label: 'Echipă' },
  { href: '/premii', label: 'Premiile noastre' },
  { href: '/evenimente', label: 'Evenimente' },
  { href: '/sponsori', label: 'Sponsori' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/contact', label: 'Contact' },
];

const socials = [
  { href: 'https://instagram.com/wizztech.tm', src: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png', alt: 'Insta' },
  { href: 'https://facebook.com/wizztechtm/', src: 'https://cdn-icons-png.flaticon.com/512/733/733547.png', alt: 'FB' },
  { href: 'https://tiktok.com/@wizztech_tm', src: 'https://cdn-icons-png.flaticon.com/512/3046/3046121.png', alt: 'TikTok' },
  { href: 'https://youtube.com/@wizztech2623', src: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png', alt: 'YT' },
  { href: 'https://www.linkedin.com/company/wizztechtm/', src: 'https://cdn-icons-png.flaticon.com/512/174/174857.png', alt: 'LinkedIn' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <nav className="navbar">
        <Link href="/" className="logo">
          <img src="/wizztech-logo2023-2024..png" alt="WizzTech Logo" className="nav-logo-img" />
          <img src="/wizztech-logo-text-2023-2024.png" alt="WizzTech" className="nav-logo-text-img" />
        </Link>

        <ul className="nav-links">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={pathname === href ? 'active' : ''}>{label}</Link>
            </li>
          ))}
        </ul>

        <div className="nav-socials">
          {socials.map(({ href, src, alt }) => (
            <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
              <img src={src} alt={alt} />
            </a>
          ))}
        </div>

        <button
          className="nav-hamburger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span className="ham-line"></span>
          <span className="ham-line"></span>
          <span className="ham-line"></span>
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <ul>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={pathname === href ? 'active' : ''}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
