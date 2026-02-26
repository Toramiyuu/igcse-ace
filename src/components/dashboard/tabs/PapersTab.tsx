"use client";

import type { Exam } from "@/data/subjects";

export default function PapersTab({
  exams,
  color,
}: {
  exams: Exam[];
  color: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      {exams.map((e, i) => (
        <div
          key={i}
          className="bg-[var(--surface)] rounded-[10px] px-4 py-3 flex justify-between"
          style={{
            border: `1px solid ${color}28`,
            borderLeft: `3px solid ${color}`,
          }}
        >
          <div>
            <span className="font-semibold text-[14px]">{e.paper}</span>
            <span className="text-[var(--muted)] text-[12px] ml-[10px]">
              {e.duration}
            </span>
          </div>
          <div className="text-[var(--muted)] text-[13px]">
            {e.date} · {e.session}
          </div>
        </div>
      ))}
    </div>
  );
}
