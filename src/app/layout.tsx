import type { Metadata, Viewport } from 'next';
import { Anybody, Atkinson_Hyperlegible_Next } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/**
 * Both faces include `latin-ext` — required for Romanian ă / ș / ț.
 * Anybody is loaded with its width axis: headings are set stretched (wdth 120–150),
 * dates and data narrow (wdth 80–85). Atkinson Hyperlegible Next carries body text.
 */
const display = Anybody({
  subsets: ['latin', 'latin-ext'],
  axes: ['wdth'],
  variable: '--font-anybody',
  display: 'swap',
});

const body = Atkinson_Hyperlegible_Next({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-atkinson',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'WizzTech | Echipa de robotică FTC din Timișoara',
    template: '%s | WizzTech',
  },
  description:
    'WizzTech este echipa de robotică FIRST Tech Challenge a Liceului Teoretic „Grigore Moisil” din Timișoara. RO048, #19094.',
  applicationName: 'WizzTech',
  keywords: ['WizzTech', 'FTC', 'FIRST Tech Challenge', 'robotică', 'Timișoara', 'Grigore Moisil', 'STEM'],
  openGraph: {
    title: 'WizzTech | Echipa de robotică FTC din Timișoara',
    description:
      'Echipa de robotică a Liceului Teoretic „Grigore Moisil” din Timișoara. RO048, #19094.',
    locale: 'ro_RO',
    type: 'website',
    siteName: 'WizzTech',
  },
};

export const viewport: Viewport = {
  themeColor: '#e9f0f3',
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="skip-link">Sari la conținut</a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
