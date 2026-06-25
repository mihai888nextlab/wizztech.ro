export const metadata = { title: 'WizzTech | Activitate' };

const events = [
  { date: 'Ediția 2026', name: 'WizzTour', description: 'Prin această caravană anuală, vizităm școli și licee din Timișoara și împrejurimi. Scopul nostru este de a promova educația STEM și robotica, inspirând tinerii din diverse medii să descopere tehnologia.', location: 'Timișoara' },
  { date: '09.03.2026', name: 'Innovate Together', description: 'O serie de întâlniri începută alături de echipa Brickbot din Focșani. Discutăm cu diverse echipe despre FTC, organizare și idei din acest sezon, cu scopul de a întări comunitatea FIRST.', location: 'Online / Timișoara–Focșani' },
  { date: '21.04.2026', name: 'World Creativity & Innovation Day', description: 'Am adus robotica mai aproape de elevii de clasa a IV-a din liceul nostru. Ghidați de noi, copiii au descoperit magia programării, transformând tehnologia dintr-o enigmă într-o joacă logică.', location: 'Liceul Teoretic "Grigore Moisil", Timișoara' },
  { date: '29.04.2026', name: 'Hope for Tomorrow', description: 'Un eveniment caritabil organizat alături de Banca pentru Alimente Timișoara. Prin cele 9 activități interactive, am oferit copiilor o zi de neuitat, plină de distracție, zâmbete și fapte bune.', location: 'Casa Tineretului, Timișoara' },
  { date: '16.05.2026', name: 'RoboBricks', description: 'O zi plină de tehnologie și creativitate în mall, realizată alături de Interact Club Timișoara. Copiii s-au jucat cu robotul, susținând totodată o cauză vitală: îngrijirea pacienților aflați în stare terminală.', location: 'Iulius Mall, Timișoara' },
  { date: '01.06.2026', name: 'Șotron cu Roboți', description: 'De 1 Iunie, am transformat un joc clasic într-o aventură tehnologică! Într-un decor plin de culoare și jucării, copiii s-au distrat de minune făcând primii pași în fascinanta lume a roboticii.', location: 'Nest Parcul Copiilor, Timișoara' },
  { date: '06.06.2026', name: 'Magic of FTC', description: 'WizzTech a creat un spațiu interactiv alături de echipele de robotică din Timișoara. Vizitatorii au descoperit universul STEM, au înțeles robotica și au trăit emoția competiției prin meciuri demonstrative FTC.', location: 'Iulius Mall, Timișoara' },
];

const photos = [
  { src: '/2018.JPG', caption: '2017–2018 · RELIC RECOVERY' },
  { src: '/2019.JPG', caption: '2018–2019 · ROVER RUCKUS' },
  { src: '/2020.JPG', caption: '2019–2020 · SKYSTONE' },
  { src: '/2021.JPG', caption: '2020–2021 · ULTIMATE GOAL' },
  { src: '/2022.JPG', caption: '2021–2022 · FREIGHT FRENZY' },
  { src: '/2023.JPG', caption: '2022–2023 · POWERPLAY' },
  { src: '/2024.JPG', caption: '2023–2024 · CENTERSTAGE' },
  { src: '/2025.JPG', caption: '2024–2025 · INTO THE DEEP' },
  { src: '/2026.JPEG', caption: '2025–2026 · DECODE' },
];

export default function ActivitatePage() {
  return (
    <>
      {/* ── EVENIMENTE ── */}
      <section id="events" className="section" data-num="01">
        <p className="section-label">01 — Outreach</p>
        <h1 className="section-title">Evenimente</h1>
        <div className="section-divider"></div>
        <p className="section-lead">
          Robotica nu se oprește la competiții. Ducem pasiunea pentru STEM mai departe, în comunitate, prin caravane, ateliere și evenimente caritabile.
        </p>
        {/* [Înlocuiește numerele de mai jos cu cifrele reale ale echipei] */}
        <div className="impact-band">
          <div className="glass-card impact-stat">
            <div className="impact-num">500+</div>
            <div className="impact-label">Copii inspirați</div>
          </div>
          <div className="glass-card impact-stat">
            <div className="impact-num">15+</div>
            <div className="impact-label">Școli &amp; licee vizitate</div>
          </div>
          <div className="glass-card impact-stat">
            <div className="impact-num">20+</div>
            <div className="impact-label">Evenimente de outreach</div>
          </div>
          <div className="glass-card impact-stat">
            <div className="impact-num">9</div>
            <div className="impact-label">Sezoane FTC</div>
          </div>
        </div>
        <div className="events-list">
          {events.map((e) => (
            <div key={e.name} className="event-card">
              <div className="event-date-col">
                <span className="event-date-badge">{e.date}</span>
              </div>
              <div className="event-body">
                <div className="event-name">{e.name}</div>
                <p className="event-description">{e.description}</p>
                <div className="event-location">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                  </svg>
                  {e.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── GALERIE ── */}
      <section id="gallery" className="section" data-num="02">
        <p className="section-label">02 — Archive</p>
        <h2 className="section-title">Galerie</h2>
        <div className="section-divider"></div>
        <div className="gallery-grid">
          {photos.map((p) => (
            <div key={p.caption} className="gallery-item">
              <div className="gallery-img-wrap">
                <img src={p.src} alt={p.caption} loading="lazy" />
                <div className="gallery-overlay"></div>
              </div>
              <div className="gallery-caption">{p.caption}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
