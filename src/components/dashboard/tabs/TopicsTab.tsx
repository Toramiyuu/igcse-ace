"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { recordActivity } from "@/lib/activity";

type TopicState = 0 | 1 | 2;

const DOT_CLASS: Record<TopicState, string> = {
  0: "bg-[var(--surface3)]",
  1: "bg-[var(--topic-partial)]",
  2: "bg-[var(--topic-done)]",
};

interface TopicGroup {
  label: string;
  key: string;
  items: [string, string][];
}

const NOTES_KEY = "igcse-topic-notes";

function loadNotes(): Record<string, string> {
  try {
    const raw = localStorage.getItem(NOTES_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export default function TopicsTab({
  subjectKey,
  color,
  topicGroups,
}: {
  subjectKey: string;
  color: string;
  topicGroups: TopicGroup[];
}) {
  const [states, setStates] = useState<Record<string, TopicState>>({});
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [openNote, setOpenNote] = useState<string | null>(null);
  const debounceTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>(
    {},
  );
  const notesRef = useRef(notes);
  notesRef.current = notes;

  useEffect(() => {
    try {
      const raw = localStorage.getItem("igcse-topics");
      if (raw) setStates(JSON.parse(raw));
    } catch {}
    setNotes(loadNotes());
  }, []);

  function cycle(key: string) {
    const next = (((states[key] ?? 0) + 1) % 3) as TopicState;
    const updated = { ...states, [key]: next };
    setStates(updated);
    try {
      localStorage.setItem("igcse-topics", JSON.stringify(updated));
    } catch {}
    recordActivity();
  }

  const handleNoteChange = useCallback((key: string, value: string) => {
    const updated = { ...notesRef.current, [key]: value };
    setNotes(updated);
    clearTimeout(debounceTimers.current[key]);
    debounceTimers.current[key] = setTimeout(() => {
      try {
        localStorage.setItem(NOTES_KEY, JSON.stringify(notesRef.current));
      } catch {}
    }, 500);
  }, []);

  const total = topicGroups.reduce((s, g) => s + g.items.length, 0);
  const done = topicGroups.reduce(
    (s, g) =>
      s + g.items.filter(([n]) => states[`${subjectKey}-${n}`] === 2).length,
    0,
  );

  if (topicGroups.length === 0)
    return (
      <p className="text-[var(--muted)] text-[14px]">
        No topic checklist available for this subject.
      </p>
    );

  return (
    <div>
      {/* Progress bar */}
      <div className="flex items-center gap-3 mb-5">
        <div className="flex-1 h-1 rounded-sm bg-[var(--surface3)]">
          <div
            className="h-full rounded-sm transition-[width] duration-300"
            style={{
              background: color,
              width: `${total > 0 ? (done / total) * 100 : 0}%`,
            }}
          />
        </div>
        <span className="text-[12px] text-[var(--muted)] whitespace-nowrap">
          {done} / {total} done
        </span>
      </div>

      {topicGroups.map((group) => (
        <div key={group.key} className="mb-6">
          <div className="text-[11px] font-bold text-[var(--muted)] uppercase tracking-[0.06em] mb-[10px]">
            {group.label}
          </div>
          <div className="flex flex-col gap-0.5">
            {group.items.map(([num, name]) => {
              const k = `${subjectKey}-${num}`;
              const state = (states[k] ?? 0) as TopicState;
              const hasNote = !!(notes[k] && notes[k].trim());
              const isNoteOpen = openNote === k;
              return (
                <div key={k}>
                  <div
                    className="flex items-center gap-[10px] px-[10px] py-[7px] rounded-lg transition-[background] duration-150"
                    style={{
                      background: state === 2 ? `${color}0a` : "transparent",
                    }}
                  >
                    <div
                      onClick={() => cycle(k)}
                      className="flex items-center gap-[10px] flex-1 cursor-pointer min-w-0"
                    >
                      <div
                        className={`w-[10px] h-[10px] rounded-full shrink-0 transition-[background] duration-200 ${DOT_CLASS[state]}`}
                      />
                      <span
                        className="text-[13px]"
                        style={{
                          color: state === 0 ? "var(--muted)" : "var(--text)",
                          textDecoration: state === 2 ? "line-through" : "none",
                          opacity: state === 2 ? 0.55 : 1,
                        }}
                      >
                        {num}. {name}
                      </span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenNote(isNoteOpen ? null : k);
                      }}
                      className="shrink-0 w-[22px] h-[22px] flex items-center justify-center rounded text-[13px] border-0 bg-transparent cursor-pointer transition-opacity duration-150"
                      style={{
                        color: hasNote ? color : "var(--muted)",
                        opacity: hasNote ? 1 : 0.4,
                      }}
                      title={isNoteOpen ? "Close note" : "Add note"}
                    >
                      ✏️
                    </button>
                  </div>
                  {isNoteOpen && (
                    <div className="px-[10px] pb-[6px]">
                      <textarea
                        autoFocus
                        value={notes[k] ?? ""}
                        onChange={(e) => handleNoteChange(k, e.target.value)}
                        placeholder="Add a personal note for this topic…"
                        className="w-full rounded-[8px] px-3 py-2 text-[12px] resize-y border border-[var(--border)] bg-[var(--surface2)] text-[var(--text)] placeholder:text-[var(--muted)] outline-none focus:border-[var(--accent)] transition-colors"
                        style={{ minHeight: "60px" }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
