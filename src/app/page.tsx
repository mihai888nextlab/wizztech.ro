import Link from 'next/link';

export const metadata = { title: 'WizzTech | Acasă' };

export default function HomePage() {
  return (
    <section id="home" className="hero section">
      <div className="hero-content">
        <div className="hero-text-side">
          <span className="hero-eyebrow">RO048 · #19094 · FTC Robotics</span>
          <img src="/wizztech-logo-text-2023-2024.png" alt="WizzTech" className="hero-wordmark" />
          <p>
            Echipa de robotică a Liceului Teoretic &quot;Grigore Moisil&quot;, Timișoara.<br />
            We make magic happen.
          </p>
          <Link href="/istorie" className="read-more-btn">Descoperă povestea</Link>
        </div>
        <div className="hero-logo-side">
          <img src="/wizztech-logo2023-2024.png" alt="WizzTech Owl Logo" className="main-hero-logo" />
        </div>
      </div>
    </section>
  );
}
