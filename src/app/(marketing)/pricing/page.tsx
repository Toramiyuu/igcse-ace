import Link from "next/link";

export default function PricingPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        padding: "80px 24px",
      }}
    >
      <div style={{ maxWidth: 480, margin: "0 auto", textAlign: "center" }}>
        <Link
          href="/"
          style={{
            color: "var(--muted)",
            fontSize: 14,
            textDecoration: "none",
          }}
        >
          ← Back
        </Link>
        <h1
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: 42,
            fontWeight: 800,
            marginTop: 32,
            marginBottom: 12,
          }}
        >
          Simple pricing
        </h1>
        <p style={{ color: "var(--muted)", marginBottom: 48, fontSize: 16 }}>
          One plan. Everything included. Cancel anytime.
        </p>

        <div
          style={{
            background: "var(--surface)",
            border: "2px solid var(--accent)",
            borderRadius: 20,
            padding: "40px 36px",
            marginBottom: 24,
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "rgba(240,192,64,0.1)",
              border: "1px solid rgba(240,192,64,0.3)",
              borderRadius: 100,
              padding: "4px 14px",
              fontSize: 12,
              color: "var(--accent)",
              fontWeight: 600,
              marginBottom: 20,
            }}
          >
            7 DAYS FREE
          </div>

          <div
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: 56,
              fontWeight: 800,
              lineHeight: 1,
            }}
          >
            £4
            <span
              style={{ fontSize: 20, color: "var(--muted)", fontWeight: 400 }}
            >
              /month
            </span>
          </div>
          <p
            style={{
              color: "var(--muted)",
              margin: "12px 0 32px",
              fontSize: 15,
            }}
          >
            After your free trial. Cancel before and pay nothing.
          </p>

          <div style={{ textAlign: "left", marginBottom: 32 }}>
            {[
              "15 IGCSE subjects with curated content",
              "876+ flashcards with spaced repetition",
              "Mock exam mode with scoring",
              "Smart revision timetable",
              "Past paper attempt tracker",
              "Exam day briefing cards",
              "Study streak & habit calendar",
              "Print-ready revision sheets",
              "Per-topic personal notes",
            ].map((f) => (
              <div
                key={f}
                style={{
                  display: "flex",
                  gap: 10,
                  marginBottom: 12,
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{ color: "var(--green)", flexShrink: 0, marginTop: 2 }}
                >
                  ✓
                </span>
                <span style={{ fontSize: 15 }}>{f}</span>
              </div>
            ))}
          </div>

          <Link
            href="/login"
            style={{
              display: "block",
              background: "var(--accent)",
              color: "#000",
              fontWeight: 700,
              padding: "14px",
              borderRadius: 10,
              textDecoration: "none",
              fontSize: 16,
              textAlign: "center",
            }}
          >
            Start free trial
          </Link>
        </div>

        <p style={{ color: "var(--muted)", fontSize: 13 }}>
          No card required to start your trial.
          <br />
          Sign in with Google in one click.
        </p>
      </div>
    </div>
  );
}
