'use client';
import { useEffect, useRef } from 'react';

/**
 * Ambient drifting motes in the brand palette.
 *
 * Purely decorative, so it bows out completely when the visitor asks for
 * reduced motion, and it stops animating while the tab is hidden rather than
 * burning frames in the background.
 */
export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let raf = 0;

    // Render at device resolution so the dots stay crisp, capped to keep the
    // per-frame cost sane on high-DPI phones.
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    type Mote = { x: number; y: number; r: number; speed: number; drift: number; color: string };

    const spawn = (initial: boolean): Mote => {
      const opacity = Math.random() * 0.45 + 0.12;
      const roll = Math.random();
      // violet ~275°, sky ~200°, indigo ~260° — mirrors the CSS palette
      const hue = roll > 0.62 ? 200 : roll > 0.3 ? 275 : 260;
      return {
        x: Math.random() * width,
        y: initial ? Math.random() * height : height + 10,
        r: Math.random() * 1.5 + 0.4,
        speed: Math.random() * 0.4 + 0.1,
        drift: (Math.random() - 0.5) * 0.3,
        color: `hsla(${hue}, 100%, 72%, ${opacity})`,
      };
    };

    // Scale the count to the viewport so phones do less work than desktops
    const count = Math.round(Math.min(52, Math.max(18, width / 26)));
    let motes = Array.from({ length: count }, () => spawn(true));

    const onResize = () => {
      resize();
      motes = motes.map((m) => (m.x > width || m.y > height ? spawn(true) : m));
    };

    const frame = () => {
      ctx.clearRect(0, 0, width, height);
      for (const m of motes) {
        m.y -= m.speed;
        m.x += m.drift;
        if (m.y < -5) Object.assign(m, spawn(false));
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx.fillStyle = m.color;
        ctx.fill();
      }
      raf = requestAnimationFrame(frame);
    };

    const start = () => { if (!raf) raf = requestAnimationFrame(frame); };
    const stop = () => { cancelAnimationFrame(raf); raf = 0; };

    const onVisibility = () => (document.hidden ? stop() : start());

    start();
    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      stop();
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} id="particleCanvas" aria-hidden="true" />;
}
