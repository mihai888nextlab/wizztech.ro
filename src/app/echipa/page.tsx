import Link from 'next/link';

export const metadata = { title: 'WizzTech | Echipă' };

const departments = [
  {
    name: 'Mecanică',
    desc: 'Proiectează și construiește robotul — de la șasiu la sistemele de prindere și mișcare. Transformă schițele în mecanisme reale.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
    ),
  },
  {
    name: 'Programare',
    desc: 'Dă viață robotului prin cod: control autonom, citirea senzorilor și strategie de joc, totul scris în Java.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
    ),
  },
  {
    name: 'Media',
    desc: 'Promovează echipa online și offline — conținut, social media, design grafic și relația cu comunitatea.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>
    ),
  },
  {
    name: 'Financiar',
    desc: 'Gestionează bugetul, sponsorizările și logistica, asigurând resursele de care echipa are nevoie pentru a performa.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4z" /></svg>
    ),
  },
];

const members = [
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

const mentors = [
  { img: '/robi.png', name: 'Rădoi Robert', role: 'Mentor Coordonator' },
  { img: '/tomici.png', name: 'Tomici Vlad', role: 'Mentor Tehnic' },
  { img: '/verigu.png', name: 'Hoescu Răzvan', role: 'Mentor Tehnic' },
];

export default function EchipaPage() {
  return (
    <section id="members" className="section" data-num="01">
      <p className="section-label">01 — Structure</p>
      <h1 className="section-title">Departamentele Noastre</h1>
      <div className="section-divider"></div>
      <p className="section-lead">
        Fiecare membru contribuie printr-unul din cele patru departamente care, împreună, fac echipa să funcționeze.
      </p>
      <div className="feature-grid" style={{ marginBottom: '5rem' }}>
        {departments.map((d) => (
          <div key={d.name} className="glass-card feature-card">
            <div className="feature-icon">{d.icon}</div>
            <h3>{d.name}</h3>
            <p>{d.desc}</p>
          </div>
        ))}
      </div>

      <p className="section-label">02 — People</p>
      <h2 className="section-title">Echipa Noastră</h2>
      <div className="section-divider"></div>
      <div className="grid-container">
        {members.map((m) => (
          <div key={m.name} className="member-card">
            <img src={m.img} className="member-img" alt={m.name} width={86} height={86} loading="lazy" />
            <h4>{m.name}</h4>
            <p className="member-label">{m.role}</p>
          </div>
        ))}
      </div>

      <p className="section-label" style={{ marginTop: '5rem' }}>03 — Mentors</p>
      <h2 className="section-title">Mentori</h2>
      <div className="section-divider"></div>
      <div className="grid-container" style={{ gridTemplateColumns: 'repeat(3, 1fr)', maxWidth: '600px' }}>
        {mentors.map((m) => (
          <div key={m.name} className="member-card">
            <img src={m.img} className="member-img" alt={m.name} width={86} height={86} loading="lazy" />
            <h4>{m.name}</h4>
            <p className="mentor-label">{m.role}</p>
          </div>
        ))}
      </div>

      {/* ── JOIN US CTA ── */}
      <div className="cta-band">
        <h3>Vrei să faci parte din echipă?</h3>
        {/* [Personalizează mesajul de recrutare — perioadă, condiții, cum se aplică] */}
        <p>Căutăm mereu colegi pasionați de robotică, programare, mecanică, media sau organizare. Indiferent de experiență, dacă vrei să înveți și să construiești alături de noi, te așteptăm.</p>
        <Link href="/sponsori#contact" className="btn-primary">Contactează-ne</Link>
      </div>
    </section>
  );
}
