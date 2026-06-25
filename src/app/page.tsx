import Link from 'next/link';

export const metadata = { title: 'WizzTech | Acasă' };

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section id="home" className="hero section">
        <div className="hero-content">
          <div className="hero-text-side">
            <span className="hero-eyebrow">RO048 · #19094 · FTC Robotics</span>
            <h1 className="hero-heading">
              <img src="/wizztech-logo-text-2023-2024.png" alt="WizzTech" className="hero-wordmark" />
              <span className="sr-only">WizzTech — Echipa de robotică a Liceului Teoretic Grigore Moisil, Timișoara</span>
            </h1>
            {/* [Personalizează acest slogan dacă vrei] */}
            <p className="hero-tagline">Transformăm pasiunea în tehnologie și ideile în inovație.</p>
            <p>
              Echipa de robotică a Liceului Teoretic &quot;Grigore Moisil&quot;, Timișoara.<br />
              We make magic happen.
            </p>
            <div className="hero-stats">
              <div className="hero-stat"><span className="hero-stat-num">2017</span><span className="hero-stat-label">Din anul</span></div>
              <div className="hero-stat"><span className="hero-stat-num">19</span><span className="hero-stat-label">Membri</span></div>
              <div className="hero-stat"><span className="hero-stat-num">9</span><span className="hero-stat-label">Sezoane FTC</span></div>
            </div>
            <div className="hero-actions">
              <Link href="#history" className="btn-primary">Descoperă povestea</Link>
              <Link href="/sponsori#contact" className="read-more-btn">Devino sponsor</Link>
            </div>
          </div>
          <div className="hero-logo-side">
            <img src="/wizztech-logo2023-2024.png" alt="WizzTech Owl Logo" className="main-hero-logo" />
          </div>
        </div>
      </section>

      {/* ── DESPRE / CE ESTE FTC / MISIUNE ── */}
      <section id="about" className="section" data-num="01">
        <p className="section-label">01 — About</p>
        <h2 className="section-title">Cine Suntem</h2>
        <div className="section-divider"></div>
        <div className="feature-grid">
          <div className="glass-card feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
            </div>
            <h3>Cine suntem</h3>
            {/* [Personalizează acest text despre echipă] */}
            <p>Suntem <strong>WizzTech</strong>, echipa de robotică a Liceului Teoretic „Grigore Moisil” din Timișoara — 19 elevi pasionați de inginerie, programare și creativitate, uniți de dorința de a transforma ideile în realitate.</p>
          </div>
          <div className="glass-card feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="8" width="16" height="12" rx="2" /><path d="M12 8V4" /><circle cx="12" cy="3" r="1" /><path d="M9 13h.01M15 13h.01M9 17h6" /></svg>
            </div>
            <h3>Ce este FTC?</h3>
            <p><strong>FIRST Tech Challenge</strong> este o competiție internațională de robotică pentru liceeni. În fiecare sezon, echipele proiectează, construiesc și programează un robot pentru a îndeplini provocări pe teren, dezvoltând abilități STEM, lucru în echipă și spirit antreprenorial.</p>
          </div>
          <div className="glass-card feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
            </div>
            <h3>Misiunea noastră</h3>
            {/* [Personalizează misiunea echipei] */}
            <p>Promovăm educația STEM și robotica în comunitate, inspirând tinerii să descopere tehnologia. Ne dorim să creștem o nouă generație de ingineri, programatori și inovatori care visează în mare și construiesc viitorul.</p>
          </div>
        </div>
      </section>

      {/* ── ROBOTUL NOSTRU ── */}
      <section id="robot" className="section" data-num="02">
        <p className="section-label">02 — Engineering</p>
        <h2 className="section-title">Robotul Nostru</h2>
        <div className="section-divider"></div>
        <div className="robot-showcase">
          {/* [Înlocuiește placeholder-ul de mai jos cu o poză a robotului:
              pune fișierul în /public și schimbă cu <img src="/robot.jpg" alt="Robotul WizzTech" />] */}
          <div className="robot-media">
            <div className="robot-placeholder">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="8" width="16" height="12" rx="2" /><path d="M12 8V4" /><circle cx="12" cy="3" r="1" /><path d="M9 13h.01M15 13h.01M9 17h6" /></svg>
              <span>Adaugă o poză cu robotul</span>
            </div>
          </div>
          <div className="robot-info">
            <h3>DECODE · Sezonul 2025–2026</h3>
            {/* [Completează specificațiile reale ale robotului vostru] */}
            <ul className="robot-specs">
              <li><span className="spec-key">Drivetrain</span><span className="spec-val">[ex. Mecanum]</span></li>
              <li><span className="spec-key">Greutate</span><span className="spec-val">[__ kg]</span></li>
              <li><span className="spec-key">Dimensiuni</span><span className="spec-val">[__ × __ × __ cm]</span></li>
              <li><span className="spec-key">Subsisteme</span><span className="spec-val">[ex. intake, lift, launcher]</span></li>
              <li><span className="spec-key">Limbaj programare</span><span className="spec-val">Java</span></li>
              <li><span className="spec-key">Controller</span><span className="spec-val">REV Control Hub</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── ISTORIE ── */}
      <section id="history" className="section" data-num="03">
        <p className="section-label">03 — Istorie</p>
        <h2 className="section-title">Istoria Echipei</h2>
        <div className="section-divider"></div>
        <div className="history-content">
          <div className="history-text glass-card">
            <h3>Drumul către excelență</h3>
            <p>Povestea <strong>WizzTech</strong> a început în 2017 din dorința de a aplica practic noțiunile de fizică și informatică. Ceea ce a pornit ca un proiect restrâns a evoluat constant, ajungând astăzi o echipă de <strong>19 elevi</strong> dedicați inovației prin colaborare.</p>
            <p>Am obținut calificarea la <strong>etapa națională</strong> încă din primul sezon, performanță pe care am menținut-o constant prin calificări succesive. Parcursul nostru a fost marcat și de provocări, precum perioada pandemiei, care ne-a testat <strong>reziliența</strong> și a pregătit noile generații să preia ștafeta cu determinare.</p>
            <p>Pentru noi, <strong>robotica</strong> înseamnă soluții tehnice ingenioase și o echipă capabilă să le transforme în realitate. Ne concentrăm pe <strong>performanță</strong> și pe dezvoltarea continuă a fiecărui membru care face parte din universul nostru.</p>
          </div>
          <div className="history-line">
            <div className="history-item">
              <h4>2017 — Începutul</h4>
              <p>Echipa prinde viață din pasiunea pentru științe exacte.</p>
            </div>
            <div className="history-item">
              <h4>2019 — Naționala</h4>
              <p>Am reușit să ajungem la etapa națională FTC, un moment important pentru echipa noastră.</p>
            </div>
            <div className="history-item">
              <h4>2020–2022 — Continuitate</h4>
              <p>Chiar și în pandemie, am găsit soluții să rămânem activi și să nu pierdem echipa.</p>
            </div>
            <div className="history-item">
              <h4>Prezent — Evoluție</h4>
              <p>Continuăm să îmbunătățim robotul și să creștem nivelul performanței în fiecare sezon.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PREMII ── */}
      <section id="awards" className="section" data-num="04">
        <p className="section-label">04 — Premii</p>
        <h2 className="section-title">Premiile Noastre</h2>
        <div className="section-divider"></div>
        <div className="awards-showcase">
          <div className="award-row">
            <div className="award-img-cell">
              <img src="/motivate2025.PNG" alt="Motivate Award, locul III, 2025" />
            </div>
            <div className="award-info-cell">
              <span className="award-tag">Locul III · 2025</span>
              <h3 className="award-title">Motivate Award</h3>
              <p className="award-desc">Acest premiu celebrează spiritul echipei noastre de a face robotica cunoscută. Recunoaștere pentru eforturile de recrutare, outreach și impactul pozitiv asupra comunității STEM prin promovarea valorilor FIRST.</p>
            </div>
          </div>
          <div className="award-row">
            <div className="award-img-cell">
              <img src="/specialawardaeroport.PNG" alt="Special Award, Expoziția Traian Vuia" />
            </div>
            <div className="award-info-cell">
              <span className="award-tag">Special Award</span>
              <h3 className="award-title">Expoziția Traian Vuia</h3>
              <p className="award-desc">O distincție specială ce subliniază viziunea noastră tehnologică și spiritul inovator. Oferit în cadrul prestigioasei Expoziții Internaționale de Invenții și Inovații «Traian Vuia», onorează soluțiile unice implementate pe robotul nostru.</p>
            </div>
          </div>
          <div className="award-row">
            <div className="award-img-cell">
              <img src="/motivate2019.PNG" alt="Motivate Award, locul III, 2019" />
            </div>
            <div className="award-info-cell">
              <span className="award-tag">Locul III · 2019</span>
              <h3 className="award-title">Motivate Award</h3>
              <p className="award-desc">Acest premiu reflectă efortul nostru de a duce robotica mai departe în comunitate. Este o recunoaștere a muncii depuse în recrutare și outreach, evidențiind impactul pe care l-am avut prin promovarea valorilor FIRST și a educației STEM.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
