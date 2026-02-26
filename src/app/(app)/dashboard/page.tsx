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
    <div className="p-10 max-w-[1000px]">
      {/* Header */}
      <div className="mb-9">
        <h1 className="font-[family-name:var(--font-syne)] text-[28px] font-extrabold mb-1.5">
          Overview
        </h1>
        <p className="text-[var(--muted)] text-[14px]">
          {userSubjects.length} subject{userSubjects.length !== 1 ? "s" : ""} ·
          May/June {profile?.session_year} · Cambridge CAIE
        </p>
      </div>

      {/* Countdown stat */}
      {next && daysLeft !== null && (
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[14px] px-6 py-5 mb-8 flex items-center gap-5">
          <div className="font-[family-name:var(--font-syne)] text-[42px] font-extrabold text-[var(--accent)] leading-none">
            {daysLeft}
          </div>
          <div>
            <div className="font-semibold text-[14px] mb-0.5">
              days until{" "}
              {SUBJECT_META[next.subj as SubjectKey]?.name ?? next.subj} —{" "}
              {next.paper}
            </div>
            <div className="text-[var(--muted)] text-[13px]">
              {next.date} · {next.session}
            </div>
          </div>
        </div>
      )}

      {/* Streak heatmap */}
      <h2 className="font-[family-name:var(--font-syne)] font-bold text-[var(--muted)] uppercase tracking-[0.06em] text-[11px] mb-3">
        Study Streak
      </h2>
      <StreakHeatmap />

      {/* Subject cards grid */}
      <h2 className="font-[family-name:var(--font-syne)] font-bold text-[var(--muted)] uppercase tracking-[0.06em] text-[11px] mb-4">
        Your Subjects
      </h2>
      {userSubjects.length === 0 ? (
        <div className="bg-[var(--surface)] border border-dashed border-[var(--border)] rounded-[14px] px-8 py-10 text-center">
          <div className="text-[32px] mb-3">📚</div>
          <div className="font-[family-name:var(--font-syne)] font-bold text-[16px] mb-2">
            No subjects selected
          </div>
          <p className="text-[var(--muted)] text-[13px] mb-5">
            Choose your subjects to unlock your timetable, flashcards, and exam
            tracker.
          </p>
          <a
            href="/onboarding"
            className="bg-[var(--accent)] text-black font-bold px-6 py-2.5 rounded-lg text-[14px] no-underline inline-block"
          >
            Set up subjects →
          </a>
        </div>
      ) : (
        <div
          className="grid gap-[14px]"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
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
