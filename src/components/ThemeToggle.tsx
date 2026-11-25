'use client';
import { useSyncExternalStore } from 'react';

/**
 * Switches between the light ("frost") and night themes by setting
 * `data-theme` on <html>. The choice is saved in localStorage; the inline
 * script in layout.tsx applies it before first paint so there is no flash.
 */
const STORAGE_KEY = 'wizztech-theme';

function subscribe(onChange: () => void) {
  const mo = new MutationObserver(onChange);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  return () => mo.disconnect();
}
const getSnapshot = () => document.documentElement.dataset.theme === 'dark';
const getServerSnapshot = () => false;

export default function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const root = document.documentElement;
    const next = dark ? 'light' : 'dark';
    const apply = () => {
      root.dataset.theme = next;
      try { localStorage.setItem(STORAGE_KEY, next); } catch { /* private mode */ }
    };

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || typeof document.startViewTransition !== 'function') {
      apply();
      return;
    }

    // The new theme unfolds from the button as a growing diamond — the same
    // facet used for the timeline markers and the package-table checks.
    const r = e.currentTarget.getBoundingClientRect();
    const x = r.left + r.width / 2;
    const y = r.top + r.height / 2;
    const w = window.innerWidth;
    const h = window.innerHeight;
    // A diamond covers the viewport once its half-diagonal reaches the
    // farthest corner in Manhattan distance.
    const reach = Math.max(x + y, w - x + y, x + h - y, w - x + h - y);
    const diamond = (d: number) =>
      `polygon(${x}px ${y - d}px, ${x + d}px ${y}px, ${x}px ${y + d}px, ${x - d}px ${y}px)`;

    root.classList.add('theme-transition');
    const transition = document.startViewTransition(apply);
    transition.ready.then(() => {
      root.animate(
        { clipPath: [diamond(0), diamond(reach)] },
        {
          duration: 700,
          easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
          pseudoElement: '::view-transition-new(root)',
        },
      );
    });
    transition.finished.finally(() => root.classList.remove('theme-transition'));
  };

  return (
    <button type="button" className="theme-toggle" aria-pressed={dark} aria-label="Temă închisă" onClick={toggle}>
      {dark ? (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" focusable="false">
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" focusable="false">
          <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
        </svg>
      )}
    </button>
  );
}
