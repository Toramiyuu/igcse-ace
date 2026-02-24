import Link from "next/link";

const features = [
  {
    icon: "🗂️",
    title: "Topic Checklists",
    desc: "3-state confidence tracking across every syllabus topic for all your subjects.",
  },
  {
    icon: "🃏",
    title: "876+ Flashcards",
    desc: "Spaced repetition flashcards covering definitions, formulae, and key facts.",
  },
  {
    icon: "📝",
    title: "Mock Exam Mode",
    desc: "20-card timed mock exams with automatic scoring and breakdown by topic type.",
  },
  {
    icon: "📅",
    title: "Smart Timetable",
    desc: "Grade-adaptive study schedule weighted by your weakest subjects.",
  },
  {
    icon: "📊",
    title: "Past Paper Log",
    desc: "Track every past paper attempt with trend sparklines per paper.",
  },
  {
    icon: "🎯",
    title: "Exam Day Briefing",
    desc: "Pre-exam summary of your weakest topics, key formulae, and strategy.",
  },
  {
    icon: "🔥",
    title: "Streak Tracking",
    desc: "Activity heatmap that keeps you consistent through revision season.",
  },
  {
    icon: "🖨️",
    title: "Print Revision Sheets",
    desc: "Generate a print-ready revision sheet for any subject in one click.",
  },
];

const subjects = [
  { name: "ICT", code: "0417", color: "#60a0f0" },
  { name: "Computer Science", code: "0478", color: "#a070f0" },
  { name: "Business Studies", code: "0450", color: "#50d08f" },
  { name: "English First Language", code: "0500", color: "#f0c040" },
  { name: "English Literature", code: "0475", color: "#f060a0" },
  { name: "Sciences (Double)", code: "0654", color: "#f06060" },
  { name: "Additional Mathematics", code: "0606", color: "#f09040" },
  { name: "Global Perspectives", code: "0457", color: "#40d0f0" },
  { name: "Mathematics", code: "0580", color: "#60a0f0" },
  { name: "Physics", code: "0625", color: "#a070f0" },
  { name: "Chemistry", code: "0620", color: "#50d08f" },
  { name: "Biology", code: "0610", color: "#f0c040" },
  { name: "History", code: "0470", color: "#f060a0" },
  { name: "Geography", code: "0460", color: "#40d0f0" },
  { name: "Economics", code: "0455", color: "#f09040" },
];

export default function LandingPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      {/* Nav */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 40px",
          borderBottom: "1px solid var(--border)",
          position: "sticky",
          top: 0,
          background: "rgba(8,8,16,0.85)",
          backdropFilter: "blur(12px)",
          zIndex: 100,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: 20,
          }}
        >
          IGCSE <span style={{ color: "var(--accent)" }}>Ace</span>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Link
            href="/pricing"
            style={{
              color: "var(--muted)",
              textDecoration: "none",
              fontSize: 14,
            }}
          >
            Pricing
          </Link>
          <Link
            href="/login"
            style={{
              background: "var(--accent)",
              color: "#000",
              fontWeight: 700,
              padding: "8px 20px",
              borderRadius: 8,
              textDecoration: "none",
              fontSize: 14,
            }}
          >
            Start Free Trial
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{
          textAlign: "center",
          padding: "100px 24px 80px",
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(240,192,64,0.08) 0%, transparent 60%)",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "rgba(240,192,64,0.1)",
            border: "1px solid rgba(240,192,64,0.25)",
            borderRadius: 100,
            padding: "6px 16px",
            fontSize: 12,
            color: "var(--accent)",
            fontWeight: 600,
            marginBottom: 28,
            letterSpacing: "0.05em",
          }}
        >
          CAMBRIDGE CAIE · MAY/JUNE 2026
        </div>
        <h1
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(36px,6vw,72px)",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          The complete revision
          <br />
          platform for{" "}
          <span style={{ color: "var(--accent)" }}>IGCSE students</span>
        </h1>
        <p
          style={{
            color: "var(--muted)",
            fontSize: 18,
            maxWidth: 540,
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}
        >
          Flashcards, mock exams, smart timetables, and progress tracking —
          built specifically for Cambridge CAIE. Everything you need to hit A*.
        </p>
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/login"
            style={{
              background: "var(--accent)",
              color: "#000",
              fontWeight: 700,
              padding: "14px 32px",
              borderRadius: 10,
              textDecoration: "none",
              fontSize: 16,
            }}
          >
            Start 7-day free trial
          </Link>
          <Link
            href="/pricing"
            style={{
              background: "var(--surface2)",
              color: "var(--text)",
              border: "1px solid var(--border)",
              padding: "14px 32px",
              borderRadius: 10,
              textDecoration: "none",
              fontSize: 16,
            }}
          >
            See pricing
          </Link>
        </div>
        <p style={{ color: "var(--muted)", fontSize: 13, marginTop: 16 }}>
          No card required to start · Cancel anytime
        </p>
      </section>

      {/* Subjects */}
      <section
        style={{ padding: "60px 40px", maxWidth: 1100, margin: "0 auto" }}
      >
        <h2
          style={{
            textAlign: "center",
            fontFamily: "var(--font-syne)",
            fontSize: 28,
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          15 subjects covered
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "var(--muted)",
            marginBottom: 36,
          }}
        >
          All major Cambridge CAIE IGCSE syllabuses
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
          }}
        >
          {subjects.map((s) => (
            <div
              key={s.code}
              style={{
                background: "var(--surface2)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                padding: "8px 16px",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: s.color,
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: 14, fontWeight: 600 }}>{s.name}</span>
              <span style={{ fontSize: 12, color: "var(--muted)" }}>
                {s.code}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section
        style={{ padding: "60px 40px", maxWidth: 1100, margin: "0 auto" }}
      >
        <h2
          style={{
            textAlign: "center",
            fontFamily: "var(--font-syne)",
            fontSize: 28,
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          Everything built for IGCSE
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "var(--muted)",
            marginBottom: 48,
          }}
        >
          Not a generic study app — purpose-built for CAIE syllabuses
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))",
            gap: 20,
          }}
        >
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "24px",
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
              <div
                style={{
                  fontWeight: 700,
                  marginBottom: 8,
                  fontFamily: "var(--font-syne)",
                }}
              >
                {f.title}
              </div>
              <div
                style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.6 }}
              >
                {f.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 24px",
          background:
            "linear-gradient(135deg, var(--surface) 0%, rgba(240,192,64,0.05) 100%)",
          margin: "40px 40px",
          borderRadius: 20,
          border: "1px solid var(--border)",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: 36,
            fontWeight: 800,
            marginBottom: 16,
          }}
        >
          Ready to ace your IGCSEs?
        </h2>
        <p style={{ color: "var(--muted)", marginBottom: 32, fontSize: 16 }}>
          Join students using IGCSE Ace to study smarter this revision season.
        </p>
        <Link
          href="/login"
          style={{
            background: "var(--accent)",
            color: "#000",
            fontWeight: 700,
            padding: "16px 40px",
            borderRadius: 10,
            textDecoration: "none",
            fontSize: 18,
            display: "inline-block",
          }}
        >
          Start free — 7 days on us
        </Link>
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "32px",
          color: "var(--muted)",
          fontSize: 13,
          borderTop: "1px solid var(--border)",
          marginTop: 40,
        }}
      >
        © 2026 IGCSE Ace · Cambridge CAIE revision platform ·{" "}
        <Link href="/pricing" style={{ color: "var(--muted)" }}>
          Pricing
        </Link>
      </footer>
    </div>
  );
}
