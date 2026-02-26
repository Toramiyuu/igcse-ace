"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import AppMockup from "./AppMockup";
import FeatureSections from "./FeatureSections";

export default function LandingPage() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    document
      .querySelectorAll("[data-fade]")
      .forEach((el) => observer.observe(el));

    const handleScroll = () => {
      if (!navRef.current) return;
      const scrolled = window.scrollY > 12;
      navRef.current.style.background = scrolled
        ? "rgba(8,8,13,0.92)"
        : "rgba(8,8,13,0)";
      navRef.current.style.borderBottomColor = scrolled
        ? "rgba(255,255,255,0.06)"
        : "transparent";
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        background: "var(--bg)",
        color: "var(--text)",
        minHeight: "100vh",
        fontFamily: "var(--font-inter), var(--font-dm-sans), sans-serif",
      }}
    >
      <style>{`
        [data-fade] {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        [data-fade][data-delay="60"]  { transition-delay: 60ms; }
        [data-fade][data-delay="80"]  { transition-delay: 80ms; }
        [data-fade][data-delay="100"] { transition-delay: 100ms; }
        [data-fade][data-delay="120"] { transition-delay: 120ms; }
        [data-fade][data-delay="160"] { transition-delay: 160ms; }
        [data-fade][data-delay="180"] { transition-delay: 180ms; }
        [data-fade][data-delay="240"] { transition-delay: 240ms; }
        [data-fade][data-delay="300"] { transition-delay: 300ms; }

        .fcard { transition: transform 0.2s ease, border-color 0.2s ease; }
        .fcard:hover { transform: translateY(-2px); border-color: rgba(255,255,255,0.12) !important; }

        .ctabtn {
          background: var(--accent);
          color: white;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .ctabtn:hover { background: #6a59d8; transform: translateY(-1px); }

        .stag { transition: border-color 0.15s ease, background 0.15s ease; }
        .stag:hover { border-color: rgba(255,255,255,0.12) !important; background: rgba(255,255,255,0.05) !important; }

        .navlink { transition: color 0.15s ease; }
        .navlink:hover { color: white !important; }

        @media (max-width: 768px) {
          .hero-heading { font-size: clamp(32px, 8vw, 56px) !important; }
          .features-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
          .features-grid-2 { grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important; }
          .stats-wrap { gap: 16px !important; }
          .stat-card { min-width: 130px !important; padding: 20px 24px !important; }
          .stat-num { font-size: 36px !important; }
        }

        @media (max-width: 480px) {
          .hero-heading { font-size: 30px !important; }
          .stats-wrap { flex-direction: column !important; align-items: stretch !important; }
          .stat-card { width: 100% !important; min-width: unset !important; }
          .subject-tags { gap: 8px 10px !important; }
          .features-grid-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Nav */}
      <nav
        ref={navRef}
        className="flex items-center justify-between px-6 py-4 sticky top-0 z-50 backdrop-blur-md transition-all duration-300"
        style={{
          background: "rgba(8,8,13,0)",
          borderBottom: "1px solid transparent",
        }}
      >
        <div
          className="font-bold text-[18px] tracking-tight"
          style={{ fontFamily: "var(--font-syne), sans-serif" }}
        >
          IGCSE <span style={{ color: "var(--accent)" }}>Ace</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="navlink text-[14px] font-medium no-underline"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Features
          </a>
          <a
            href="#subjects"
            className="navlink text-[14px] font-medium no-underline"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Subjects
          </a>
        </div>
        <Link
          href="/login"
          className="ctabtn flex items-center gap-1.5 font-semibold px-5 py-2.5 rounded-[8px] no-underline text-[14px]"
        >
          Sign up free <ArrowRight size={14} />
        </Link>
      </nav>

      {/* Hero */}
      <section
        className="relative text-center overflow-hidden"
        style={{
          padding: "120px 24px",
          background:
            "radial-gradient(ellipse 80% 40% at 50% -5%, rgba(124,106,240,0.18) 0%, transparent 70%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, black, transparent)",
          }}
        />
        <div className="relative z-10 mx-auto" style={{ maxWidth: "800px" }}>
          <div
            data-fade
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold mb-8 tracking-[0.08em] uppercase"
            style={{
              background: "rgba(124,106,240,0.1)",
              border: "1px solid rgba(124,106,240,0.22)",
              color: "var(--accent)",
            }}
          >
            <Sparkles size={10} />
            Cambridge CAIE · May/June 2026
          </div>
          <h1
            data-fade
            data-delay="80"
            className="hero-heading font-extrabold leading-[1.1] mb-6"
            style={{
              fontSize: "clamp(40px, 5.5vw, 68px)",
              letterSpacing: "-0.025em",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 800,
              textAlign: "center",
            }}
          >
            The revision platform
            <br />
            <span style={{ color: "var(--accent)" }}>built for IGCSE</span>
          </h1>
          <p
            data-fade
            data-delay="160"
            className="text-[18px] leading-[1.75] mb-12 mx-auto"
            style={{ color: "rgba(232,232,240,0.6)", maxWidth: "600px" }}
          >
            Flashcards, mock exams, smart timetables, zone-aware exam dates —
            purpose-built for Cambridge CAIE. Free, always.
          </p>
          <div data-fade data-delay="240">
            <Link
              href="/login"
              className="ctabtn inline-flex items-center gap-2 font-bold px-8 py-4 rounded-[12px] no-underline text-[16px]"
            >
              Get started — it&apos;s free
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <AppMockup />
      <FeatureSections />
    </div>
  );
}
