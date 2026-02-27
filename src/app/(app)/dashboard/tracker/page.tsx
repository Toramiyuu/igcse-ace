import { createClient } from "@/lib/supabase/server";
import type { SubjectKey } from "@/data/subjects";
import { SUBJECT_META } from "@/data/constants";
import { getExamsForZone, zoneKeyFromNumber } from "@/lib/zones";
import { ZONE_INFO } from "@/data/zones";
import TrackerClient from "@/components/dashboard/TrackerClient";

export default async function TrackerPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user)
    return <div className="p-10 text-[var(--muted)]">Not authenticated</div>;
  const { data: profile } = await supabase
    .from("user_profiles")
    .select("subjects, zone")
    .eq("id", user.id)
    .single();

  const userSubjects = (profile?.subjects || []) as string[];
  const zone: number = profile?.zone ?? 1;
  const now = Date.now();

  const events = userSubjects
    .flatMap((k) =>
      getExamsForZone(zone, k as SubjectKey)
        .filter((e) => e.iso)
        .map((e) => ({
          subj: k,
          name: SUBJECT_META[k as SubjectKey]?.name ?? k,
          paper: e.paper,
          date: e.date,
          iso: e.iso!,
          session: e.session,
          duration: e.duration,
          code: e.code,
          color: SUBJECT_META[k as SubjectKey]?.color ?? "#888",
          past: new Date(e.iso!).getTime() < now,
          days: Math.ceil((new Date(e.iso!).getTime() - now) / 86400000),
        })),
    )
    .sort((a, b) => new Date(a.iso).getTime() - new Date(b.iso).getTime());

  return (
    <div style={{ padding: "48px 52px", maxWidth: "1040px" }}>
      <div style={{ marginBottom: "40px" }}>
        <h1
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "30px",
            fontWeight: 800,
            marginBottom: "8px",
            color: "var(--text)",
            letterSpacing: "-0.02em",
          }}
        >
          Exam Tracker
        </h1>
        <p style={{ color: "var(--muted)", fontSize: "15px" }}>
          {events.filter((e) => !e.past).length} exams remaining
          {profile?.zone
            ? ` · ${ZONE_INFO[zoneKeyFromNumber(profile.zone)].label} — ${ZONE_INFO[zoneKeyFromNumber(profile.zone)].region}`
            : ""}
        </p>
      </div>

      <TrackerClient events={events} />
    </div>
  );
}
