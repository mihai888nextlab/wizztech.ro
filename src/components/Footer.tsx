'use client';
import Link from 'next/link';

const socials = [
  { href: 'https://instagram.com/wizztech.tm', src: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png', alt: 'Insta' },
  { href: 'https://facebook.com/wizztechtm/', src: 'https://cdn-icons-png.flaticon.com/512/733/733547.png', alt: 'FB' },
  { href: 'https://tiktok.com/@wizztech_tm', src: 'https://cdn-icons-png.flaticon.com/512/3046/3046121.png', alt: 'TikTok' },
  { href: 'https://youtube.com/@wizztech2623', src: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png', alt: 'YT' },
  { href: 'https://www.linkedin.com/company/wizztechtm/', src: 'https://cdn-icons-png.flaticon.com/512/174/174857.png', alt: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link href="/" className="logo">
            <img src="/wizztech-logo2023-2024..png" alt="WizzTech Logo" className="nav-logo-img" />
            <img src="/wizztech-logo-text-2023-2024.png" alt="WizzTech" className="nav-logo-text-img" />
          </Link>
          <p className="footer-desc">Echipa de robotică a Liceului Teoretic &quot;Grigore Moisil&quot;, Timișoara. Inovăm pentru viitor prin tehnologie și pasiune.</p>
          <div className="footer-socials">
            {socials.map(({ href, src, alt }) => (
              <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
                <img src={src} alt={alt} />
              </a>
            ))}
          </div>
        </div>
        <div className="footer-nav">
          <h4>NAVIGHEAZĂ</h4>
          <ul>
            <li><Link href="/">Acasă</Link></li>
            <li><Link href="/#history">Istorie</Link></li>
            <li><Link href="/#awards">Premii</Link></li>
            <li><Link href="/echipa">Echipă</Link></li>
            <li><Link href="/activitate">Evenimente & Galerie</Link></li>
            <li><Link href="/sponsori">Sponsori</Link></li>
            <li><Link href="/sponsori#contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>CONTACT</h4>
          <p>
            <svg className="footer-contact-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
            </svg>
            Calea Bogdăneștilor nr.32A, Timișoara
          </p>
          <p>
            <svg className="footer-contact-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            wizztechtm@gmail.com
          </p>
          <button
            type="button"
            className="scroll-top-indicator"
            aria-label="Înapoi sus"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span>SCROLL TOP</span>
            <div className="vertical-line"></div>
          </button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 WizzTech #19094 — Liceul Teoretic &quot;Grigore Moisil&quot;, Timișoara. Toate drepturile rezervate.</p>
      </div>
    </footer>
  );
}
