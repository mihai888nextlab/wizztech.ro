import Link from 'next/link';

export const metadata = { title: 'WizzTech | Sponsori & Contact' };

const socials = [
  { href: 'https://instagram.com/wizztech.tm', src: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png', alt: 'Instagram' },
  { href: 'https://facebook.com/wizztechtm/', src: 'https://cdn-icons-png.flaticon.com/512/733/733547.png', alt: 'Facebook' },
  { href: 'https://tiktok.com/@wizztech_tm', src: 'https://cdn-icons-png.flaticon.com/512/3046/3046121.png', alt: 'TikTok' },
  { href: 'https://youtube.com/@wizztech2623', src: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png', alt: 'YouTube' },
  { href: 'https://www.linkedin.com/company/wizztechtm/', src: 'https://cdn-icons-png.flaticon.com/512/174/174857.png', alt: 'LinkedIn' },
];

export default function SponzoriPage() {
  return (
    <>
      {/* ── SPONSORI & PARTENERI ── */}
      <section id="sponsors" className="section" data-num="01">
        <p className="section-label">01 — Partners</p>
        <h1 className="section-title">Sponsori & Parteneri</h1>
        <div className="section-divider"></div>
        <p className="section-lead">
          Tot ce construim este posibil datorită celor care cred în noi. Mulțumim partenerilor care fac robotica posibilă pentru echipa WizzTech.
        </p>

        <div className="sponsors-wrap">
          <div className="sponsor-tier gold">
            <div className="tier-header">
              <span className="tier-line"></span>
              <span className="tier-badge gold">Gold Sponsors</span>
              <span className="tier-line right"></span>
            </div>
            <div className="sponsors-grid-new">
              <div className="logo-wrapper"><img src="/logo everseen.png" className="sponsor-logo-img" alt="Everseen" /></div>
              <div className="logo-wrapper"><img src="/aumovio logo.png" className="sponsor-logo-img" alt="Aumovio" /></div>
              <div className="logo-wrapper"><img src="/kimbal logo.png" className="sponsor-logo-img" alt="Kimball" /></div>
            </div>
          </div>

          <div className="sponsor-tier bronze">
            <div className="tier-header">
              <span className="tier-line"></span>
              <span className="tier-badge bronze">Bronze Sponsors</span>
              <span className="tier-line right"></span>
            </div>
            <div className="sponsors-grid-new">
              <div className="logo-wrapper"><img src="/leroy logo.png" className="sponsor-logo-img" alt="Leroy Merlin" /></div>
            </div>
          </div>

          <div className="sponsor-tier partner">
            <div className="tier-header">
              <span className="tier-line"></span>
              <span className="tier-badge partner">Parteneri</span>
              <span className="tier-line right"></span>
            </div>
            <div className="sponsors-grid-new">
              <div className="logo-wrapper"><img src="/moisil logo.png" className="sponsor-logo-img" alt="Moisil" /></div>
              <div className="logo-wrapper"><img src="/asociatia logo.png" className="sponsor-logo-img" alt="Asociatia" /></div>
              <div className="logo-wrapper"><img src="/te miri ce logo.png" className="sponsor-logo-img" alt="Te miri ce" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BECOME A SPONSOR ── */}
      <section id="become-sponsor" className="section" data-num="02">
        <p className="section-label">02 — Join Us</p>
        <h2 className="section-title">Devino Sponsor</h2>
        <div className="section-divider"></div>
        <p className="section-lead">
          Sprijinul tău ne ajută să construim roboți mai buni și să ducem educația STEM mai departe în comunitate. În schimb, brandul tău ajunge la mii de elevi, părinți și pasionați de tehnologie.
        </p>
        <div className="packages-container">
          <div className="package-card platinum">
            <div className="p-badge">Pachetul</div>
            <div className="p-title">PLATINUM</div>
            <div className="p-price">&gt;3000€</div>
            <ul className="benefits-list">
              <li>Menționarea în postări comune / story-uri</li>
              <li>Amplasare logo pe flayere, postere etc.</li>
              <li>Amplasare logo-ului pe robot</li>
              <li>Amplasare logo pe echipamentul echipei</li>
              <li>Roll-up la evenimente</li>
              <li>Materiale promoționale la evenimente</li>
              <li>Demo-uri la cererea sponsorului</li>
            </ul>
          </div>
          <div className="package-card gold">
            <div className="p-badge">Pachetul</div>
            <div className="p-title">GOLD</div>
            <div className="p-price">1000–3000€</div>
            <ul className="benefits-list">
              <li>Menționarea în postări comune / story-uri</li>
              <li>Amplasare logo pe flayere, postere etc.</li>
              <li>Amplasare logo-ului pe robot</li>
              <li>Amplasare logo pe echipamentul echipei</li>
              <li>Roll-up la evenimente</li>
              <li>Materiale promoționale la evenimente</li>
            </ul>
          </div>
          <div className="package-card silver">
            <div className="p-badge">Pachetul</div>
            <div className="p-title">SILVER</div>
            <div className="p-price">500–1000€</div>
            <ul className="benefits-list">
              <li>Menționarea în postări comune / story-uri</li>
              <li>Amplasare logo pe flayere, postere etc.</li>
              <li>Amplasare logo-ului pe robot</li>
              <li>Amplasare logo pe echipamentul echipei</li>
            </ul>
          </div>
          <div className="package-card bronze">
            <div className="p-badge">Pachetul</div>
            <div className="p-title">BRONZE</div>
            <div className="p-price">&lt;500€</div>
            <ul className="benefits-list">
              <li>Menționarea în postări comune / story-uri</li>
              <li>Amplasare logo pe flayere, postere etc.</li>
              <li>Amplasare logo-ului pe robot</li>
            </ul>
          </div>
          <div className="package-card partner">
            <div className="p-badge">Pachetul</div>
            <div className="p-title">PARTENER</div>
            <div className="p-price">Servicii</div>
            <ul className="benefits-list">
              <li>Menționarea în postări comune / story-uri</li>
              <li>Amplasare logo pe flayere, postere etc.</li>
              <li>Amplasare logo-ului pe robot</li>
              <li>Amplasare logo pe echipamentul echipei</li>
              <li>Roll-up la evenimente</li>
              <li>Materiale promoționale la evenimente</li>
            </ul>
          </div>
        </div>
        <div className="sponsor-cta">
          <p>Interesat de un parteneriat? Hai să găsim împreună pachetul potrivit.</p>
          <Link href="#contact" className="btn-primary">Contactează-ne</Link>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="section" data-num="03">
        <p className="section-label">03 — Get in touch</p>
        <h2 className="section-title">Contactează-ne</h2>
        <div className="section-divider"></div>
        <p className="section-lead">
          Ai o întrebare, o propunere de colaborare sau vrei să ne sponsorizezi? Scrie-ne — răspundem cât putem de repede.
        </p>
        <div className="contact-layout">
          {/* ── INFO CARD ── */}
          <div className="glass-card contact-card">
            <h3>Date de contact</h3>
            <div className="contact-methods">
              <a href="mailto:wizztechtm@gmail.com" className="contact-method">
                <span className="feature-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>
                </span>
                <span className="contact-method-text">
                  <span className="contact-method-label">Email</span>
                  <span className="contact-method-value">wizztechtm@gmail.com</span>
                </span>
              </a>
              <a href="tel:+40757002002" className="contact-method">
                <span className="feature-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </span>
                <span className="contact-method-text">
                  <span className="contact-method-label">Telefon — Mihai Gorunescu</span>
                  <span className="contact-method-value">+40 757 002 002</span>
                </span>
              </a>
              <a href="https://maps.google.com/?q=Calea+Bogdăneștilor+32A+Timișoara" target="_blank" rel="noopener noreferrer" className="contact-method">
                <span className="feature-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </span>
                <span className="contact-method-text">
                  <span className="contact-method-label">Locație</span>
                  <span className="contact-method-value">Calea Bogdăneștilor nr.32A, Timișoara</span>
                </span>
              </a>
            </div>

            <p className="contact-social-label">Urmărește-ne</p>
            <div className="social-row">
              {socials.map((s) => (
                <a key={s.alt} href={s.href} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label={s.alt}>
                  <img src={s.src} alt={s.alt} />
                </a>
              ))}
            </div>

            <div className="contact-map">
              <iframe
                title="Locație WizzTech — Timișoara"
                src="https://www.google.com/maps?q=Calea%20Bogd%C4%83ne%C8%99tilor%2032A%2C%20Timi%C8%99oara&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* ── FORM CARD ── */}
          <div className="glass-card contact-card">
            <h3>Trimite-ne un mesaj</h3>
            <form action="https://formspree.io/f/wizztechtm@gmail.com" method="POST">
              <label htmlFor="contact-nume" className="sr-only">Nume complet</label>
              <input id="contact-nume" type="text" name="nume" placeholder="Nume complet" autoComplete="name" required />
              <label htmlFor="contact-email" className="sr-only">Email</label>
              <input id="contact-email" type="email" name="_replyto" placeholder="Email" autoComplete="email" required />
              <label htmlFor="contact-subiect" className="sr-only">Subiect</label>
              <input id="contact-subiect" type="text" name="subiect" placeholder="Subiect (ex. Sponsorizare, Colaborare)" />
              <label htmlFor="contact-mesaj" className="sr-only">Mesajul tău</label>
              <textarea id="contact-mesaj" name="mesaj" rows={6} placeholder="Mesajul tău..." required></textarea>
              <button type="submit" className="btn-submit">Trimite Mesaj</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
