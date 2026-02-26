"use client";

import { useState, useEffect, useRef } from "react";
import { TT_SUBJECTS, TT_TOPIC_AREAS } from "@/data/timetable";
import type { SubjectKey } from "@/data/subjects";
import { recordActivity } from "@/lib/activity";

const TIMES = ["9:00 AM", "1:30 PM", "7:00 PM"];
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const POMODORO_WORK = 25 * 60;
const POMODORO_BREAK = 5 * 60;

interface Slot {
  subject: SubjectKey;
  topic: string;
  time: string;
}

function buildSchedule(subjects: SubjectKey[]): Slot[][] {
  if (!subjects.length) return DAYS.map(() => []);
  const now = Date.now();
  const sorted = [...subjects].sort((a, b) => {
    const da = new Date(TT_SUBJECTS[a]?.exam ?? "2099").getTime() - now;
    const db = new Date(TT_SUBJECTS[b]?.exam ?? "2099").getTime() - now;
    return da - db;
  });
  const counters: Partial<Record<SubjectKey, number>> = {};
  const nextTopic = (s: SubjectKey) => {
    const topics = TT_TOPIC_AREAS[s] ?? [];
    if (!topics.length) return "";
    const idx = counters[s] ?? 0;
    counters[s] = (idx + 1) % topics.length;
    return topics[idx];
  };
  return DAYS.map((_, d) =>
    TIMES.map((time, s) => {
      const subj = sorted[(d * TIMES.length + s) % sorted.length];
      return { subject: subj, topic: nextTopic(subj), time };
    }),
  );
}

function fmt(seconds: number) {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export default function TimetableGrid({
  subjects,
}: {
  subjects: SubjectKey[];
}) {
  const schedule = buildSchedule(subjects);
  const [pomPhase, setPomPhase] = useState<"work" | "break">("work");
  const [remaining, setRemaining] = useState(POMODORO_WORK);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setRemaining((r) => {
          if (r <= 1) {
            const next = pomPhase === "work" ? "break" : "work";
            if (pomPhase === "work") recordActivity(25);
            setPomPhase(next);
            setRemaining(next === "work" ? POMODORO_WORK : POMODORO_BREAK);
            return next === "work" ? POMODORO_WORK : POMODORO_BREAK;
          }
          return r - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running, pomPhase]);

  function reset() {
    setRunning(false);
    setPomPhase("work");
    setRemaining(POMODORO_WORK);
  }

  const pct =
    remaining / (pomPhase === "work" ? POMODORO_WORK : POMODORO_BREAK);

  const isWork = pomPhase === "work";
  const phaseColor = isWork ? "var(--accent)" : "#52b788";

  return (
    <div>
      {/* Weekly grid */}
      <div className="grid grid-cols-6 gap-2.5 mb-9 overflow-x-auto">
        {DAYS.map((day, d) => (
          <div key={day}>
            <div className="text-[11px] font-bold text-[var(--muted)] uppercase tracking-[0.06em] mb-2 text-center">
              {day}
            </div>
            <div className="flex flex-col gap-2">
              {(schedule[d] ?? []).map((slot, si) => {
                const meta = TT_SUBJECTS[slot.subject];
                if (!meta) return null;
                return (
                  <div
                    key={si}
                    className="rounded-lg px-2.5 py-2"
                    style={{
                      background: meta.bg,
                      border: `1px solid ${meta.color}30`,
                      borderLeft: `3px solid ${meta.color}`,
                    }}
                  >
                    <div className="text-[10px] text-[var(--muted)] mb-[3px]">
                      {slot.time}
                    </div>
                    <div
                      className="font-[family-name:var(--font-syne)] text-[12px] font-bold mb-[2px]"
                      style={{ color: meta.color }}
                    >
                      {meta.short}
                    </div>
                    {slot.topic && (
                      <div className="text-[10px] text-[var(--muted)] leading-[1.3]">
                        {slot.topic}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Pomodoro */}
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[14px] px-6 py-5 max-w-[340px] flex flex-col gap-3.5">
        <div className="text-[11px] font-bold text-[var(--muted)] uppercase tracking-[0.06em]">
          Pomodoro — {isWork ? "Focus" : "Break"}
        </div>

        <div
          className="font-[family-name:var(--font-syne)] text-[48px] font-extrabold leading-none"
          style={{ color: phaseColor }}
        >
          {fmt(remaining)}
        </div>

        {/* Progress bar */}
        <div className="h-[3px] rounded-sm bg-[var(--surface3)]">
          <div
            className="h-full rounded-sm transition-[width] duration-1000 ease-linear"
            style={{
              background: phaseColor,
              width: `${(1 - pct) * 100}%`,
            }}
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setRunning((r) => !r)}
            className="flex-1 border-0 rounded-lg py-2.5 font-[family-name:var(--font-syne)] text-[13px] font-bold cursor-pointer"
            style={{
              background: running ? "var(--surface2)" : "var(--accent)",
              color: running ? "var(--muted)" : "#fff",
            }}
          >
            {running ? "Pause" : "Start"}
          </button>
          <button
            onClick={reset}
            className="bg-transparent border border-[var(--border)] rounded-lg px-3.5 py-2.5 text-[var(--muted)] text-[13px] cursor-pointer"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
