import Image from 'next/image';
import Link from 'next/link';
import { SOCIALS } from './SocialIcons';

const FOOTER_LINKS = [
  { href: '/', label: 'Acasă' },
  { href: '/#istorie', label: 'Istoria echipei' },
  { href: '/#premii', label: 'Premii' },
  { href: '/echipa', label: 'Echipa' },
  { href: '/activitate', label: 'Evenimente și galerie' },
  { href: '/sponsori', label: 'Sponsori' },
  { href: '/sponsori#contact', label: 'Contact' },
] as const;

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand" aria-label="WizzTech, pagina principală">
              <Image src="/wizztech-logo2023-2024.png" alt="" width={391} height={575} loading="lazy" />
              WizzTech
            </Link>
            <p>
              Echipa de robotică FIRST Tech Challenge a Liceului Teoretic „Grigore Moisil” din
              Timișoara. RO048, echipa #19094.
            </p>
            <div className="socials">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Navigare secundară">
            <h2>Pagini</h2>
            <ul>
              {FOOTER_LINKS.map(({ href, label }) => (
                <li key={href}><Link href={href}>{label}</Link></li>
              ))}
            </ul>
          </nav>

          <div>
            <h2>Ne găsești la</h2>
            <ul>
              <li>Calea Bogdăneștilor nr. 32A, Timișoara</li>
              <li><a href="mailto:wizztechtm@gmail.com">wizztechtm@gmail.com</a></li>
              <li><a href="tel:+40757002002">+40 757 002 002</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} WizzTech #19094</p>
          <p>Liceul Teoretic „Grigore Moisil”, Timișoara</p>
        </div>
      </div>
    </footer>
  );
}
