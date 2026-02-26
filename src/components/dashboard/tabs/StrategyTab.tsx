"use client";

import type { GradeBounds } from "@/data/papers";

export default function StrategyTab({
  strategy,
  color,
  gradeBounds,
}: {
  strategy: string;
  color: string;
  gradeBounds: GradeBounds;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div
        className="rounded-[10px] px-[18px] py-4 text-[14px] leading-[1.65]"
        style={{
          background: `${color}0d`,
          border: `1px solid ${color}28`,
          borderLeft: `3px solid ${color}`,
        }}
      >
        {strategy}
      </div>

      <div>
        <div className="text-[11px] font-bold text-[var(--muted)] uppercase tracking-[0.06em] mb-3">
          Grade Boundaries (%)
        </div>
        <div className="flex gap-[10px]">
          {(["astar", "a", "b", "c"] as const).map((g) => (
            <div
              key={g}
              className="flex-1 bg-[var(--surface)] border border-[var(--border)] rounded-[10px] p-3 text-center"
            >
              <div
                className="font-[family-name:var(--font-syne)] text-[20px] font-bold"
                style={{ color: g === "astar" ? color : "var(--text)" }}
              >
                {g === "astar" ? "A*" : g.toUpperCase()}
              </div>
              <div className="text-[13px] text-[var(--muted)] mt-1">
                {gradeBounds[g]}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
