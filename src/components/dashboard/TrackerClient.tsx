"use client";

import { useState } from "react";
import ExamBriefingModal from "./ExamBriefingModal";

export interface TrackerEvent {
  subj: string;
  name: string;
  paper: string;
  date: string;
  iso: string;
  session: string;
  duration: string;
  code: string;
  color: string;
  past: boolean;
  days: number;
}

export default function TrackerClient({ events }: { events: TrackerEvent[] }) {
  const [selected, setSelected] = useState<TrackerEvent | null>(null);

  return (
    <>
      <div className="flex flex-col gap-[10px] max-w-[640px]">
        {events.map((e, i) => (
          <button
            key={i}
            onClick={() => !e.past && setSelected(e)}
            className="bg-[var(--surface)] rounded-[10px] px-[18px] py-[14px] flex justify-between items-center w-full text-left border-0"
            style={{
              border: `1px solid ${e.past ? "var(--border)" : `${e.color}30`}`,
              borderLeft: `3px solid ${e.past ? "var(--border)" : e.color}`,
              opacity: e.past ? 0.45 : 1,
              cursor: e.past ? "default" : "pointer",
            }}
          >
            <div>
              <div className="font-semibold text-[14px] mb-[3px]">
                {e.name} — {e.paper}
              </div>
              <div className="text-[var(--muted)] text-[12px]">
                {e.date} · {e.session} · {e.duration}
                {e.code && <span className="ml-2 opacity-60">{e.code}</span>}
              </div>
            </div>
            {!e.past ? (
              <div
                className="font-[family-name:var(--font-syne)] font-extrabold text-[20px] min-w-[48px] text-right shrink-0"
                style={{ color: e.color }}
              >
                {e.days}d
              </div>
            ) : (
              <div className="text-[11px] text-[var(--muted)] shrink-0">
                Done
              </div>
            )}
          </button>
        ))}
      </div>

      <ExamBriefingModal event={selected} onClose={() => setSelected(null)} />
    </>
  );
}
