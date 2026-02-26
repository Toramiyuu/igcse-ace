import Link from "next/link";
import {
  Brain,
  Timer,
  CalendarDays,
  ListChecks,
  BarChart2,
  Zap,
  Flame,
  Printer,
  ArrowRight,
  Trophy,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const stats = [
  { value: "21", label: "Subjects" },
  { value: "876+", label: "Flashcards" },
  { value: "5", label: "Exam zones" },
  { value: "100%", label: "Free" },
];

const subjects = [
  { name: "ICT", code: "0417", color: "#60a0f0" },
  { name: "Computer Science", code: "0478", color: "#a070f0" },
  { name: "Business Studies", code: "0450", color: "#50d08f" },
  { name: "English First Language", code: "0500", color: "#f0c040" },
  { name: "English Second Language", code: "0510", color: "#e0b030" },
  { name: "English Literature", code: "0475", color: "#f060a0" },
  { name: "Sciences (Double)", code: "0654", color: "#f06060" },
  { name: "Additional Mathematics", code: "0606", color: "#f09040" },
  { name: "Mathematics Extended", code: "0580", color: "#60d0a0" },
  { name: "Mathematics Core", code: "0580", color: "#40b080" },
  { name: "Global Perspectives", code: "0457", color: "#40d0f0" },
  { name: "Drama", code: "0411", color: "#d070f0" },
  { name: "Design & Technology", code: "0445", color: "#f0a060" },
  { name: "Music", code: "0410", color: "#80a0f0" },
  { name: "Art & Design", code: "0400", color: "#f08080" },
  { name: "Physics", code: "0625", color: "#a070f0" },
  { name: "Chemistry", code: "0620", color: "#50d08f" },
  { name: "Biology", code: "0610", color: "#f0c040" },
  { name: "History", code: "0470", color: "#f060a0" },
  { name: "Geography", code: "0460", color: "#40d0f0" },
  { name: "Economics", code: "0455", color: "#f09040" },
];

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const coreFeatures: Feature[] = [
  {
    icon: Brain,
    title: "876+ Flashcards",
    desc: "Spaced repetition flashcards covering definitions, formulae, and key facts — calibrated to CAIE syllabuses.",
  },
  {
    icon: Timer,
    title: "Mock Exam Mode",
    desc: "20-card timed mock exams with automatic scoring and breakdown by topic type. Simulate exam pressure.",
  },
  {
    icon: CalendarDays,
    title: "Smart Timetable",
    desc: "Grade-adaptive study schedule weighted by your weakest subjects. Six sessions a day, breaks included.",
  },
  {
    icon: ListChecks,
    title: "Topic Checklists",
    desc: "3-state confidence tracking across every syllabus topic. Know exactly what needs work before each paper.",
  },
];

const secondaryFeatures: Feature[] = [
  {
    icon: BarChart2,
    title: "Past Paper Log",
    desc: "Track every past paper attempt with trend sparklines per paper.",
  },
  {
    icon: Zap,
    title: "Exam Day Briefing",
    desc: "Click any exam card for weakest topics, formulae, and strategy.",
  },
  {
    icon: Flame,
    title: "Streak Tracking",
    desc: "Activity heatmap that keeps you consistent through revision season.",
  },
  {
    icon: Printer,
    title: "Print Revision Sheets",
    desc: "One-click printable revision sheet for any subject.",
  },
];

export default function FeatureSections() {
  return (
    <>
      {/* Stats */}
      <section className="px-6 py-14 max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              data-fade
              data-delay={String(i * 60)}
              className="text-center rounded-[14px] py-7 px-4"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="text-[34px] font-extrabold mb-1"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                {stat.value}
              </div>
              <div className="text-[13px]" style={{ color: "var(--muted)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Subjects */}
      <section id="subjects" className="px-6 py-14 max-w-5xl mx-auto">
        <div data-fade className="text-center mb-12">
          <h2
            className="text-[30px] font-bold mb-3"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            {subjects.length} subjects covered
          </h2>
          <p className="text-[15px]" style={{ color: "var(--muted)" }}>
            All major Cambridge CAIE IGCSE syllabuses, May/June 2026
          </p>
        </div>
        <div
          data-fade
          data-delay="100"
          className="flex flex-wrap gap-2.5 justify-center"
        >
          {subjects.map((s) => (
            <div
              key={s.name}
              className="stag flex items-center gap-2.5 rounded-[10px] px-4 py-2.5"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: s.color }}
              />
              <span className="text-[13px] font-semibold">{s.name}</span>
              <span
                className="text-[11px] font-mono"
                style={{ color: "rgba(232,232,240,0.32)" }}
              >
                {s.code}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-14 max-w-5xl mx-auto">
        <div data-fade className="text-center mb-12">
          <div
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold mb-4 uppercase tracking-widest"
            style={{
              background: "rgba(124,106,240,0.08)",
              border: "1px solid rgba(124,106,240,0.15)",
              color: "var(--accent)",
            }}
          >
            Core Tools
          </div>
          <h2
            className="text-[30px] font-bold mb-3"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            Everything built for IGCSE
          </h2>
          <p style={{ color: "var(--muted)" }}>
            Not a generic study app — purpose-built for CAIE syllabuses
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {coreFeatures.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                data-fade
                data-delay={String(i * 70)}
                className="fcard rounded-[14px] p-6"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-4"
                  style={{ background: "rgba(124,106,240,0.1)" }}
                >
                  <Icon size={20} color="var(--accent)" strokeWidth={1.75} />
                </div>
                <div
                  className="font-bold text-[15px] mb-2"
                  style={{ fontFamily: "var(--font-syne), sans-serif" }}
                >
                  {f.title}
                </div>
                <div
                  className="text-[13px] leading-[1.65]"
                  style={{ color: "var(--muted)" }}
                >
                  {f.desc}
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary features */}
        <div className="mt-14">
          <div data-fade className="text-center mb-8">
            <div
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold mb-4 uppercase tracking-widest"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                color: "rgba(232,232,240,0.4)",
              }}
            >
              Extras
            </div>
            <div
              className="text-[20px] font-semibold"
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                color: "rgba(232,232,240,0.65)",
              }}
            >
              Plus everything else you need
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {secondaryFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  data-fade
                  data-delay={String(i * 60)}
                  className="fcard rounded-[12px] p-5"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <Icon
                    size={18}
                    color="rgba(232,232,240,0.35)"
                    strokeWidth={1.5}
                    className="mb-3"
                  />
                  <div
                    className="font-semibold text-[13px] mb-1.5"
                    style={{ color: "rgba(232,232,240,0.75)" }}
                  >
                    {f.title}
                  </div>
                  <div
                    className="text-[12px] leading-[1.6]"
                    style={{ color: "rgba(232,232,240,0.32)" }}
                  >
                    {f.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="px-6 py-14 max-w-2xl mx-auto text-center">
        <div data-fade>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold mb-7"
            style={{
              background: "rgba(82,183,136,0.07)",
              border: "1px solid rgba(82,183,136,0.18)",
              color: "#52b788",
            }}
          >
            <Trophy size={13} />
            Built by IGCSE students, for IGCSE students
          </div>
          <p
            className="text-[22px] font-semibold leading-[1.55] mb-5"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              color: "rgba(232,232,240,0.82)",
            }}
          >
            &ldquo;This is the revision tool I wish existed when I sat my
            IGCSEs.&rdquo;
          </p>
          <p className="text-[14px]" style={{ color: "var(--muted)" }}>
            Cambridge CAIE · May/June 2026 cohort
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-10 max-w-5xl mx-auto">
        <div
          data-fade
          className="relative text-center px-6 py-24 rounded-[20px] overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(124,106,240,0.11) 0%, rgba(96,160,240,0.05) 50%, rgba(124,106,240,0.08) 100%)",
            border: "1px solid rgba(124,106,240,0.18)",
          }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[100px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, rgba(124,106,240,0.2) 0%, transparent 70%)",
              filter: "blur(32px)",
            }}
          />
          <div className="relative z-10">
            <h2
              className="font-extrabold mb-4"
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontSize: "clamp(28px, 4vw, 46px)",
                letterSpacing: "-0.02em",
              }}
            >
              Ready to ace your IGCSEs?
            </h2>
            <p
              className="text-[17px] leading-[1.7] mb-9 mx-auto"
              style={{ color: "var(--muted)", maxWidth: "400px" }}
            >
              Join students using IGCSE Ace to study smarter this revision
              season. Free for everyone, forever.
            </p>
            <Link
              href="/login"
              className="ctabtn inline-flex items-center gap-2 font-bold px-9 py-4 rounded-[12px] no-underline text-[17px]"
              style={{ background: "var(--accent)", color: "white" }}
            >
              Sign up free — no credit card needed
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="text-center px-8 py-8 text-[13px]"
        style={{ color: "var(--muted)", borderTop: "1px solid var(--border)" }}
      >
        © 2026 IGCSE Ace · Cambridge CAIE revision platform · Free forever
      </footer>
    </>
  );
}
