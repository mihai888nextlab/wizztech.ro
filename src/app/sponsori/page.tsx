export const metadata = { title: 'WizzTech | Sponsori' };

export default function SponzoriPage() {
  return (
    <>
      <section id="sponsors" className="section" data-num="05">
        <p className="section-label">05 — Partners</p>
        <h2 className="section-title">Sponsori & Parteneri</h2>
        <div className="section-divider"></div>
        <div className="sponsors-box">
          <div className="sponsor-category">
            <p className="cat-title">Gold Sponsors</p>
            <div className="sponsors-grid-new">
              <div className="logo-wrapper"><img src="/logo everseen.png" className="sponsor-logo-img" alt="Everseen" /></div>
              <div className="logo-wrapper"><img src="/aumovio logo.png" className="sponsor-logo-img" alt="Aumovio" /></div>
              <div className="logo-wrapper"><img src="/kimbal logo.png" className="sponsor-logo-img" alt="Kimball" /></div>
            </div>
          </div>
          <div className="sponsor-category">
            <p className="cat-title">Bronze Sponsors</p>
            <div className="sponsors-grid-new">
              <div className="logo-wrapper"><img src="/leroy logo.png" className="sponsor-logo-img" alt="Leroy Merlin" /></div>
            </div>
          </div>
          <div className="sponsor-category">
            <p className="cat-title">Partners</p>
            <div className="sponsors-grid-new">
              <div className="logo-wrapper"><img src="/moisil logo.png" className="sponsor-logo-img" alt="Moisil" /></div>
              <div className="logo-wrapper"><img src="/asociatia logo.png" className="sponsor-logo-img" alt="Asociatia" /></div>
              <div className="logo-wrapper"><img src="/te miri ce logo.png" className="sponsor-logo-img" alt="Te miri ce" /></div>
            </div>
          </div>
        </div>
      </section>

      <section id="become-sponsor" className="section" style={{ minHeight: 'auto', paddingTop: '0' }}>
        <p className="section-label">05b — Join Us</p>
        <h2 className="section-title">Become a Sponsor</h2>
        <div className="section-divider"></div>
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

        <div className="support-us-box">
          <h3>Support Us</h3>
          <form action="https://formspree.io/f/wizztechtm@gmail.com" method="POST">
            <input type="text" name="nume" placeholder="Compania / Nume" required />
            <input type="email" name="_replyto" placeholder="Email" required />
            <textarea name="mesaj" rows={3} placeholder="Cum dorești să ne susții?" required></textarea>
            <button type="submit" className="btn-submit">Trimite Propunere</button>
          </form>
        </div>
      </section>
    </>
  );
}
