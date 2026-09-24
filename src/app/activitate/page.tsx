import Image from 'next/image';

export const metadata = { title: 'Activitate' };

const EVENTS = [
  { date: 'Ediția 2026', name: 'WizzTour', description: 'Prin această caravană anuală, vizităm școli și licee din Timișoara și împrejurimi. Scopul nostru este de a promova educația STEM și robotica, inspirând tinerii din diverse medii să descopere tehnologia.', location: 'Timișoara' },
  { date: '09.03.2026', name: 'Innovate Together', description: 'O serie de întâlniri începută alături de echipa Brickbot din Focșani. Discutăm cu diverse echipe despre FTC, organizare și idei din acest sezon, cu scopul de a întări comunitatea FIRST.', location: 'Online / Timișoara–Focșani' },
  { date: '21.04.2026', name: 'World Creativity & Innovation Day', description: 'Am adus robotica mai aproape de elevii de clasa a IV-a din liceul nostru. Ghidați de noi, copiii au descoperit magia programării, transformând tehnologia dintr-o enigmă într-o joacă logică.', location: 'Liceul Teoretic "Grigore Moisil", Timișoara' },
  { date: '29.04.2026', name: 'Hope for Tomorrow', description: 'Un eveniment caritabil organizat alături de Banca pentru Alimente Timișoara. Prin cele 9 activități interactive, am oferit copiilor o zi de neuitat, plină de distracție, zâmbete și fapte bune.', location: 'Casa Tineretului, Timișoara' },
  { date: '16.05.2026', name: 'RoboBricks', description: 'O zi plină de tehnologie și creativitate în mall, realizată alături de Interact Club Timișoara. Copiii s-au jucat cu robotul, susținând totodată o cauză vitală: îngrijirea pacienților aflați în stare terminală.', location: 'Iulius Mall, Timișoara' },
  { date: '01.06.2026', name: 'Șotron cu Roboți', description: 'De 1 Iunie, am transformat un joc clasic într-o aventură tehnologică! Într-un decor plin de culoare și jucării, copiii s-au distrat de minune făcând primii pași în fascinanta lume a roboticii.', location: 'Nest Parcul Copiilor, Timișoara' },
  { date: '06.06.2026', name: 'Magic of FTC', description: 'WizzTech a creat un spațiu interactiv alături de echipele de robotică din Timișoara. Vizitatorii au descoperit universul STEM, au înțeles robotica și au trăit emoția competiției prin meciuri demonstrative FTC.', location: 'Iulius Mall, Timișoara' },
];

const PHOTOS = [
  { src: '/2018.JPG', caption: '2017–2018 · Relic Recovery' },
  { src: '/2019.JPG', caption: '2018–2019 · Rover Ruckus' },
  { src: '/2020.JPG', caption: '2019–2020 · Skystone' },
  { src: '/2021.JPG', caption: '2020–2021 · Ultimate Goal' },
  { src: '/2022.JPG', caption: '2021–2022 · Freight Frenzy' },
  { src: '/2023.JPG', caption: '2022–2023 · Powerplay' },
  { src: '/2024.JPG', caption: '2023–2024 · Centerstage' },
  { src: '/2025.JPG', caption: '2024–2025 · Into the Deep' },
  { src: '/2026.JPEG', caption: '2025–2026 · Decode' },
];

/* [Înlocuiește numerele de mai jos cu cifrele reale ale echipei] */
const IMPACT = [
  { num: '500+', label: 'Copii inspirați' },
  { num: '15+', label: 'Școli & licee vizitate' },
  { num: '20+', label: 'Evenimente de outreach' },
  { num: '9', label: 'Sezoane FTC' },
];

const PinIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
  </svg>
);

export default function ActivitatePage() {
  return (
    <>
      {/* ── EVENIMENTE ── */}
      <section id="events" className="section">
        <p className="section-label reveal">01 — Outreach</p>
        <h1 className="section-title reveal">
          Evenimentele <span className="accent">noastre</span>
        </h1>
        <div className="section-divider reveal" />
        <p className="section-lead reveal">
          Robotica nu se oprește la competiții. Ducem pasiunea pentru STEM mai departe, în comunitate,
          prin caravane, ateliere și evenimente caritabile.
        </p>

        <div className="impact-band">
          {IMPACT.map((s, i) => (
            <div
              key={s.label}
              className="glass-card impact-stat reveal"
              style={{ '--i': i } as React.CSSProperties}
            >
              <div className="impact-num">{s.num}</div>
              <div className="impact-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="events-list">
          {EVENTS.map((e, i) => (
            <article
              key={e.name}
              className="event-card reveal"
              style={{ '--i': Math.min(i, 5) } as React.CSSProperties}
            >
              <div className="event-date-col">
                <span className="event-date-badge">{e.date}</span>
              </div>
              <div className="event-body">
                <h3 className="event-name">{e.name}</h3>
                <p className="event-description">{e.description}</p>
                <p className="event-location">
                  <PinIcon />
                  {e.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── GALERIE ── */}
      <section id="gallery" className="section">
        <p className="section-label reveal">02 — Archive</p>
        <h2 className="section-title reveal">
          Galerie <span className="accent">pe sezoane</span>
        </h2>
        <div className="section-divider reveal" />
        <p className="section-lead reveal">
          Câte o imagine din fiecare sezon FTC în care am concurat, din 2017 până astăzi.
        </p>

        <ul className="gallery-grid">
          {PHOTOS.map((p, i) => (
            <li
              key={p.caption}
              className="gallery-item reveal"
              style={{ '--i': i % 4 } as React.CSSProperties}
            >
              <div className="gallery-img-wrap">
                <Image
                  src={p.src}
                  alt={`Echipa WizzTech în sezonul ${p.caption}`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="gallery-overlay" />
              </div>
              <div className="gallery-caption">{p.caption}</div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
