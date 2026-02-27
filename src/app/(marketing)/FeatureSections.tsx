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

const interFont = "var(--font-inter), sans-serif";

export default function FeatureSections() {
  return (
    <>
      {/* Stats */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            data-fade
            className="stats-wrap flex flex-wrap justify-center"
            style={{ gap: "24px" }}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                data-delay={String(i * 60)}
                className="stat-card text-center rounded-[14px]"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  padding: "32px 40px",
                  minWidth: "160px",
                }}
              >
                <div
                  className="stat-num font-bold leading-none mb-2"
                  style={{
                    fontFamily: interFont,
                    fontSize: "48px",
                    fontWeight: 700,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section id="subjects" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            data-fade
            className="text-center"
            style={{ marginBottom: "40px" }}
          >
            <h2
              className="font-bold"
              style={{
                fontFamily: interFont,
                fontSize: "30px",
                fontWeight: 700,
                marginBottom: "12px",
              }}
            >
              {subjects.length} subjects covered
            </h2>
            <p style={{ fontSize: "15px", color: "var(--muted)" }}>
              All major Cambridge CAIE IGCSE syllabuses, May/June 2026
            </p>
          </div>
          <div
            data-fade
            data-delay="100"
            className="subject-tags flex flex-wrap justify-center"
            style={{ gap: "12px 16px" }}
          >
            {subjects.map((s) => (
              <div
                key={s.name}
                className="stag flex items-center gap-2.5 rounded-full"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  padding: "8px 16px",
                }}
              >
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: s.color }}
                />
                <span style={{ fontSize: "14px", fontWeight: 600 }}>
                  {s.name}
                </span>
                <span
                  className="font-mono"
                  style={{ fontSize: "11px", color: "rgba(232,232,240,0.32)" }}
                >
                  {s.code}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            data-fade
            className="text-center"
            style={{ marginBottom: "48px" }}
          >
            <div
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 uppercase tracking-widest"
              style={{
                background: "rgba(124,106,240,0.08)",
                border: "1px solid rgba(124,106,240,0.15)",
                color: "var(--accent)",
                fontSize: "11px",
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              Core Tools
            </div>
            <h2
              className="font-bold"
              style={{
                fontFamily: interFont,
                fontSize: "30px",
                fontWeight: 700,
                marginBottom: "12px",
              }}
            >
              Everything built for IGCSE
            </h2>
            <p style={{ color: "var(--muted)" }}>
              Not a generic study app — purpose-built for CAIE syllabuses
            </p>
          </div>
          <div
            className="features-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            style={{ gap: "24px" }}
          >
            {coreFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  data-fade
                  data-delay={String(i * 70)}
                  className="fcard rounded-[16px]"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    padding: "32px",
                  }}
                >
                  <div
                    className="flex items-center justify-center rounded-[12px]"
                    style={{
                      width: "48px",
                      height: "48px",
                      background: "rgba(124,106,240,0.1)",
                      marginBottom: "16px",
                    }}
                  >
                    <Icon size={22} color="var(--accent)" strokeWidth={1.75} />
                  </div>
                  <div
                    style={{
                      fontFamily: interFont,
                      fontSize: "18px",
                      fontWeight: 600,
                      marginBottom: "8px",
                    }}
                  >
                    {f.title}
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.6",
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    {f.desc}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Secondary features */}
          <div style={{ marginTop: "48px" }}>
            <div
              data-fade
              className="text-center"
              style={{ marginBottom: "32px" }}
            >
              <div
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 uppercase tracking-widest"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  color: "rgba(232,232,240,0.4)",
                  fontSize: "11px",
                  fontWeight: 600,
                  marginBottom: "12px",
                }}
              >
                Extras
              </div>
              <div
                style={{
                  fontFamily: interFont,
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "rgba(232,232,240,0.65)",
                }}
              >
                Plus everything else you need
              </div>
            </div>
            <div
              className="features-grid-2 grid grid-cols-2 lg:grid-cols-4"
              style={{ gap: "16px" }}
            >
              {secondaryFeatures.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    data-fade
                    data-delay={String(i * 60)}
                    className="fcard rounded-[12px]"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      padding: "24px",
                    }}
                  >
                    <Icon
                      size={18}
                      color="rgba(232,232,240,0.35)"
                      strokeWidth={1.5}
                      style={{ marginBottom: "12px" }}
                    />
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "rgba(232,232,240,0.75)",
                        marginBottom: "6px",
                      }}
                    >
                      {f.title}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        lineHeight: "1.6",
                        color: "rgba(232,232,240,0.32)",
                      }}
                    >
                      {f.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section style={{ padding: "80px 24px" }}>
        <div
          style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}
        >
          <div data-fade>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2"
              style={{
                background: "rgba(82,183,136,0.07)",
                border: "1px solid rgba(82,183,136,0.18)",
                color: "#52b788",
                fontSize: "13px",
                fontWeight: 600,
                marginBottom: "28px",
              }}
            >
              <Trophy size={13} />
              Built by IGCSE students, for IGCSE students
            </div>
            <p
              style={{
                fontFamily: interFont,
                fontSize: "22px",
                fontWeight: 600,
                lineHeight: "1.55",
                marginBottom: "20px",
                color: "rgba(232,232,240,0.82)",
              }}
            >
              &ldquo;This is the revision tool I wish existed when I sat my
              IGCSEs.&rdquo;
            </p>
            <p style={{ fontSize: "14px", color: "var(--muted)" }}>
              Cambridge CAIE · May/June 2026 cohort
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            data-fade
            className="relative text-center rounded-[20px] overflow-hidden"
            style={{
              padding: "120px 48px",
              background:
                "linear-gradient(135deg, rgba(124,106,240,0.11) 0%, rgba(96,160,240,0.05) 50%, rgba(124,106,240,0.08) 100%)",
              border: "1px solid rgba(124,106,240,0.18)",
            }}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
              style={{
                width: "500px",
                height: "100px",
                background:
                  "radial-gradient(ellipse, rgba(124,106,240,0.2) 0%, transparent 70%)",
                filter: "blur(32px)",
              }}
            />
            <div className="relative z-10">
              <h2
                className="font-extrabold"
                style={{
                  fontFamily: interFont,
                  fontSize: "clamp(28px, 4vw, 46px)",
                  letterSpacing: "-0.02em",
                  fontWeight: 800,
                  marginBottom: "16px",
                }}
              >
                Ready to ace your IGCSEs?
              </h2>
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: "1.7",
                  marginBottom: "36px",
                  color: "var(--muted)",
                  maxWidth: "400px",
                  margin: "0 auto 36px",
                }}
              >
                Join students using IGCSE Ace to study smarter this revision
                season. Free for everyone, forever.
              </p>
              <Link
                href="/login"
                className="ctabtn inline-flex items-center gap-2.5 font-semibold rounded-full no-underline"
                style={{ padding: "15px 36px", fontSize: "15px" }}
              >
                Sign up free — no credit card needed
                <ArrowRight size={14} className="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="text-center"
        style={{
          padding: "32px 24px",
          fontSize: "13px",
          color: "var(--muted)",
          borderTop: "1px solid var(--border)",
        }}
      >
        © 2026 IGCSE Ace · Cambridge CAIE revision platform · Free forever
      </footer>
    </>
  );
}
