import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';

export const metadata: Metadata = {
  title: 'WizzTech | Echipa de robotică',
  description: 'Echipa de robotică a Liceului Teoretic "Grigore Moisil", Timișoara. RO048 | #19094',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;700&family=Orbitron:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ParticleCanvas />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
