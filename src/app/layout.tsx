import type { Metadata, Viewport } from 'next';
import { Chakra_Petch, Oxanium } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import ScrollReveal from '@/components/ScrollReveal';

/**
 * Both faces include `latin-ext` — required for Romanian ă / î / â / ș / ț.
 * (Orbitron, used previously, ships `latin` only and silently fell back to a
 * system font on every diacritic, e.g. "Stănescu", "Mureșan", "Cătăneț".)
 * Oxanium keeps the geometric sci-fi character the team's logo sets up.
 */
const display = Oxanium({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-orbitron',
  display: 'swap',
});

const body = Chakra_Petch({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '700'],
  variable: '--font-chakra',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'WizzTech | Echipa de robotică',
    template: '%s | WizzTech',
  },
  description:
    'WizzTech — echipa de robotică FIRST Tech Challenge a Liceului Teoretic "Grigore Moisil", Timișoara. RO048 · #19094.',
  applicationName: 'WizzTech',
  keywords: ['WizzTech', 'FTC', 'FIRST Tech Challenge', 'robotică', 'Timișoara', 'Grigore Moisil', 'STEM'],
  openGraph: {
    title: 'WizzTech | Echipa de robotică',
    description:
      'Echipa de robotică a Liceului Teoretic "Grigore Moisil", Timișoara. RO048 · #19094.',
    locale: 'ro_RO',
    type: 'website',
    siteName: 'WizzTech',
  },
};

export const viewport: Viewport = {
  themeColor: '#100c28',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="skip-link">Sari la conținut</a>
        <ParticleCanvas />
        <ScrollReveal />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
