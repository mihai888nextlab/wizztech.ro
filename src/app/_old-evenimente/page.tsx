export const metadata = { title: 'WizzTech | Evenimente' };

const events = [
  { date: 'Ediția 2026', name: 'WizzTour', description: 'Prin această caravană anuală, vizităm școli și licee din Timișoara și împrejurimi. Scopul nostru este de a promova educația STEM și robotica, inspirând tinerii din diverse medii să descopere tehnologia.', location: 'Timișoara' },
  { date: '09.03.2026', name: 'Innovate Together', description: 'O serie de întâlniri începută alături de echipa Brickbot din Focșani. Discutăm cu diverse echipe despre FTC, organizare și idei din acest sezon, cu scopul de a întări comunitatea FIRST.', location: 'Online / Timișoara–Focșani' },
  { date: '21.04.2026', name: 'World Creativity & Innovation Day', description: 'Am adus robotica mai aproape de elevii de clasa a IV-a din liceul nostru. Ghidați de noi, copiii au descoperit magia programării, transformând tehnologia dintr-o enigmă într-o joacă logică.', location: 'Liceul Teoretic "Grigore Moisil", Timișoara' },
  { date: '29.04.2026', name: 'Hope for Tomorrow', description: 'Un eveniment caritabil organizat alături de Banca pentru Alimente Timișoara. Prin cele 9 activități interactive, am oferit copiilor o zi de neuitat, plină de distracție, zâmbete și fapte bune.', location: 'Casa Tineretului, Timișoara' },
  { date: '16.05.2026', name: 'RoboBricks', description: 'O zi plină de tehnologie și creativitate în mall, realizată alături de Interact Club Timișoara. Copiii s-au jucat cu robotul, susținând totodată o cauză vitală: îngrijirea pacienților aflați în stare terminală.', location: 'Iulius Mall, Timișoara' },
  { date: '01.06.2026', name: 'Șotron cu Roboți', description: 'De 1 Iunie, am transformat un joc clasic într-o aventură tehnologică! Într-un decor plin de culoare și jucării, copiii s-au distrat de minune făcând primii pași în fascinanta lume a roboticii.', location: 'Nest Parcul Copiilor, Timișoara' },
  { date: '06.06.2026', name: 'Magic of FTC', description: 'WizzTech a creat un spațiu interactiv alături de echipele de robotică din Timișoara. Vizitatorii au descoperit universul STEM, au înțeles robotica și au trăit emoția competiției prin meciuri demonstrative FTC.', location: 'Iulius Mall, Timișoara' },
];

export default function EvenimentePage() {
  return (
    <section id="events" className="section" data-num="04">
      <p className="section-label">04 — Outreach</p>
      <h2 className="section-title">Evenimente</h2>
      <div className="section-divider"></div>
      <div className="events-list">
        {events.map((e) => (
          <div key={e.name} className="event-card">
            <div className="event-date-col">
              <span className="event-date-badge">{e.date}</span>
            </div>
            <div className="event-body">
              <div className="event-name">{e.name}</div>
              <p className="event-description">{e.description}</p>
              <div className="event-location">{e.location}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
