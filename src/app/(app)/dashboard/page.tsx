import { createClient } from "@/lib/supabase/server";
import type { SubjectKey } from "@/data/subjects";
import { SUBJECT_META } from "@/data/constants";
import { getExamsForZone } from "@/lib/zones";
import SubjectCard from "@/components/dashboard/SubjectCard";
import StreakHeatmap from "@/components/dashboard/StreakHeatmap";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: profile } = await supabase
    .from("user_profiles")
    .select("*")
    .eq("id", user!.id)
    .single();

  const userSubjects = (profile?.subjects || []) as string[];
  const zone: number = profile?.zone ?? 1;

  const now = Date.now();
  const upcoming = userSubjects
    .flatMap((k) =>
      getExamsForZone(zone, k as SubjectKey).map((e) => ({
        ...e,
        subj: k,
      })),
    )
    .filter((e) => e.iso && new Date(e.iso).getTime() > now)
    .sort((a, b) => new Date(a.iso!).getTime() - new Date(b.iso!).getTime());
  const next = upcoming[0];
  const daysLeft = next
    ? Math.ceil((new Date(next.iso!).getTime() - now) / 86400000)
    : null;

  return (
    <div style={{ padding: "40px 44px", maxWidth: "960px" }}>
      {/* Header */}
      <div style={{ marginBottom: "36px" }}>
        <h1
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "28px",
            fontWeight: 800,
            marginBottom: "6px",
            color: "var(--text)",
            letterSpacing: "-0.02em",
          }}
        >
          Overview
        </h1>
        <p style={{ color: "var(--muted)", fontSize: "14px" }}>
          {userSubjects.length} subject{userSubjects.length !== 1 ? "s" : ""} ·
          May/June {profile?.session_year} · Cambridge CAIE
        </p>
      </div>

      {/* Countdown stat */}
      {next && daysLeft !== null && (
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "14px",
            padding: "20px 24px",
            marginBottom: "32px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: "44px",
              fontWeight: 800,
              color: "var(--accent)",
              lineHeight: 1,
              flexShrink: 0,
            }}
          >
            {daysLeft}
          </div>
          <div>
            <div
              style={{
                fontWeight: 600,
                fontSize: "14px",
                marginBottom: "4px",
                color: "var(--text)",
              }}
            >
              days until{" "}
              {SUBJECT_META[next.subj as SubjectKey]?.name ?? next.subj} —{" "}
              {next.paper}
            </div>
            <div style={{ color: "var(--muted)", fontSize: "13px" }}>
              {next.date} · {next.session}
            </div>
          </div>
        </div>
      )}

      {/* Streak heatmap */}
      <div
        style={{
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.07em",
          textTransform: "uppercase",
          color: "var(--muted)",
          marginBottom: "12px",
          fontFamily: "var(--font-syne), sans-serif",
        }}
      >
        Study Streak
      </div>
      <StreakHeatmap />

      {/* Subject cards grid */}
      <div
        style={{
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.07em",
          textTransform: "uppercase",
          color: "var(--muted)",
          marginBottom: "16px",
          marginTop: "32px",
          fontFamily: "var(--font-syne), sans-serif",
        }}
      >
        Your Subjects
      </div>
      {userSubjects.length === 0 ? (
        <div
          style={{
            background: "var(--surface)",
            border: "1px dashed var(--border)",
            borderRadius: "14px",
            padding: "48px 32px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "32px", marginBottom: "12px" }}>📚</div>
          <div
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              marginBottom: "8px",
              color: "var(--text)",
            }}
          >
            No subjects selected
          </div>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "13px",
              marginBottom: "20px",
              lineHeight: 1.6,
            }}
          >
            Choose your subjects to unlock your timetable, flashcards, and exam
            tracker.
          </p>
          <a
            href="/onboarding"
            style={{
              background: "var(--accent)",
              color: "#000",
              fontWeight: 700,
              padding: "10px 24px",
              borderRadius: "8px",
              fontSize: "14px",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Set up subjects →
          </a>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
            gap: "14px",
          }}
        >
          {userSubjects.map((key) => {
            const meta = SUBJECT_META[key as SubjectKey];
            if (!meta) return null;
            return <SubjectCard key={key} subjectKey={key} meta={meta} />;
          })}
        </div>
      )}
    </div>
  );
}
