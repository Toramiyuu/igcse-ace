import { createClient } from "@/lib/supabase/server";
import type { SubjectKey } from "@/data/subjects";
import TimetableGrid from "@/components/dashboard/TimetableGrid";

export default async function TimetablePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: profile } = await supabase
    .from("user_profiles")
    .select("subjects")
    .eq("id", user!.id)
    .single();

  const subjects = (profile?.subjects ?? []) as SubjectKey[];

  return (
    <div className="p-10 max-w-[1100px]">
      <div className="mb-8">
        <h1 className="font-[family-name:var(--font-syne)] text-[28px] font-extrabold mb-1.5">
          Study Timetable
        </h1>
        <p className="text-[var(--muted)] text-[14px]">
          Weekly schedule weighted by exam proximity · Pomodoro timer below
        </p>
      </div>

      {subjects.length === 0 ? (
        <p className="text-[var(--muted)] text-[14px]">
          No subjects found. Complete onboarding to generate your timetable.
        </p>
      ) : (
        <TimetableGrid subjects={subjects} />
      )}
    </div>
  );
}
