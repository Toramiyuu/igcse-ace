import { createClient } from "@/lib/supabase/server";
import { subjects as subjectData } from "@/data/subjects";
import type { SubjectKey } from "@/data/subjects";
import { topicData, subjectTopics } from "@/data/topics";
import { examStrategy } from "@/data/strategy";
import { gradeBoundaries, paperOptions } from "@/data/papers";
import { SUBJECT_META } from "@/data/constants";
import { getExamsForZone } from "@/lib/zones";
import SubjectTabs from "@/components/dashboard/SubjectTabs";

const GROUP_LABELS: Record<string, string> = {
  "ict-theory-topics": "Theory",
  "ict-practical-topics": "Practical",
  "cs-topics1": "Paper 1",
  "cs-topics2": "Paper 2",
  "bus-topics": "Topics",
  "sci-bio-topics": "Biology",
  "sci-chem-topics": "Chemistry",
  "sci-phys-topics": "Physics",
  "am-topics": "Topics",
  "gp-topics": "Topics",
};

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject } = await params;
  const sk = subject as SubjectKey;
  const data = subjectData[sk];
  const color = SUBJECT_META[sk]?.color ?? "#888";

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: profile } = user
    ? await supabase
        .from("user_profiles")
        .select("zone")
        .eq("id", user.id)
        .single()
    : { data: null };
  const zone: number = profile?.zone ?? 1;

  if (!data) {
    return (
      <div className="p-10">
        <p className="text-[var(--muted)]">Subject not found.</p>
      </div>
    );
  }

  const topicGroups = (subjectTopics[sk] ?? []).map((key) => ({
    label: GROUP_LABELS[key] ?? key,
    key,
    items: (topicData[key] ?? []) as [string, string][],
  }));

  return (
    <div className="p-10 max-w-[800px]">
      <div className="flex items-center gap-[14px] mb-8">
        <div
          className="w-3 h-3 rounded-full shrink-0"
          style={{ background: color }}
        />
        <div>
          <h1 className="font-[family-name:var(--font-syne)] text-[26px] font-extrabold mb-0.5">
            {data.name}
          </h1>
          <p className="text-[var(--muted)] text-[13px]">{data.code}</p>
        </div>
      </div>

      <SubjectTabs
        subjectKey={subject}
        subjectName={data.name}
        subjectCode={data.code}
        color={color}
        exams={getExamsForZone(zone, sk)}
        topicGroups={topicGroups}
        strategy={examStrategy[sk]}
        gradeBounds={gradeBoundaries[sk]}
        paperOptions={paperOptions[sk]}
      />
    </div>
  );
}
