import Image from 'next/image';
import Link from 'next/link';

export const metadata = { title: 'Acasă' };

const FEATURES = [
  {
    title: 'Cine suntem',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    /* [Personalizează acest text despre echipă] */
    body: (
      <>
        Suntem <strong>WizzTech</strong>, echipa de robotică a Liceului Teoretic „Grigore Moisil” din
        Timișoara — 19 elevi pasionați de inginerie, programare și creativitate, uniți de dorința de a
        transforma ideile în realitate.
      </>
    ),
  },
  {
    title: 'Ce este FTC?',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="4" y="8" width="16" height="12" rx="2" />
        <path d="M12 8V4" />
        <circle cx="12" cy="3" r="1" />
        <path d="M9 13h.01M15 13h.01M9 17h6" />
      </svg>
    ),
    body: (
      <>
        <strong>FIRST Tech Challenge</strong> este o competiție internațională de robotică pentru
        liceeni. În fiecare sezon, echipele proiectează, construiesc și programează un robot pentru a
        îndeplini provocări pe teren, dezvoltând abilități STEM, lucru în echipă și spirit
        antreprenorial.
      </>
    ),
  },
  {
    title: 'Misiunea noastră',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    /* [Personalizează misiunea echipei] */
    body: (
      <>
        Promovăm educația STEM și robotica în comunitate, inspirând tinerii să descopere tehnologia.
        Ne dorim să creștem o nouă generație de ingineri, programatori și inovatori care visează în
        mare și construiesc viitorul.
      </>
    ),
  },
];

/* [Completează specificațiile reale ale robotului vostru] */
const ROBOT_SPECS = [
  { key: 'Drivetrain', value: '[ex. Mecanum]' },
  { key: 'Greutate', value: '[__ kg]' },
  { key: 'Dimensiuni', value: '[__ × __ × __ cm]' },
  { key: 'Subsisteme', value: '[ex. intake, lift, launcher]' },
  { key: 'Programare', value: 'Java' },
  { key: 'Controller', value: 'REV Control Hub' },
];

const TIMELINE = [
  { year: '2017 — Începutul', text: 'Echipa prinde viață din pasiunea pentru științe exacte.' },
  { year: '2019 — Naționala', text: 'Am reușit să ajungem la etapa națională FTC, un moment important pentru echipa noastră.' },
  { year: '2020–2022 — Continuitate', text: 'Chiar și în pandemie, am găsit soluții să rămânem activi și să nu pierdem echipa.' },
  { year: 'Prezent — Evoluție', text: 'Continuăm să îmbunătățim robotul și să creștem nivelul performanței în fiecare sezon.' },
];

const AWARDS = [
  {
    img: '/motivate2025.PNG',
    alt: 'Diploma Motivate Award, locul III, 2025',
    tag: 'Locul III · 2025',
    title: 'Motivate Award',
    desc: 'Acest premiu celebrează spiritul echipei noastre de a face robotica cunoscută. Recunoaștere pentru eforturile de recrutare, outreach și impactul pozitiv asupra comunității STEM prin promovarea valorilor FIRST.',
  },
  {
    img: '/specialawardaeroport.PNG',
    alt: 'Special Award primit la Expoziția Traian Vuia',
    tag: 'Special Award',
    title: 'Expoziția Traian Vuia',
    desc: 'O distincție specială ce subliniază viziunea noastră tehnologică și spiritul inovator. Oferit în cadrul prestigioasei Expoziții Internaționale de Invenții și Inovații «Traian Vuia», onorează soluțiile unice implementate pe robotul nostru.',
  },
  {
    img: '/motivate2019.PNG',
    alt: 'Diploma Motivate Award, locul III, 2019',
    tag: 'Locul III · 2019',
    title: 'Motivate Award',
    desc: 'Acest premiu reflectă efortul nostru de a duce robotica mai departe în comunitate. Este o recunoaștere a muncii depuse în recrutare și outreach, evidențiind impactul pe care l-am avut prin promovarea valorilor FIRST și a educației STEM.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section id="home" className="hero section">
        <div className="hero-content">
          <div className="hero-text-side">
            <span className="hero-eyebrow">RO048 · #19094 · FTC Robotics</span>

            <h1 className="hero-heading">
              <Image
                src="/wizztech-logo-text-2023-2024.png"
                alt="WizzTech"
                width={1846}
                height={249}
                className="hero-wordmark"
                loading="eager"
                fetchPriority="high"
              />
              <span className="sr-only">
                WizzTech — Echipa de robotică a Liceului Teoretic Grigore Moisil, Timișoara
              </span>
            </h1>

            {/* [Personalizează acest slogan dacă vrei] */}
            <p className="hero-tagline">Transformăm pasiunea în tehnologie și ideile în inovație.</p>

            <p className="hero-sub">
              Echipa de robotică a Liceului Teoretic <strong>&quot;Grigore Moisil&quot;</strong>,
              Timișoara. We make magic happen.
            </p>

            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-num">2017</span>
                <span className="hero-stat-label">Din anul</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-num">19</span>
                <span className="hero-stat-label">Membri</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-num">9</span>
                <span className="hero-stat-label">Sezoane FTC</span>
              </div>
            </div>

            <div className="hero-actions">
              <Link href="#history" className="btn-primary">Descoperă povestea</Link>
              <Link href="/sponsori#contact" className="read-more-btn">Devino sponsor</Link>
            </div>
          </div>

          <div className="hero-logo-side">
            <Image
              src="/wizztech-logo2023-2024.png"
              alt="Logo-ul WizzTech — bufniță geometrică"
              width={391}
              height={575}
              className="main-hero-logo"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* ── DESPRE / CE ESTE FTC / MISIUNE ── */}
      <section id="about" className="section">
        <p className="section-label reveal">01 — About</p>
        <h2 className="section-title reveal">
          Cine <span className="accent">suntem</span>
        </h2>
        <div className="section-divider reveal" />

        <div className="feature-grid">
          {FEATURES.map((f, i) => (
            <article
              key={f.title}
              className="glass-card feature-card is-interactive reveal"
              style={{ '--i': i } as React.CSSProperties}
            >
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── ROBOTUL NOSTRU ── */}
      <section id="robot" className="section">
        <p className="section-label reveal">02 — Engineering</p>
        <h2 className="section-title reveal">
          Robotul <span className="accent">nostru</span>
        </h2>
        <div className="section-divider reveal" />

        <div className="robot-showcase">
          {/* [Înlocuiește placeholder-ul cu o poză a robotului: pune fișierul în /public
              și schimbă blocul de mai jos cu
              <Image src="/robot.jpg" alt="Robotul WizzTech" width={1200} height={900} />] */}
          <div className="robot-media reveal">
            <div className="robot-placeholder">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <rect x="4" y="8" width="16" height="12" rx="2" />
                <path d="M12 8V4" />
                <circle cx="12" cy="3" r="1" />
                <path d="M9 13h.01M15 13h.01M9 17h6" />
              </svg>
              <span>Adaugă o poză cu robotul</span>
            </div>
          </div>

          <div className="robot-info reveal" style={{ '--i': 1 } as React.CSSProperties}>
            <h3>DECODE · Sezonul 2025–2026</h3>
            <ul className="robot-specs">
              {ROBOT_SPECS.map((s) => (
                <li key={s.key}>
                  <span className="spec-key">{s.key}</span>
                  <span className="spec-val">{s.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── ISTORIE ── */}
      <section id="history" className="section">
        <p className="section-label reveal">03 — Istorie</p>
        <h2 className="section-title reveal">
          Istoria <span className="accent">echipei</span>
        </h2>
        <div className="section-divider reveal" />

        <div className="history-content">
          <div className="glass-card history-text reveal">
            <h3>Drumul către excelență</h3>
            <p>
              Povestea <strong>WizzTech</strong> a început în 2017 din dorința de a aplica practic
              noțiunile de fizică și informatică. Ceea ce a pornit ca un proiect restrâns a evoluat
              constant, ajungând astăzi o echipă de <strong>19 elevi</strong> dedicați inovației prin
              colaborare.
            </p>
            <p>
              Am obținut calificarea la <strong>etapa națională</strong> încă din primul sezon,
              performanță pe care am menținut-o constant prin calificări succesive. Parcursul nostru a
              fost marcat și de provocări, precum perioada pandemiei, care ne-a testat{' '}
              <strong>reziliența</strong> și a pregătit noile generații să preia ștafeta cu
              determinare.
            </p>
            <p>
              Pentru noi, <strong>robotica</strong> înseamnă soluții tehnice ingenioase și o echipă
              capabilă să le transforme în realitate. Ne concentrăm pe <strong>performanță</strong> și
              pe dezvoltarea continuă a fiecărui membru care face parte din universul nostru.
            </p>
          </div>

          <ol className="history-line">
            {TIMELINE.map((t, i) => (
              <li
                key={t.year}
                className="history-item reveal"
                style={{ '--i': i } as React.CSSProperties}
              >
                <h4>{t.year}</h4>
                <p>{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── PREMII ── */}
      <section id="awards" className="section">
        <p className="section-label reveal">04 — Premii</p>
        <h2 className="section-title reveal">
          Premiile <span className="accent">noastre</span>
        </h2>
        <div className="section-divider reveal" />

        <div className="awards-showcase">
          {AWARDS.map((a, i) => (
            <article
              key={a.title + a.tag}
              className="award-row reveal"
              style={{ '--i': i } as React.CSSProperties}
            >
              <div className="award-img-cell">
                <Image src={a.img} alt={a.alt} width={800} height={600} loading="lazy" sizes="(max-width: 860px) 100vw, 320px" />
              </div>
              <div className="award-info-cell">
                <span className="award-tag">{a.tag}</span>
                <h3 className="award-title">{a.title}</h3>
                <p className="award-desc">{a.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
