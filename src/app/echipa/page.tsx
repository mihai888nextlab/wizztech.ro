import Image from 'next/image';
import Link from 'next/link';

export const metadata = { title: 'Echipa' };

type Person = { img: string; name: string; role: string; lead?: boolean };

/** Members are grouped by department so the page shows how the team works. */
const GROUPS: { id: string; name: string; desc: string; people: Person[] }[] = [
  {
    id: 'coordonare',
    name: 'Coordonare',
    desc: 'Ține legătura dintre departamente, stabilește prioritățile sezonului și reprezintă echipa.',
    people: [{ img: '/mihai.png', name: 'Gorunescu Mihai', role: 'Team Leader', lead: true }],
  },
  {
    id: 'mecanica',
    name: 'Mecanică',
    desc: 'Proiectează și construiește robotul, de la șasiu la sistemele de prindere și mișcare.',
    people: [
      { img: '/albert.jpg', name: 'Molocea Albert', role: 'Lider mecanică', lead: true },
      { img: '/daria.jpg', name: 'Cătăneț Daria', role: 'Mecanică' },
      { img: '/razvi.jpg', name: 'Bujniță Răzvan', role: 'Mecanică' },
      { img: '/teo calde.jpg', name: 'Ionici-Rădoi Teodor', role: 'Mecanică' },
      { img: '/onela.jpg', name: 'Onel Andreea', role: 'Mecanică' },
      { img: '/deyutzuu.jpg', name: 'Gorunescu Andrei', role: 'Mecanică' },
      { img: '/lucia.png', name: 'Mureșan Lucia', role: 'Mecanică' },
      { img: '/mal.png', name: 'Boldea Malina', role: 'Mecanică' },
      { img: '/fane.png', name: 'Booveanu Ștefan', role: 'Mecanică' },
    ],
  },
  {
    id: 'programare',
    name: 'Programare',
    desc: 'Scrie în Java codul pentru perioada autonomă, citirea senzorilor și controlul din meci.',
    people: [
      { img: '/vacariuc.jpg', name: 'Văcăriuc Andrei', role: 'Lider programare', lead: true },
      { img: '/barzuca.jpg', name: 'Barzuca-Radu Adrian', role: 'Programare' },
      { img: '/ardelian.png', name: 'Ardelian Ștefan', role: 'Programare' },
    ],
  },
  {
    id: 'media',
    name: 'Media',
    desc: 'Se ocupă de social media, design grafic, foto și video, și de relația cu comunitatea.',
    people: [
      { img: '/georgi.png', name: 'Stănescu Georgiana', role: 'Lider media', lead: true },
      { img: '/andreea.jpg', name: 'Buruian Andreea', role: 'Media' },
      { img: '/chis.png', name: 'Chiș Maria', role: 'Media' },
    ],
  },
  {
    id: 'financiar',
    name: 'Financiar',
    desc: 'Gestionează bugetul, sponsorizările și logistica deplasărilor la competiții.',
    people: [
      { img: '/cristi.png', name: 'Stiegelbauer Cristian', role: 'Lider financiar', lead: true },
      { img: '/jebe.png', name: 'Jebelean Andrei', role: 'Financiar' },
    ],
  },
  {
    id: 'mentori',
    name: 'Mentori',
    desc: 'Profesori și foști membri care ne ghidează tehnic și organizatoric.',
    people: [
      { img: '/robi.png', name: 'Rădoi Robert', role: 'Mentor coordonator', lead: true },
      { img: '/tomici.png', name: 'Tomici Vlad', role: 'Mentor tehnic' },
      { img: '/verigu.png', name: 'Hoescu Răzvan', role: 'Mentor tehnic' },
    ],
  },
];

export default function EchipaPage() {
  return (
    <>
      <section className="wrap page-head">
        <h1>Echipa</h1>
        <p className="lead">
          19 elevi împărțiți în patru departamente, plus trei mentori. Fiecare departament are un lider
          care răspunde de partea lui de robot sau de proiect.
        </p>
      </section>

      <section className="wrap" style={{ paddingBottom: 'var(--section-y)' }} aria-label="Departamente și membri">
        {GROUPS.map((g) => (
          <article key={g.id} id={g.id} className="dept">
            <div>
              <h2>{g.name}</h2>
              <p className="dept-desc">{g.desc}</p>
            </div>
            <ul className="people">
              {g.people.map((p) => (
                <li key={p.name} className={p.lead ? 'person lead' : 'person'}>
                  <Image src={p.img} alt="" width={240} height={240} sizes="160px" />
                  <p className="name">{p.name}</p>
                  <p className="role">{p.role}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      {/* [Personalizează mesajul de recrutare: perioadă, condiții, cum se aplică] */}
      <section className="block block-dark">
        <div className="wrap recruit">
          <div>
            <h2 className="title">Vrei să intri în echipă?</h2>
            <p className="lead">
              Căutăm colegi pasionați de mecanică, programare, media sau organizare. Nu ai nevoie de
              experiență, doar de chef să înveți și să construiești alături de noi.
            </p>
          </div>
          <Link href="/sponsori#contact" className="btn">Scrie-ne</Link>
        </div>
      </section>
    </>
  );
}
