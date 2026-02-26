"use client";

import { useState, useMemo } from "react";
import { SUBJECT_META } from "@/data/constants";
import type { SubjectKey } from "@/data/subjects";
import { getAllFormulae } from "@/lib/briefing";

export default function FormulasPage() {
  const [search, setSearch] = useState("");
  const allFormulae = useMemo(() => getAllFormulae(), []);

  const filtered = useMemo(() => {
    if (!search.trim()) return allFormulae;
    const q = search.toLowerCase();
    return allFormulae.filter((e) => e.formula.toLowerCase().includes(q));
  }, [allFormulae, search]);

  const grouped = useMemo(() => {
    const map: Record<string, { formula: string }[]> = {};
    for (const e of filtered) {
      (map[e.subject] ??= []).push({ formula: e.formula });
    }
    return map;
  }, [filtered]);

  const subjectOrder = (Object.keys(SUBJECT_META) as SubjectKey[]).filter(
    (k) => grouped[k]?.length,
  );

  return (
    <div className="p-10 max-w-[800px]">
      <div className="mb-8">
        <h1 className="font-[family-name:var(--font-syne)] text-[28px] font-extrabold mb-1.5">
          Formula Sheet
        </h1>
        <p className="text-[var(--muted)] text-[14px]">
          {allFormulae.length} formulae across all subjects
        </p>
      </div>

      {/* Search */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search formulae…"
        className="w-full max-w-[400px] rounded-[10px] px-4 py-[10px] mb-8 text-[13px] bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] placeholder:text-[var(--muted)] outline-none focus:border-[var(--accent)] transition-colors"
      />

      {filtered.length === 0 && search && (
        <p className="text-[var(--muted)] text-[14px]">
          No formulae match &ldquo;{search}&rdquo;.
        </p>
      )}

      {subjectOrder.map((sk) => {
        const meta = SUBJECT_META[sk];
        const formulae = grouped[sk];
        return (
          <div key={sk} className="mb-8">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[var(--border)]">
              <div
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ background: meta.color }}
              />
              <span className="font-[family-name:var(--font-syne)] font-bold text-[15px]">
                {meta.name}
              </span>
              <span className="text-[11px] text-[var(--muted)] ml-1">
                {formulae.length}
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              {formulae.map((e, i) => (
                <div
                  key={i}
                  className="bg-[var(--surface2)] rounded-[8px] px-4 py-[9px] text-[13px] font-mono"
                  style={{ borderLeft: `3px solid ${meta.color}30` }}
                >
                  {e.formula}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
