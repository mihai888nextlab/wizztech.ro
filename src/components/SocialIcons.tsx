/**
 * Brand marks as inline SVG — replaces the five external flaticon PNGs.
 * Filled glyphs (brand tier); UI/feature icons stay stroked. One viewBox,
 * one sizing contract, currentColor everywhere so they inherit hover states.
 */
type IconProps = { className?: string };

const base = {
  viewBox: '0 0 24 24',
  fill: 'currentColor',
  'aria-hidden': true as const,
  focusable: 'false' as const,
};

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg {...base} fill="none" className={className}>
      <rect x="2.6" y="2.6" width="18.8" height="18.8" rx="5.4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-1.85-2.48V9.78a5.62 5.62 0 1 0 4.94 5.58V8.72a7.12 7.12 0 0 0 4.16 1.33V6.96a4.27 4.27 0 0 1-3.1-1.14Z" />
    </svg>
  );
}

export function YouTubeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M21.58 7.19a2.51 2.51 0 0 0-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42a2.51 2.51 0 0 0-1.77 1.77A26.2 26.2 0 0 0 2 12a26.2 26.2 0 0 0 .42 4.81 2.51 2.51 0 0 0 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42a2.51 2.51 0 0 0 1.77-1.77A26.2 26.2 0 0 0 22 12a26.2 26.2 0 0 0-.42-4.81ZM10 15.02V8.98L15.2 12 10 15.02Z" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45Z" />
    </svg>
  );
}

/** Single source of truth for the team's social presence. */
export const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com/wizztech.tm',                Icon: InstagramIcon, handle: 'wizztech.tm' },
  { label: 'Facebook',  href: 'https://facebook.com/wizztechtm/',                 Icon: FacebookIcon,  handle: 'WizzTech' },
  { label: 'TikTok',    href: 'https://tiktok.com/@wizztech_tm',                  Icon: TikTokIcon,    handle: 'wizztech_tm' },
  { label: 'YouTube',   href: 'https://youtube.com/@wizztech2623',                Icon: YouTubeIcon,   handle: '@wizztech2623' },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/company/wizztechtm/',     Icon: LinkedInIcon,  handle: 'WizzTech' },
] as const;
