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
            <li><Link href="/istorie">Istorie</Link></li>
            <li><Link href="/echipa">Membrii echipei</Link></li>
            <li><Link href="/evenimente">Evenimente</Link></li>
            <li><Link href="/sponsori">Sponsori</Link></li>
            <li><Link href="/galerie">Galerie</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>CONTACT</h4>
          <p>📍 Calea Bogdăneștilor nr.32A, Timișoara</p>
          <p>✉ wizztechtm@gmail.com</p>
          <div className="scroll-top-indicator" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span>SCROLL TOP</span>
            <div className="vertical-line"></div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 WizzTech #19094 — Liceul Teoretic &quot;Grigore Moisil&quot;, Timișoara. Toate drepturile rezervate.</p>
      </div>
    </footer>
  );
}
