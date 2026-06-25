'use client';
import { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    class Particle {
      x = 0; y = 0; r = 0; speed = 0; dx = 0; opacity = 0; color = '';
      constructor() { this.reset(true); }
      reset(initial: boolean) {
        this.x = Math.random() * W;
        this.y = initial ? Math.random() * H : H + 10;
        this.r = Math.random() * 1.5 + 0.4;
        this.speed = Math.random() * 0.4 + 0.1;
        this.dx = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.12;
        // Mix violet (~275) and sky-blue (~200) particles to match the brand palette
        const roll = Math.random();
        const hue = roll > 0.62 ? 200 : roll > 0.3 ? 275 : 260;
        this.color = `hsla(${hue}, 100%, 72%, ${this.opacity})`;
      }
      update() { this.y -= this.speed; this.x += this.dx; if (this.y < -5) this.reset(false); }
      draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); ctx.fillStyle = this.color; ctx.fill(); }
    }

    const particles = Array.from({ length: 40 }, () => new Particle());
    let raf: number;

    function animate() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => { p.update(); p.draw(); });
      raf = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} id="particleCanvas" />;
}
