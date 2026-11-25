import Image from 'next/image';
import Link from 'next/link';

export const metadata = { title: 'Acasă' };

/* [Completează specificațiile reale ale robotului] */
const ROBOT_SPECS = [
  { key: 'Tracțiune', value: 'Mecanum' },
  { key: 'Greutate', value: '[__ kg]' },
  { key: 'Dimensiuni', value: '[__ × __ × __ cm]' },
  { key: 'Subsisteme', value: '[ex. intake, lift, launcher]' },
  { key: 'Programare', value: 'Java' },
  { key: 'Controller', value: 'REV Control Hub' },
];

const TIMELINE = [
  { when: '2017', what: 'Începutul', text: 'Echipa prinde viață din pasiunea pentru științele exacte.' },
  { when: '2019', what: 'Prima etapă națională', text: 'Ne calificăm la etapa națională FTC, un moment important pentru echipă.' },
  { when: '2020–2022', what: 'Pandemia', text: 'Găsim soluții să rămânem activi și să nu pierdem echipa.' },
  { when: 'Azi', what: 'Sezonul DECODE', text: 'Îmbunătățim robotul și ridicăm nivelul în fiecare sezon.' },
];

const AWARDS = [
  {
    img: '/motivate2025.PNG',
    alt: 'Diploma Motivate Award, locul III, 2025',
    meta: 'Locul III, 2025',
    title: 'Motivate Award',
    desc: 'Pentru recrutare, outreach și impactul pe care îl avem în comunitatea STEM prin promovarea valorilor FIRST.',
  },
  {
    img: '/specialawardaeroport.PNG',
    alt: 'Special Award primit la Expoziția Traian Vuia',
    meta: 'Special Award',
    title: 'Expoziția „Traian Vuia”',
    desc: 'Distincție oferită la Expoziția Internațională de Invenții și Inovații „Traian Vuia” pentru soluțiile implementate pe robotul nostru.',
  },
  {
    img: '/motivate2019.PNG',
    alt: 'Diploma Motivate Award, locul III, 2019',
    meta: 'Locul III, 2019',
    title: 'Motivate Award',
    desc: 'Primul nostru Motivate Award, pentru munca de recrutare și pentru felul în care am dus robotica în comunitate.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-text">
            <h1 className="hero-name">WizzTech</h1>
            {/* [Personalizează sloganul dacă vrei] */}
            <p className="hero-tagline">Transformăm pasiunea în tehnologie și ideile în inovație.</p>
            <p className="hero-sub">
              Suntem echipa de robotică FIRST Tech Challenge a Liceului Teoretic „Grigore Moisil” din
              Timișoara. Proiectăm, construim și programăm un robot nou în fiecare sezon, din 2017.
            </p>
            <div className="hero-actions">
              <Link href="/echipa" className="btn">Cunoaște echipa</Link>
              <Link href="/sponsori" className="btn btn-ghost">Devino sponsor</Link>
            </div>
          </div>

          <div className="hero-media">
            <div className="hero-frame">
              <Image
                src="/2026.JPEG"
                alt="Echipa WizzTech la standul din sezonul DECODE, lângă robot și diploma Motivate Award"
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <p className="pit-sign" aria-label="Regiunea RO048, echipa WizzTech din Timișoara, numărul 19094">
              <span className="ps-region">RO_048</span>
              <br />
              <span className="ps-team">WizzTech</span>{' '}
              <span className="ps-city">Timișoara</span>
              <span className="ps-number">19094</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── DESPRE ── */}
      <section className="block" id="despre">
        <div className="wrap split">
          <h2 className="title">Cine suntem</h2>
          <div>
            {/* [Personalizează textele despre echipă] */}
            <p className="lead">
              19 elevi de liceu și 3 mentori care construiesc roboți, scriu cod, strâng sponsorizări și
              duc robotica în școlile din Timișoara.
            </p>
            <ul className="facts">
              <li>
                <h3>Ce este FTC</h3>
                <p>
                  <strong>FIRST Tech Challenge</strong> este o competiție internațională de robotică pentru
                  liceeni. În fiecare sezon primim o provocare nouă și avem câteva luni să proiectăm,
                  construim și programăm un robot care să o rezolve pe teren.
                </p>
              </li>
              <li>
                <h3>Ce facem în afara competiției</h3>
                <p>
                  Mergem în școli, organizăm ateliere pentru copii și evenimente caritabile. Vrem ca mai
                  mulți tineri să descopere tehnologia și să creadă că pot construi ceva al lor.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── ROBOTUL ── */}
      <section className="block block-dark" id="robot">
        <div className="wrap robot">
          <figure className="robot-photo-wrap" style={{ margin: 0 }}>
            {/* [Înlocuiește cu o poză dedicată a robotului, pe fundal curat] */}
            <div className="robot-photo">
              <Image
                src="/robot-2026.jpg"
                alt="Robotul WizzTech din sezonul DECODE: cadru mov, două intake-uri cu role portocalii, roți mecanum"
                width={1100}
                height={1071}
                sizes="(max-width: 900px) 100vw, 58vw"
              />
            </div>
          </figure>

          <div>
            <p className="robot-season">Sezonul DECODE, 2025–2026</p>
            <h2 className="title">Robotul nostru</h2>
            <p>Construit și programat de departamentele de mecanică și programare, de la schiță la teren.</p>
            <dl className="specs">
              {ROBOT_SPECS.map((s) => (
                <div key={s.key}>
                  <dt>{s.key}</dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── ISTORIE ── */}
      <section className="block" id="istorie">
        <div className="wrap split">
          <div className="prose">
            <h2 className="title">Istoria echipei</h2>
            <p>
              Povestea <strong>WizzTech</strong> a început în 2017, din dorința de a aplica practic ce
              învățam la fizică și informatică. Ce a pornit ca un proiect mic a ajuns astăzi o echipă
              de 19 elevi.
            </p>
            <p>
              Ne-am calificat la etapa națională încă din primul sezon și am rămas acolo prin
              calificări succesive. Pandemia ne-a pus la încercare, dar a pregătit noile generații
              să preia ștafeta.
            </p>
          </div>

          <ol className="timeline">
            {TIMELINE.map((t) => (
              <li key={t.when}>
                <span className="when">{t.when}</span>
                <p className="what">{t.what}</p>
                <p>{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── PREMII ── */}
      <section className="block block-white" id="premii">
        <div className="wrap">
          <h2 className="title">Premii</h2>
          <p className="lead">Distincțiile primite la competițiile FTC și la expoziții de inovație.</p>

          <ul className="awards">
            {AWARDS.map((a) => (
              <li key={a.img} className="award">
                <div className="award-img">
                  <Image src={a.img} alt={a.alt} width={840} height={594} sizes="(max-width: 760px) 22rem, 34vw" />
                </div>
                <div>
                  <span className="award-meta">{a.meta}</span>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
