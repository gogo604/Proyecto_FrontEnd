import { useEffect, useRef } from 'react';
import './NebulaBackground.css';

/**
 * Fondo dinámico: partículas flotantes en <canvas> + líneas holográficas en CSS
 * + gradiente de fondo que cicla lentamente entre azul y morado (definido en CSS).
 * Usa requestAnimationFrame; se pausa si prefers-reduced-motion está activo.
 */
export function NebulaBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const PARTICLE_COUNT = Math.min(90, Math.floor((width * height) / 18000));
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      alpha: Math.random() * 0.5 + 0.2
    }));

    function resize() {
      width = canvas!.width = window.innerWidth;
      height = canvas!.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);

    let frameId: number;
    function draw() {
      ctx!.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(0, 212, 255, ${p.alpha})`;
        ctx!.shadowColor = 'rgba(123, 97, 255, 0.8)';
        ctx!.shadowBlur = 6;
        ctx!.fill();
      }
      if (!reduceMotion) frameId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="nebula-bg" aria-hidden="true">
      <canvas ref={canvasRef} className="nebula-canvas" />
      <div className="nebula-lines">
        <span className="hline hline-1" />
        <span className="hline hline-2" />
        <span className="hline hline-3" />
      </div>
      <div className="nebula-glow glow-a" />
      <div className="nebula-glow glow-b" />
    </div>
  );
}
