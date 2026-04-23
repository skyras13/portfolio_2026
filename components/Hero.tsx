"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

function ParticleNetwork({ density = 85 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let particles: Particle[] = [];

    const getAccentHue = () => {
      const hue = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--accent-h")
      );
      return Number.isFinite(hue) ? hue : 200;
    };

    const initParticles = () => {
      const count = Math.max(20, Math.floor((w * h) / (18000 - density * 150)));
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 1.6 + 0.4,
        });
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };
    const onLeave = () => {
      mouseRef.current.active = false;
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const hue = getAccentHue();
      const maxDist = 130;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (const p of particles) {
        if (mouseRef.current.active) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const d2 = dx * dx + dy * dy;
          if (d2 < 130 * 130 && d2 > 0) {
            const d = Math.sqrt(d2);
            const f = (1 - d / 130) * 0.6;
            p.vx += (dx / d) * f * 0.15;
            p.vy += (dy / d) * f * 0.15;
          }
        }
        p.vx *= 0.985;
        p.vy *= 0.985;
        p.vx += (Math.random() - 0.5) * 0.01;
        p.vy += (Math.random() - 0.5) * 0.01;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;
      }

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < maxDist * maxDist) {
            const d = Math.sqrt(d2);
            const alpha = (1 - d / maxDist) * 0.28;
            let lh = 220;
            let ls = 40;
            const ll = 70;
            if (mouseRef.current.active) {
              const cx = (a.x + b.x) / 2;
              const cy = (a.y + b.y) / 2;
              const md = Math.hypot(cx - mx, cy - my);
              if (md < 180) {
                const t = 1 - md / 180;
                lh = 220 - (220 - hue) * t;
                ls = 40 + 40 * t;
              }
            }
            ctx.strokeStyle = `hsla(${lh}, ${ls}%, ${ll}%, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        const md = mouseRef.current.active ? Math.hypot(p.x - mx, p.y - my) : 999;
        const near = md < 150;
        if (near) {
          const t = 1 - md / 150;
          ctx.fillStyle = `hsla(${hue}, 90%, 65%, ${0.6 + t * 0.4})`;
          ctx.shadowBlur = 10 * t;
          ctx.shadowColor = `hsla(${hue}, 90%, 60%, ${t})`;
        } else {
          ctx.fillStyle = "hsla(220, 30%, 75%, 0.45)";
          ctx.shadowBlur = 0;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [density]);

  return <canvas ref={canvasRef} className="hero-canvas" />;
}

export function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const d = new Date();
      const t = d.toLocaleTimeString("en-US", {
        timeZone: "America/Denver",
        hour12: false,
      });
      setTime(t + " MST");
    };
    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <section className="hero" id="home">
      <ParticleNetwork density={85} />
      <div className="container hero-content">
        <div className="hero-tag">
          <span className="live-dot"></span>
          <span>Available for select AI + infra work · Q2 2026</span>
        </div>
        <h1>
          Software built
          <br />
          <span className="accent">across</span>{" "}
          <span className="stroke">industries</span>,<br />
          one system at a time.
        </h1>
        <p className="hero-sub">
          I&apos;m <strong>Skyler Rasmussen</strong> — a software developer who&apos;s shipped in{" "}
          <strong>hospitality tech</strong>, <strong>ed-tech</strong>, <strong>ag-tech</strong>,
          and now <strong>networking + AI infrastructure</strong>. Lead dev at{" "}
          <strong>Dorado Software</strong> by day, co-founder of <strong>skdaddle</strong> by
          night — a small SaaS studio behind <strong>Tether</strong> and{" "}
          <strong>Clear Report</strong>.
        </p>
        <div className="hero-ctas">
          <Link className="btn btn-primary" href="/projects">
            See what I&apos;m building
            <span className="arrow">→</span>
          </Link>
          <Link className="btn btn-ghost" href="/contact">
            Get in touch
          </Link>
        </div>
      </div>
      <div className="container hero-meta">
        <div className="loc">
          <span className="crosshair"></span>
          <span>Saratoga Springs, UT · 40.3°N 111.9°W</span>
        </div>
        <div className="hero-scroll">
          <span>{time}</span>
          <span className="line"></span>
        </div>
      </div>
    </section>
  );
}
