const HEATMAP = [
  0, 0, 2, 3, 1, 0, 0, 1, 3, 4, 2, 0, 1, 0, 3, 4, 4, 1, 0, 2, 3, 2, 4, 1, 0, 1,
  3, 4,
];

const SIDEBAR_ITEMS = [
  "Dashboard",
  "Flashcards",
  "Topics",
  "Timetable",
  "Tracker",
  "Mock Exam",
];

const PROGRESS_BARS = [
  { label: "Definitions", pct: 68, color: "#60a0f0" },
  { label: "Formulae", pct: 45, color: "#f09040" },
  { label: "Key Facts", pct: 82, color: "#52b788" },
];

const RATING_BUTTONS = [
  { label: "Again", color: "rgba(240,96,96,0.55)", highlight: false },
  { label: "Hard", color: "rgba(255,255,255,0.32)", highlight: false },
  { label: "Good", color: "#52b788", highlight: true },
  { label: "Easy", color: "rgba(64,208,240,0.55)", highlight: false },
];

export default function AppMockup() {
  return (
    <section
      data-fade
      data-delay="300"
      className="relative"
      style={{ padding: "64px 24px", maxWidth: "900px", margin: "0 auto" }}
    >
      {/* Glow */}
      <div
        className="absolute left-1/2 top-4 -translate-x-1/2 w-[600px] h-[120px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(124,106,240,0.14) 0%, transparent 70%)",
          filter: "blur(24px)",
        }}
      />

      {/* Frame */}
      <div
        className="relative rounded-[16px] overflow-hidden"
        style={{
          background: "#0c0c15",
          border: "1px solid rgba(255,255,255,0.07)",
          boxShadow:
            "0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(124,106,240,0.06), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        {/* Chrome bar */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <div
            className="w-2.5 h-2.5 rounded-full"
            style={{ background: "#ff5f57" }}
          />
          <div
            className="w-2.5 h-2.5 rounded-full"
            style={{ background: "#febc2e" }}
          />
          <div
            className="w-2.5 h-2.5 rounded-full"
            style={{ background: "#28c840" }}
          />
          <div
            className="flex-1 mx-4 rounded-md px-3 py-1 text-[11px] text-center"
            style={{
              background: "rgba(255,255,255,0.04)",
              color: "rgba(255,255,255,0.2)",
            }}
          >
            igcse-ace.vercel.app/dashboard/flashcards
          </div>
        </div>

        <div className="flex" style={{ height: "320px" }}>
          {/* Sidebar */}
          <div
            className="flex flex-col gap-0.5 p-3 shrink-0"
            style={{
              width: "152px",
              background: "rgba(255,255,255,0.015)",
              borderRight: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <div
              className="px-2 py-1 text-[10px] font-bold tracking-widest mb-2"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              IGCSE ACE
            </div>
            {SIDEBAR_ITEMS.map((label) => (
              <div
                key={label}
                className="px-2.5 py-1.5 rounded-md text-[11px]"
                style={{
                  background:
                    label === "Flashcards"
                      ? "rgba(124,106,240,0.14)"
                      : "transparent",
                  color:
                    label === "Flashcards"
                      ? "var(--accent)"
                      : "rgba(255,255,255,0.28)",
                  fontWeight: label === "Flashcards" ? 600 : 400,
                }}
              >
                {label}
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 p-5 flex flex-col gap-4 overflow-hidden">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[14px] font-bold">
                  ICT 0417 — Flashcards
                </div>
                <div
                  className="text-[11px] mt-0.5"
                  style={{ color: "rgba(255,255,255,0.28)" }}
                >
                  12 cards due today
                </div>
              </div>
              <div
                className="rounded-full px-3 py-1 text-[10px] font-semibold"
                style={{
                  background: "rgba(124,106,240,0.12)",
                  color: "var(--accent)",
                }}
              >
                Spaced Repetition
              </div>
            </div>
            {/* Flashcard */}
            <div
              className="rounded-[12px] flex-1 flex flex-col items-center justify-center p-5 text-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,106,240,0.07) 0%, rgba(96,160,240,0.04) 100%)",
                border: "1px solid rgba(124,106,240,0.14)",
              }}
            >
              <div
                className="text-[10px] font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--accent)" }}
              >
                DEFINITION
              </div>
              <div
                className="text-[13px] font-medium leading-relaxed mb-3"
                style={{ color: "rgba(255,255,255,0.82)" }}
              >
                What is the difference between a LAN and a WAN?
              </div>
              <div
                className="text-[11px] leading-relaxed"
                style={{ color: "rgba(255,255,255,0.38)" }}
              >
                LAN: Local Area Network — devices in one location
                <br />
                WAN: Wide Area Network — spans large geographic areas
              </div>
            </div>
            {/* Rating row */}
            <div className="flex gap-2">
              {RATING_BUTTONS.map(({ label, color, highlight }) => (
                <div
                  key={label}
                  className="flex-1 py-1.5 rounded-lg text-center text-[11px] font-semibold"
                  style={{
                    background: highlight
                      ? "rgba(82,183,136,0.13)"
                      : "rgba(255,255,255,0.04)",
                    color,
                    border: `1px solid ${highlight ? "rgba(82,183,136,0.18)" : "rgba(255,255,255,0.06)"}`,
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Right panel */}
          <div
            className="hidden lg:flex flex-col gap-3 p-4 shrink-0"
            style={{
              width: "152px",
              borderLeft: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <div
              className="text-[10px] font-semibold uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.22)" }}
            >
              Progress
            </div>
            {PROGRESS_BARS.map((item) => (
              <div key={item.label}>
                <div className="flex justify-between mb-1">
                  <span
                    className="text-[10px]"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="text-[10px] font-semibold"
                    style={{ color: item.color }}
                  >
                    {item.pct}%
                  </span>
                </div>
                <div
                  className="rounded-full h-1"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <div
                    className="rounded-full h-1"
                    style={{ width: `${item.pct}%`, background: item.color }}
                  />
                </div>
              </div>
            ))}
            <div className="mt-1">
              <div
                className="text-[10px] font-semibold uppercase tracking-widest mb-2"
                style={{ color: "rgba(255,255,255,0.22)" }}
              >
                Streak
              </div>
              <div
                className="grid gap-0.5"
                style={{ gridTemplateColumns: "repeat(7, 1fr)" }}
              >
                {HEATMAP.map((intensity, i) => (
                  <div
                    key={i}
                    className="rounded-[2px] aspect-square"
                    style={{
                      background:
                        intensity === 0
                          ? "rgba(255,255,255,0.04)"
                          : `rgba(82,183,136,${intensity * 0.22})`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
