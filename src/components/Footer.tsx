'use client';
import Image from 'next/image';
import Link from 'next/link';
import { SOCIALS } from './SocialIcons';

const FOOTER_LINKS = [
  { href: '/', label: 'Acasă' },
  { href: '/#history', label: 'Istorie' },
  { href: '/#awards', label: 'Premii' },
  { href: '/echipa', label: 'Echipă' },
  { href: '/activitate', label: 'Evenimente & Galerie' },
  { href: '/sponsori', label: 'Sponsori' },
  { href: '/sponsori#contact', label: 'Contact' },
] as const;

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link href="/" className="logo" aria-label="WizzTech — pagina principală">
            <Image
              src="/wizztech-logo2023-2024.png"
              alt=""
              width={391}
              height={575}
              className="nav-logo-img"
              loading="lazy"
            />
            <Image
              src="/wizztech-logo-text-2023-2024.png"
              alt=""
              width={1846}
              height={249}
              className="nav-logo-text-img"
              loading="lazy"
            />
          </Link>
          <p className="footer-desc">
            Echipa de robotică a Liceului Teoretic &quot;Grigore Moisil&quot;, Timișoara.
            Inovăm pentru viitor prin tehnologie și pasiune.
          </p>
          <div className="footer-socials">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <nav className="footer-nav" aria-label="Navigare secundară">
          <h4>Navighează</h4>
          <ul>
            {FOOTER_LINKS.map(({ href, label }) => (
              <li key={href}><Link href={href}>{label}</Link></li>
            ))}
          </ul>
        </nav>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>
            <svg className="footer-contact-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
            </svg>
            Calea Bogdăneștilor nr.32A, Timișoara
          </p>
          <p>
            <svg className="footer-contact-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <a href="mailto:wizztechtm@gmail.com">wizztechtm@gmail.com</a>
          </p>
          <button
            type="button"
            className="scroll-top-indicator"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span>Scroll top</span>
            <span className="vertical-line" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} WizzTech #19094 — Liceul Teoretic &quot;Grigore Moisil&quot;,
          Timișoara. Toate drepturile rezervate.
        </p>
      </div>
    </footer>
  );
}
