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

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Nav */}
      <nav
        className="flex items-center justify-between px-10 py-5 border-b border-[var(--border)] sticky top-0 z-[100] backdrop-blur-md"
        style={{ background: "var(--nav-bg)" }}
      >
        <div className="font-[family-name:var(--font-syne)] font-extrabold text-[20px]">
          IGCSE <span className="text-[var(--accent)]">Ace</span>
        </div>
        <Link
          href="/login"
          className="bg-[var(--accent)] text-black font-bold px-5 py-2 rounded-lg no-underline text-[14px]"
        >
          Sign Up
        </Link>
      </nav>

      {/* Hero */}
      <section
        className="text-center px-6 pt-[100px] pb-[80px]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(240,192,64,0.08) 0%, transparent 60%)",
        }}
      >
        <div className="inline-block bg-[rgba(240,192,64,0.1)] border border-[rgba(240,192,64,0.25)] rounded-full px-4 py-1.5 text-[12px] text-[var(--accent)] font-semibold mb-7 tracking-[0.05em]">
          CAMBRIDGE CAIE · MAY/JUNE 2026
        </div>
        <h1 className="font-[family-name:var(--font-syne)] text-[clamp(24px,2.6vw,38px)] font-bold leading-[1.25] max-w-[720px] mx-auto mb-6">
          The complete revision platform for{" "}
          <span className="text-[var(--accent)]">IGCSE students</span>
        </h1>
        <p className="text-[var(--muted)] text-[18px] max-w-[540px] mx-auto mb-10 leading-[1.7]">
          Flashcards, mock exams, smart timetables, and progress tracking —
          built specifically for Cambridge CAIE. Everything you need to hit A*.
        </p>
        <Link
          href="/login"
          className="bg-[var(--accent)] text-black font-bold px-8 py-[14px] rounded-[10px] no-underline text-[16px] inline-block"
        >
          Get started — it&apos;s free
        </Link>
      </section>

      {/* Subjects */}
      <section className="px-10 py-[60px] max-w-[1100px] mx-auto">
        <h2 className="font-[family-name:var(--font-syne)] text-[28px] font-bold text-center mb-2">
          {subjects.length} subjects covered
        </h2>
        <p className="text-center text-[var(--muted)] mb-9">
          All major Cambridge CAIE IGCSE syllabuses
        </p>
        <div className="flex flex-wrap gap-[10px] justify-center">
          {subjects.map((s) => (
            <div
              key={s.name}
              className="bg-[var(--surface2)] border border-[var(--border)] rounded-lg px-4 py-2 flex items-center gap-[10px]"
            >
              <div
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: s.color }}
              />
              <span className="text-[14px] font-semibold">{s.name}</span>
              <span className="text-[12px] text-[var(--muted)]">{s.code}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-10 py-[60px] max-w-[1100px] mx-auto">
        <h2 className="font-[family-name:var(--font-syne)] text-[28px] font-bold text-center mb-2">
          Everything built for IGCSE
        </h2>
        <p className="text-center text-[var(--muted)] mb-12">
          Not a generic study app — purpose-built for CAIE syllabuses
        </p>
        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))" }}
        >
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-[12px] p-6"
            >
              <div className="text-[28px] mb-3">{f.icon}</div>
              <div className="font-bold mb-2 font-[family-name:var(--font-syne)]">
                {f.title}
              </div>
              <div className="text-[var(--muted)] text-[14px] leading-[1.6]">
                {f.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center px-6 py-[80px] mx-10 mb-10 rounded-[20px] border border-[var(--border)] bg-[linear-gradient(135deg,var(--surface)_0%,rgba(240,192,64,0.05)_100%)]">
        <h2 className="font-[family-name:var(--font-syne)] text-[36px] font-extrabold mb-4">
          Ready to ace your IGCSEs?
        </h2>
        <p className="text-[var(--muted)] mb-8 text-[16px]">
          Join students using IGCSE Ace to study smarter this revision season.
        </p>
        <Link
          href="/login"
          className="bg-[var(--accent)] text-black font-bold px-10 py-4 rounded-[10px] no-underline text-[18px] inline-block"
        >
          Sign up free
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center px-8 py-8 text-[var(--muted)] text-[13px] border-t border-[var(--border)] mt-10">
        © 2026 IGCSE Ace · Cambridge CAIE revision platform
      </footer>
    </div>
  );
}
