"use client";

import { useEffect, useState } from "react";

type DayData = { minutes: number; actions: number };
type StreakData = Record<string, DayData>;

function toYMD(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function cellColor(actions: number): string {
  if (actions === 0) return "var(--streak-empty)";
  if (actions <= 2) return "var(--streak-low)";
  if (actions <= 5) return "var(--streak-mid)";
  return "var(--streak-high)";
}

function computeStreaks(data: StreakData): {
  current: number;
  longest: number;
} {
  const today = new Date();
  let current = 0;
  for (let i = 0; i < 365; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    if ((data[toYMD(d)]?.actions ?? 0) > 0) {
      current++;
    } else if (i > 0) {
      break;
    }
  }

  const activeDays = Object.keys(data)
    .filter((k) => data[k].actions > 0)
    .sort();
  let longest = 0;
  let run = 0;
  let prev: Date | null = null;
  for (const key of activeDays) {
    const d = new Date(key);
    if (prev && Math.round((d.getTime() - prev.getTime()) / 86400000) === 1) {
      run++;
    } else {
      longest = Math.max(longest, run);
      run = 1;
    }
    prev = d;
  }
  longest = Math.max(longest, run);

  return { current, longest };
}

const DAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function StreakHeatmap() {
  const [cells, setCells] = useState<{ date: string; actions: number }[]>([]);
  const [current, setCurrent] = useState(0);
  const [longest, setLongest] = useState(0);

  useEffect(() => {
    let data: StreakData = {};
    try {
      const raw = localStorage.getItem("igcse-streak");
      if (raw) data = JSON.parse(raw);
    } catch {}

    const { current, longest } = computeStreaks(data);
    setCurrent(current);
    setLongest(longest);

    const today = new Date();
    const startRaw = new Date(today);
    startRaw.setDate(today.getDate() - 83);
    const dow = startRaw.getDay();
    const toMon = dow === 0 ? 6 : dow - 1;
    startRaw.setDate(startRaw.getDate() - toMon);

    const built: { date: string; actions: number }[] = [];
    for (let i = 0; i < 84; i++) {
      const d = new Date(startRaw);
      d.setDate(startRaw.getDate() + i);
      const key = toYMD(d);
      built.push({ date: key, actions: data[key]?.actions ?? 0 });
    }
    setCells(built);
  }, []);

  if (cells.length === 0) return null;

  return (
    <div style={{ marginBottom: 36 }}>
      {/* Stat chips */}
      <div
        style={{
          display: "flex",
          gap: 20,
          marginBottom: 14,
          alignItems: "flex-end",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: 24,
              fontWeight: 800,
              color: "var(--accent)",
              lineHeight: 1,
            }}
          >
            {current}
          </div>
          <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 3 }}>
            day streak
          </div>
        </div>
        <div
          style={{
            width: 1,
            height: 32,
            background: "var(--border)",
            flexShrink: 0,
          }}
        />
        <div>
          <div
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: 24,
              fontWeight: 800,
              lineHeight: 1,
            }}
          >
            {longest}
          </div>
          <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 3 }}>
            longest streak
          </div>
        </div>
      </div>

      {/* Grid */}
      <div style={{ display: "flex", gap: 6, alignItems: "flex-start" }}>
        {/* Day labels */}
        <div
          style={{
            display: "grid",
            gridTemplateRows: "repeat(7, 14px)",
            gap: 3,
            paddingTop: 1,
          }}
        >
          {DAY_LABELS.map((label, i) => (
            <div
              key={label}
              style={{
                fontSize: 9,
                color: "var(--muted)",
                lineHeight: "14px",
                opacity: i % 2 === 0 ? 1 : 0,
                userSelect: "none",
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* Heatmap cells — column-major: Mon–Sun per column, 12 columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 14px)",
            gridTemplateRows: "repeat(7, 14px)",
            gridAutoFlow: "column",
            gap: 3,
          }}
        >
          {cells.map((cell) => (
            <div
              key={cell.date}
              title={`${cell.date}: ${cell.actions} action${cell.actions !== 1 ? "s" : ""}`}
              style={{
                width: 14,
                height: 14,
                borderRadius: 3,
                background: cellColor(cell.actions),
              }}
            />
          ))}
        </div>
      </div>

      {/* Legend */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          marginTop: 8,
          paddingLeft: 30,
        }}
      >
        <span style={{ fontSize: 10, color: "var(--muted)", marginRight: 2 }}>
          Less
        </span>
        {[0, 1, 3, 6].map((n) => (
          <div
            key={n}
            style={{
              width: 10,
              height: 10,
              borderRadius: 2,
              background: cellColor(n),
            }}
          />
        ))}
        <span style={{ fontSize: 10, color: "var(--muted)", marginLeft: 2 }}>
          More
        </span>
      </div>
    </div>
  );
}
