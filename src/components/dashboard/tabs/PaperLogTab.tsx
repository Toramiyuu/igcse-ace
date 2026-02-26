"use client";

import { useState, useEffect } from "react";

interface PaperOption {
  label: string;
  max: number;
}

interface Attempt {
  subj: string;
  paper: string;
  year: string;
  score: number;
  max: number;
  date: string;
}

const inputCls =
  "bg-[var(--surface)] border border-[var(--border)] rounded-lg px-[10px] py-2 text-[var(--text)] text-[13px] outline-none";

function loadAll(): Attempt[] {
  try {
    const raw = localStorage.getItem("igcse-paper-log");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveAll(all: Attempt[]) {
  localStorage.setItem("igcse-paper-log", JSON.stringify(all));
}

export default function PaperLogTab({
  subjectKey,
  color,
  paperOptions,
}: {
  subjectKey: string;
  color: string;
  paperOptions: PaperOption[];
}) {
  const [log, setLog] = useState<Attempt[]>([]);
  const [year, setYear] = useState("");
  const [paperIdx, setPaperIdx] = useState(0);
  const [score, setScore] = useState("");

  useEffect(() => {
    setLog(loadAll().filter((a) => a.subj === subjectKey));
  }, [subjectKey]);

  function addAttempt() {
    const po = paperOptions[paperIdx];
    if (!po || !year || !score) return;
    const attempt: Attempt = {
      subj: subjectKey,
      paper: po.label,
      year,
      score: Number(score),
      max: po.max,
      date: new Date().toISOString().slice(0, 10),
    };
    const all = loadAll();
    all.push(attempt);
    saveAll(all);
    setLog(all.filter((a) => a.subj === subjectKey));
    setYear("");
    setScore("");
  }

  function deleteAttempt(idx: number) {
    const target = log[idx];
    const all = loadAll();
    const fi = all.findIndex(
      (a) =>
        a.subj === target.subj &&
        a.date === target.date &&
        a.paper === target.paper &&
        a.score === target.score,
    );
    if (fi !== -1) all.splice(fi, 1);
    saveAll(all);
    setLog(all.filter((a) => a.subj === subjectKey));
  }

  const currentMax = paperOptions[paperIdx]?.max ?? "?";

  return (
    <div>
      {/* Add form */}
      <div className="flex gap-2 mb-6 flex-wrap items-center">
        <input
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Year (e.g. 2024)"
          className={`${inputCls} w-[140px]`}
        />
        <select
          value={paperIdx}
          onChange={(e) => setPaperIdx(Number(e.target.value))}
          className={`${inputCls} w-[290px]`}
        >
          {paperOptions.map((po, i) => (
            <option key={i} value={i}>
              {po.label} (/{po.max})
            </option>
          ))}
        </select>
        <input
          value={score}
          onChange={(e) => setScore(e.target.value)}
          placeholder={`Score /${currentMax}`}
          type="number"
          min={0}
          max={typeof currentMax === "number" ? currentMax : undefined}
          className={`${inputCls} w-[120px]`}
        />
        <button
          onClick={addAttempt}
          className="rounded-lg px-[18px] py-2 text-[13px] font-semibold cursor-pointer border-0"
          style={{ background: color, color: "#fff" }}
        >
          Log Attempt
        </button>
      </div>

      {log.length === 0 ? (
        <p className="text-[var(--muted)] text-[14px]">
          No attempts logged yet.
        </p>
      ) : (
        <div className="flex flex-col gap-2">
          {log.map((a, i) => {
            const pct = Math.round((a.score / a.max) * 100);
            return (
              <div
                key={i}
                className="bg-[var(--surface)] rounded-[10px] px-4 py-3 flex items-center gap-3"
                style={{ border: `1px solid ${color}20` }}
              >
                <div className="flex-1">
                  <div className="font-semibold text-[13px]">{a.paper}</div>
                  <div className="text-[var(--muted)] text-[12px] mt-0.5">
                    {a.year} · {a.date}
                  </div>
                </div>
                <div
                  className="font-[family-name:var(--font-syne)] font-bold text-[18px]"
                  style={{ color }}
                >
                  {a.score}/{a.max}
                </div>
                <div className="text-[12px] text-[var(--muted)] min-w-[38px] text-right">
                  {pct}%
                </div>
                <button
                  onClick={() => deleteAttempt(i)}
                  className="bg-transparent border border-[var(--border)] rounded-md px-2 py-1 text-[var(--muted)] text-[12px] cursor-pointer leading-none"
                >
                  ×
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
