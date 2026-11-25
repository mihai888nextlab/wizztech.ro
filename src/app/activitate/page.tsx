import Image from 'next/image';

export const metadata = { title: 'Activitate' };

const EVENTS = [
  { date: '2026', name: 'WizzTour', description: 'Caravana noastră anuală prin școlile și liceele din Timișoara și împrejurimi. Prezentăm robotul și le arătăm elevilor cum arată un sezon FTC.', location: 'Timișoara' },
  { date: '09.03.2026', name: 'Innovate Together', description: 'O serie de întâlniri pornită alături de echipa Brickbot din Focșani, în care discutăm cu alte echipe despre FTC, organizare și ideile sezonului.', location: 'Online, Timișoara–Focșani' },
  { date: '21.04.2026', name: 'Ziua Creativității și Inovației', description: 'Elevii de clasa a IV-a din liceul nostru au programat primii lor roboți, ghidați de noi.', location: 'Liceul Teoretic „Grigore Moisil”' },
  { date: '29.04.2026', name: 'Hope for Tomorrow', description: 'Eveniment caritabil organizat cu Banca pentru Alimente Timișoara: 9 activități interactive pentru copii.', location: 'Casa Tineretului, Timișoara' },
  { date: '16.05.2026', name: 'RoboBricks', description: 'O zi de tehnologie în mall, alături de Interact Club Timișoara, pentru o cauză caritabilă: îngrijirea pacienților în stare terminală.', location: 'Iulius Mall, Timișoara' },
  { date: '01.06.2026', name: 'Șotron cu roboți', description: 'De 1 Iunie am transformat un joc clasic într-o primă lecție de robotică pentru cei mici.', location: 'Nest Parcul Copiilor, Timișoara' },
  { date: '06.06.2026', name: 'Magic of FTC', description: 'Spațiu interactiv construit cu echipele de robotică din Timișoara, cu meciuri demonstrative FTC pentru public.', location: 'Iulius Mall, Timișoara' },
];

const SEASONS = [
  { src: '/2018.JPG', years: '2017–2018', game: 'Relic Recovery' },
  { src: '/2019.JPG', years: '2018–2019', game: 'Rover Ruckus' },
  { src: '/2020.JPG', years: '2019–2020', game: 'Skystone' },
  { src: '/2021.JPG', years: '2020–2021', game: 'Ultimate Goal' },
  { src: '/2022.JPG', years: '2021–2022', game: 'Freight Frenzy' },
  { src: '/2023.JPG', years: '2022–2023', game: 'Powerplay' },
  { src: '/2024.JPG', years: '2023–2024', game: 'Centerstage' },
  { src: '/2025.JPG', years: '2024–2025', game: 'Into the Deep' },
  { src: '/2026.JPEG', years: '2025–2026', game: 'DECODE' },
];

export default function ActivitatePage() {
  return (
    <>
      <section className="wrap page-head">
        <h1>Activitate</h1>
        <p className="lead">
          Robotica nu se oprește la competiții. Ducem STEM-ul în comunitate prin caravane, ateliere și
          evenimente caritabile.
        </p>
        {/* [Înlocuiește cu cifrele reale ale echipei] */}
        <p className="impact-line">
          Până acum: <b>500+</b> copii, <b>15+</b> școli vizitate și <b>20+</b> evenimente de outreach.
        </p>
      </section>

      <section className="wrap" style={{ paddingBottom: 'var(--section-y)' }} aria-labelledby="ev-title">
        <h2 id="ev-title" className="sr-only">Evenimente 2026</h2>
        <ol className="events">
          {EVENTS.map((e) => (
            <li key={e.name} className="event">
              <span className="date">{e.date}</span>
              <div>
                <h3>{e.name}</h3>
                <p>{e.description}</p>
              </div>
              <p className="where">{e.location}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="block block-dark" id="galerie">
        <div className="wrap">
          <h2 className="title">Nouă sezoane</h2>
          <p className="lead">Câte o fotografie din fiecare sezon FTC în care am concurat.</p>

          <ol className="seasons">
            {SEASONS.map((s) => (
              <li key={s.years} className="season">
                <figure>
                  <div className="ph">
                    <Image
                      src={s.src}
                      alt={`Echipa WizzTech în sezonul ${s.game}, ${s.years}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <figcaption>
                    <span className="game">{s.game}</span>
                    <span className="yr">{s.years}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
