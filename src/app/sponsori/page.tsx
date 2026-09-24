import Image from 'next/image';
import Link from 'next/link';
import { SOCIALS } from '@/components/SocialIcons';

export const metadata = { title: 'Sponsori & Contact' };

/**
 * [DE COMPLETAT] Formspree cere un ID de formular, nu o adresă de email.
 * Creează formularul pe formspree.io și înlocuiește valoarea de mai jos cu
 * endpoint-ul primit (arată ca https://formspree.io/f/abcdwxyz).
 * Până atunci, vizitatorii au varianta pe email de sub buton.
 */
const FORM_ENDPOINT = 'https://formspree.io/f/wizztechtm@gmail.com';

const TIERS = [
  {
    key: 'gold',
    label: 'Gold Sponsors',
    logos: [
      { src: '/logo everseen.png', alt: 'Everseen' },
      { src: '/aumovio logo.png', alt: 'Aumovio' },
      { src: '/kimbal logo.png', alt: 'Kimball' },
    ],
  },
  {
    key: 'bronze',
    label: 'Bronze Sponsors',
    logos: [{ src: '/leroy logo.png', alt: 'Leroy Merlin' }],
  },
  {
    key: 'partner',
    label: 'Parteneri',
    logos: [
      { src: '/moisil logo.png', alt: 'Liceul Teoretic Grigore Moisil' },
      { src: '/asociatia logo.png', alt: 'Asociația părinților' },
      { src: '/te miri ce logo.png', alt: 'Te miri ce' },
    ],
  },
] as const;

const PACKAGES = [
  {
    key: 'platinum',
    title: 'PLATINUM',
    price: '>3000€',
    benefits: [
      'Menționarea în postări comune / story-uri',
      'Amplasare logo pe flayere, postere etc.',
      'Amplasare logo-ului pe robot',
      'Amplasare logo pe echipamentul echipei',
      'Roll-up la evenimente',
      'Materiale promoționale la evenimente',
      'Demo-uri la cererea sponsorului',
    ],
  },
  {
    key: 'gold',
    title: 'GOLD',
    price: '1000–3000€',
    benefits: [
      'Menționarea în postări comune / story-uri',
      'Amplasare logo pe flayere, postere etc.',
      'Amplasare logo-ului pe robot',
      'Amplasare logo pe echipamentul echipei',
      'Roll-up la evenimente',
      'Materiale promoționale la evenimente',
    ],
  },
  {
    key: 'silver',
    title: 'SILVER',
    price: '500–1000€',
    benefits: [
      'Menționarea în postări comune / story-uri',
      'Amplasare logo pe flayere, postere etc.',
      'Amplasare logo-ului pe robot',
      'Amplasare logo pe echipamentul echipei',
    ],
  },
  {
    key: 'bronze',
    title: 'BRONZE',
    price: '<500€',
    benefits: [
      'Menționarea în postări comune / story-uri',
      'Amplasare logo pe flayere, postere etc.',
      'Amplasare logo-ului pe robot',
    ],
  },
  {
    key: 'partner',
    title: 'PARTENER',
    price: 'Servicii',
    benefits: [
      'Menționarea în postări comune / story-uri',
      'Amplasare logo pe flayere, postere etc.',
      'Amplasare logo-ului pe robot',
      'Amplasare logo pe echipamentul echipei',
      'Roll-up la evenimente',
      'Materiale promoționale la evenimente',
    ],
  },
] as const;

const CONTACT_METHODS = [
  {
    href: 'mailto:wizztechtm@gmail.com',
    label: 'Email',
    value: 'wizztechtm@gmail.com',
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </svg>
    ),
  },
  {
    href: 'tel:+40757002002',
    label: 'Telefon — Mihai Gorunescu',
    value: '+40 757 002 002',
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    href: 'https://maps.google.com/?q=Calea+Bogdăneștilor+32A+Timișoara',
    label: 'Locație',
    value: 'Calea Bogdăneștilor nr.32A, Timișoara',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function SponsoriPage() {
  return (
    <>
      {/* ── SPONSORI & PARTENERI ── */}
      <section id="sponsors" className="section">
        <p className="section-label reveal">01 — Partners</p>
        <h1 className="section-title reveal">
          Sponsori &amp; <span className="accent">parteneri</span>
        </h1>
        <div className="section-divider reveal" />
        <p className="section-lead reveal">
          Tot ce construim este posibil datorită celor care cred în noi. Mulțumim partenerilor care fac
          robotica posibilă pentru echipa WizzTech.
        </p>

        <div className="sponsors-wrap">
          {TIERS.map((tier) => (
            <div key={tier.key} className={`sponsor-tier ${tier.key}`}>
              <div className="tier-header reveal">
                <span className="tier-line" />
                <h2 className={`tier-badge ${tier.key}`}>{tier.label}</h2>
                <span className="tier-line right" />
              </div>
              <div className="sponsors-grid-new">
                {tier.logos.map((logo, i) => (
                  <div
                    key={logo.src}
                    className="logo-wrapper reveal"
                    style={{ '--i': i } as React.CSSProperties}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={400}
                      height={200}
                      className="sponsor-logo-img"
                      loading="lazy"
                      sizes="190px"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DEVINO SPONSOR ── */}
      <section id="become-sponsor" className="section">
        <p className="section-label reveal">02 — Join Us</p>
        <h2 className="section-title reveal">
          Devino <span className="accent">sponsor</span>
        </h2>
        <div className="section-divider reveal" />
        <p className="section-lead reveal">
          Sprijinul tău ne ajută să construim roboți mai buni și să ducem educația STEM mai departe în
          comunitate. În schimb, brandul tău ajunge la mii de elevi, părinți și pasionați de
          tehnologie.
        </p>

        <div className="packages-container">
          {PACKAGES.map((p, i) => (
            <article
              key={p.key}
              className={`package-card ${p.key} reveal`}
              style={{ '--i': i } as React.CSSProperties}
            >
              <p className="p-badge">Pachetul</p>
              <h3 className="p-title">{p.title}</h3>
              <p className="p-price">{p.price}</p>
              <ul className="benefits-list">
                {p.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="sponsor-cta reveal">
          <p>Interesat de un parteneriat? Hai să găsim împreună pachetul potrivit.</p>
          <Link href="#contact" className="btn-primary">Contactează-ne</Link>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="section">
        <p className="section-label reveal">03 — Get in touch</p>
        <h2 className="section-title reveal">
          Contactează-<span className="accent">ne</span>
        </h2>
        <div className="section-divider reveal" />
        <p className="section-lead reveal">
          Ai o întrebare, o propunere de colaborare sau vrei să ne sponsorizezi? Scrie-ne — răspundem
          cât putem de repede.
        </p>

        <div className="contact-layout">
          {/* ── DATE DE CONTACT ── */}
          <div className="glass-card contact-card reveal">
            <h3>Date de contact</h3>

            <div className="contact-methods">
              {CONTACT_METHODS.map((m) => (
                <a
                  key={m.label}
                  href={m.href}
                  className="contact-method"
                  {...(m.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className="feature-icon">{m.icon}</span>
                  <span className="contact-method-text">
                    <span className="contact-method-label">{m.label}</span>
                    <span className="contact-method-value">{m.value}</span>
                  </span>
                </a>
              ))}
            </div>

            <p className="contact-social-label">Urmărește-ne</p>
            <div className="social-row">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>

            <div className="contact-map">
              <iframe
                title="Locație WizzTech — Calea Bogdăneștilor 32A, Timișoara"
                src="https://www.google.com/maps?q=Calea%20Bogd%C4%83ne%C8%99tilor%2032A%2C%20Timi%C8%99oara&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* ── FORMULAR ── */}
          <div className="glass-card contact-card reveal" style={{ '--i': 1 } as React.CSSProperties}>
            <h3>Trimite-ne un mesaj</h3>

            <form className="contact-form" action={FORM_ENDPOINT} method="POST">
              <div className="field">
                <label htmlFor="contact-nume">
                  Nume complet <span className="req" aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-nume"
                  type="text"
                  name="nume"
                  autoComplete="name"
                  placeholder="Ion Popescu"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="contact-email">
                  Email <span className="req" aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="_replyto"
                  autoComplete="email"
                  inputMode="email"
                  placeholder="nume@exemplu.ro"
                  aria-describedby="email-hint"
                  required
                />
                <span id="email-hint" className="field-hint">
                  Aici îți răspundem, deci verifică adresa.
                </span>
              </div>

              <div className="field">
                <label htmlFor="contact-subiect">Subiect</label>
                <input
                  id="contact-subiect"
                  type="text"
                  name="subiect"
                  placeholder="ex. Sponsorizare, Colaborare"
                />
              </div>

              <div className="field">
                <label htmlFor="contact-mesaj">
                  Mesajul tău <span className="req" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-mesaj"
                  name="mesaj"
                  rows={6}
                  placeholder="Spune-ne cu ce te putem ajuta..."
                  required
                />
              </div>

              <button type="submit" className="btn-submit">Trimite mesaj</button>

              <p className="form-note">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8v4M12 16h.01" />
                </svg>
                <span>
                  Preferi emailul? Scrie-ne direct la{' '}
                  <a href="mailto:wizztechtm@gmail.com">wizztechtm@gmail.com</a>.
                </span>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
