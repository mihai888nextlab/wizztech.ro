export const metadata = { title: 'WizzTech | Echipă' };

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
    <section id="members" className="section" data-num="02">
      <p className="section-label">02 — People</p>
      <h2 className="section-title">Echipa Noastră</h2>
      <div className="section-divider"></div>
      <div className="grid-container">
        {members.map((m) => (
          <div key={m.name} className="member-card">
            <img src={m.img} className="member-img" alt={m.name} />
            <h4>{m.name}</h4>
            <p className="member-label">{m.role}</p>
          </div>
        ))}
      </div>

      <p className="section-label" style={{ marginTop: '5rem' }}>02b — Mentors</p>
      <h2 className="section-title">Mentori</h2>
      <div className="section-divider"></div>
      <div className="grid-container" style={{ gridTemplateColumns: 'repeat(3, 1fr)', maxWidth: '600px' }}>
        {mentors.map((m) => (
          <div key={m.name} className="member-card">
            <img src={m.img} className="member-img" alt={m.name} />
            <h4>{m.name}</h4>
            <p className="mentor-label">{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
