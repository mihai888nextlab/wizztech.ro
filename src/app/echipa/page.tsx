import Image from 'next/image';
import Link from 'next/link';

export const metadata = { title: 'Echipă' };

const DEPARTMENTS = [
  {
    name: 'Mecanică',
    desc: 'Proiectează și construiește robotul — de la șasiu la sistemele de prindere și mișcare. Transformă schițele în mecanisme reale.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    name: 'Programare',
    desc: 'Dă viață robotului prin cod: control autonom, citirea senzorilor și strategie de joc, totul scris în Java.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    name: 'Media',
    desc: 'Promovează echipa online și offline — conținut, social media, design grafic și relația cu comunitatea.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
  {
    name: 'Financiar',
    desc: 'Gestionează bugetul, sponsorizările și logistica, asigurând resursele de care echipa are nevoie pentru a performa.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
        <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
        <path d="M18 12a2 2 0 0 0 0 4h4v-4z" />
      </svg>
    ),
  },
];

const MEMBERS = [
  { img: '/mihai.png', name: 'Gorunescu Mihai', role: 'Team Leader' },
  { img: '/vacariuc.jpg', name: 'Văcăriuc Andrei', role: 'Lider Programare' },
  { img: '/albert.jpg', name: 'Molocea Albert', role: 'Lider mecanică' },
  { img: '/georgi.png', name: 'Stănescu Georgiana', role: 'Lider media' },
  { img: '/cristi.png', name: 'Stiegelbauer Cristian', role: 'Lider financiar' },
  { img: '/daria.jpg', name: 'Cătăneț Daria', role: 'Membru mecanică' },
  { img: '/razvi.jpg', name: 'Bujniță Răzvan', role: 'Membru mecanică' },
  { img: '/teo calde.jpg', name: 'Ionici-Rădoi Teodor', role: 'Membru mecanică' },
  { img: '/onela.jpg', name: 'Onel Andreea', role: 'Membru mecanică' },
  { img: '/deyutzuu.jpg', name: 'Gorunescu Andrei', role: 'Membru mecanică' },
  { img: '/lucia.png', name: 'Mureșan Lucia', role: 'Membru mecanică' },
  { img: '/mal.png', name: 'Boldea Malina', role: 'Membru mecanică' },
  { img: '/fane.png', name: 'Booveanu Ștefan', role: 'Membru mecanică' },
  { img: '/barzuca.jpg', name: 'Barzuca-Radu Adrian', role: 'Membru programare' },
  { img: '/ardelian.png', name: 'Ardelian Ștefan', role: 'Membru programare' },
  { img: '/andreea.jpg', name: 'Buruian Andreea', role: 'Membru media' },
  { img: '/chis.png', name: 'Chiș Maria', role: 'Membru media' },
  { img: '/jebe.png', name: 'Jebelean Andrei', role: 'Membru financiar' },
];

const MENTORS = [
  { img: '/robi.png', name: 'Rădoi Robert', role: 'Mentor Coordonator' },
  { img: '/tomici.png', name: 'Tomici Vlad', role: 'Mentor Tehnic' },
  { img: '/verigu.png', name: 'Hoescu Răzvan', role: 'Mentor Tehnic' },
];

/** Avatars render at 88px; request 2× so they stay crisp on retina. */
function PersonCard({
  person,
  labelClass,
  index,
}: {
  person: { img: string; name: string; role: string };
  labelClass: string;
  index: number;
}) {
  return (
    <li className="member-card reveal" style={{ '--i': index % 6 } as React.CSSProperties}>
      <Image
        src={person.img}
        alt={person.name}
        width={176}
        height={176}
        className="member-img"
        loading="lazy"
        sizes="88px"
      />
      <h4>{person.name}</h4>
      <p className={labelClass}>{person.role}</p>
    </li>
  );
}

export default function EchipaPage() {
  return (
    <>
      {/* ── DEPARTAMENTE ── */}
      <section id="departments" className="section">
        <p className="section-label reveal">01 — Structure</p>
        <h1 className="section-title reveal">
          Departamentele <span className="accent">noastre</span>
        </h1>
        <div className="section-divider reveal" />
        <p className="section-lead reveal">
          Fiecare membru contribuie printr-unul din cele patru departamente care, împreună, fac echipa
          să funcționeze.
        </p>

        <div className="feature-grid">
          {DEPARTMENTS.map((d, i) => (
            <article
              key={d.name}
              className="glass-card feature-card is-interactive reveal"
              style={{ '--i': i } as React.CSSProperties}
            >
              <div className="feature-icon">{d.icon}</div>
              <h3>{d.name}</h3>
              <p>{d.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── MEMBRI ── */}
      <section id="members" className="section">
        <p className="section-label reveal">02 — People</p>
        <h2 className="section-title reveal">
          Echipa <span className="accent">noastră</span>
        </h2>
        <div className="section-divider reveal" />

        <ul className="grid-container">
          {MEMBERS.map((m, i) => (
            <PersonCard key={m.name} person={m} labelClass="member-label" index={i} />
          ))}
        </ul>
      </section>

      {/* ── MENTORI ── */}
      <section id="mentors" className="section">
        <p className="section-label reveal">03 — Mentors</p>
        <h2 className="section-title reveal">Mentori</h2>
        <div className="section-divider reveal" />

        <ul className="grid-container" style={{ maxWidth: '620px' }}>
          {MENTORS.map((m, i) => (
            <PersonCard key={m.name} person={m} labelClass="mentor-label" index={i} />
          ))}
        </ul>

        {/* ── RECRUTARE ── */}
        {/* [Personalizează mesajul de recrutare — perioadă, condiții, cum se aplică] */}
        <div className="cta-band reveal">
          <h3>Vrei să faci parte din echipă?</h3>
          <p>
            Căutăm mereu colegi pasionați de robotică, programare, mecanică, media sau organizare.
            Indiferent de experiență, dacă vrei să înveți și să construiești alături de noi, te
            așteptăm.
          </p>
          <Link href="/sponsori#contact" className="btn-primary">Contactează-ne</Link>
        </div>
      </section>
    </>
  );
}
