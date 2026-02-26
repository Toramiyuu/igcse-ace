"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { examStrategy } from "@/data/strategy";
import type { SubjectKey } from "@/data/subjects";
import { SUBJECT_META } from "@/data/constants";
import { getWeakestTopics, getKeyFormulae } from "@/lib/briefing";
import { topicNotes } from "@/data/notes";

interface ExamEvent {
  subj: string;
  name: string;
  paper: string;
  date: string;
  session: string;
  duration: string;
  code: string;
  color: string;
}

interface Props {
  event: ExamEvent | null;
  onClose: () => void;
}

export default function ExamBriefingModal({ event, onClose }: Props) {
  const [weakTopics, setWeakTopics] = useState<string[]>([]);
  const [formulae, setFormulae] = useState<string[]>([]);

  useEffect(() => {
    if (!event) return;
    setWeakTopics(getWeakestTopics(event.subj));
    setFormulae(getKeyFormulae(event.subj));
  }, [event]);

  useEffect(() => {
    if (!event) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [event, onClose]);

  if (!event) return null;

  const sk = event.subj as SubjectKey;
  const color = SUBJECT_META[sk]?.color ?? event.color;
  const strategy = examStrategy[sk];

  const topicNoteKeys = Object.keys(topicNotes).filter((k) =>
    weakTopics.includes(k),
  );

  function topicLabel(key: string): string {
    const parts = key.split("-");
    return parts
      .slice(2)
      .join(" ")
      .replace(/^topics /, "Topic ");
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="bg-[var(--surface)] border border-[var(--border)] rounded-[16px] w-full max-w-[520px] max-h-[85vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="px-6 pt-5 pb-4 border-b border-[var(--border)]"
          style={{ borderLeft: `4px solid ${color}` }}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="font-[family-name:var(--font-syne)] font-extrabold text-[17px] mb-0.5">
                {event.name} — {event.paper}
              </div>
              <div className="text-[var(--muted)] text-[13px]">
                {event.date} · {event.session} · {event.duration}
                {event.code && (
                  <span className="ml-2 opacity-60">{event.code}</span>
                )}
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-[var(--muted)] hover:text-[var(--text)] text-[18px] leading-none border-0 bg-transparent cursor-pointer shrink-0"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="px-6 py-5 flex flex-col gap-5">
          {/* Weakest topics */}
          {weakTopics.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--muted)] mb-2">
                Topics to review
              </div>
              <div className="flex flex-wrap gap-2">
                {topicNoteKeys.map((key) => (
                  <span
                    key={key}
                    className="px-3 py-1 rounded-full text-[12px] font-semibold"
                    style={{
                      background: `${color}18`,
                      color,
                      border: `1px solid ${color}40`,
                    }}
                  >
                    {topicLabel(key)}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Key formulae */}
          {formulae.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--muted)] mb-2">
                Key formulae
              </div>
              <div className="flex flex-col gap-1.5">
                {formulae.map((f, i) => (
                  <div
                    key={i}
                    className="bg-[var(--surface2)] rounded-[8px] px-3 py-2 text-[13px] font-mono"
                  >
                    {f}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Strategy tip */}
          {strategy && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--muted)] mb-2">
                Exam strategy
              </div>
              <div className="bg-[var(--surface2)] rounded-[10px] px-4 py-3 text-[13px] leading-[1.6]">
                {strategy}
              </div>
            </div>
          )}

          {/* CTA */}
          <Link
            href={`/dashboard/subjects/${event.subj}`}
            onClick={onClose}
            className="block text-center py-3 rounded-[10px] font-bold text-[14px] no-underline text-black"
            style={{ background: color }}
          >
            Start Focused Review →
          </Link>
        </div>
      </div>
    </div>
  );
}
