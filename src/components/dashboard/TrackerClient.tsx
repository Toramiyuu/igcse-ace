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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "680px",
        }}
      >
        {events.map((e, i) => (
          <button
            key={i}
            onClick={() => !e.past && setSelected(e)}
            style={{
              background: "var(--surface)",
              borderRadius: "10px",
              padding: "16px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              textAlign: "left",
              border: `1px solid ${e.past ? "var(--border)" : `${e.color}30`}`,
              borderLeft: `3px solid ${e.past ? "var(--border)" : e.color}`,
              opacity: e.past ? 0.45 : 1,
              cursor: e.past ? "default" : "pointer",
            }}
          >
            <div>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: "15px",
                  marginBottom: "4px",
                  color: "var(--text)",
                }}
              >
                {e.name} — {e.paper}
              </div>
              <div style={{ color: "var(--muted)", fontSize: "13px" }}>
                {e.date} · {e.session} · {e.duration}
                {e.code && (
                  <span style={{ marginLeft: "8px", opacity: 0.6 }}>
                    {e.code}
                  </span>
                )}
              </div>
            </div>
            {!e.past ? (
              <div
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 800,
                  fontSize: "22px",
                  minWidth: "52px",
                  textAlign: "right",
                  flexShrink: 0,
                  color: e.color,
                }}
              >
                {e.days}d
              </div>
            ) : (
              <div
                style={{
                  fontSize: "11px",
                  color: "var(--muted)",
                  flexShrink: 0,
                }}
              >
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
