"use client";

import { useState, useEffect, useMemo } from "react";
import {
  generateFlashcards,
  isDue,
  updateSR,
  loadSR,
  saveSR,
} from "@/lib/flashcards";
import type { Flashcard, SRData } from "@/lib/flashcards";
import { syncTopicConfidence } from "@/lib/topicSync";
import { recordActivity } from "@/lib/activity";

const SUBJECT_LABELS: Record<string, string> = {
  ict: "ICT",
  cs: "CS",
  business: "Business",
  engfirst: "Eng 1st",
  englit: "Eng Lit",
  science: "Science",
  addmath: "Add Maths",
  gp: "GP",
};

const TYPE_COLOR: Record<string, string> = {
  def: "var(--accent)",
  fact: "var(--type-fact)",
  formula: "var(--type-formula)",
};

type Mode = "browse" | "quiz" | "done";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function FlashcardsPage() {
  const allCards = useMemo(() => generateFlashcards(), []);
  const [srData, setSRData] = useState<SRData>({});
  const [filter, setFilter] = useState("all");
  const [mode, setMode] = useState<Mode>("browse");
  const [queue, setQueue] = useState<Flashcard[]>([]);
  const [qIdx, setQIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [results, setResults] = useState({ good: 0, bad: 0 });

  useEffect(() => {
    setSRData(loadSR());
  }, []);

  const subjects = useMemo(
    () => [...new Set(allCards.map((c) => c.subject))],
    [allCards],
  );
  const filtered = useMemo(
    () =>
      filter === "all"
        ? allCards
        : allCards.filter((c) => c.subject === filter),
    [allCards, filter],
  );
  const dueCards = useMemo(
    () => filtered.filter((c) => isDue(srData[c.id])),
    [filtered, srData],
  );

  function startQuiz() {
    if (dueCards.length === 0) return;
    setQueue(shuffle(dueCards));
    setQIdx(0);
    setFlipped(false);
    setResults({ good: 0, bad: 0 });
    setMode("quiz");
  }

  function rate(passed: boolean) {
    const card = queue[qIdx];
    const next = updateSR(srData, card.id, passed);
    setSRData(next);
    saveSR(next);
    syncTopicConfidence(next);
    recordActivity();
    setResults((r) => ({
      good: r.good + (passed ? 1 : 0),
      bad: r.bad + (passed ? 0 : 1),
    }));
    if (qIdx + 1 >= queue.length) {
      setMode("done");
    } else {
      setQIdx((i) => i + 1);
      setFlipped(false);
    }
  }

  /* ── Browse ── */
  if (mode === "browse") {
    return (
      <div className="p-10 max-w-[860px]">
        <div className="mb-7">
          <h1 className="font-[family-name:var(--font-syne)] text-[28px] font-extrabold mb-1.5">
            Flashcards
          </h1>
          <p className="text-[var(--muted)] text-[14px]">
            {allCards.length} cards · {dueCards.length} due today
          </p>
        </div>

        {/* Subject filter */}
        <div className="flex gap-1.5 flex-wrap mb-6">
          {["all", ...subjects].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className="rounded-full px-[14px] py-[5px] text-[12px] font-medium cursor-pointer border transition-colors duration-150"
              style={{
                background: filter === s ? "var(--accent)" : "var(--surface)",
                borderColor: filter === s ? "var(--accent)" : "var(--border)",
                color: filter === s ? "#fff" : "var(--muted)",
              }}
            >
              {s === "all" ? "All subjects" : (SUBJECT_LABELS[s] ?? s)}
            </button>
          ))}
        </div>

        {/* Start quiz */}
        <button
          onClick={startQuiz}
          className="rounded-[12px] px-7 py-[14px] font-[family-name:var(--font-syne)] text-[15px] font-bold border-0 mb-8 transition-colors duration-150"
          style={{
            background:
              dueCards.length > 0 ? "var(--accent)" : "var(--surface)",
            color: dueCards.length > 0 ? "#fff" : "var(--muted)",
            cursor: dueCards.length > 0 ? "pointer" : "default",
          }}
        >
          {dueCards.length > 0
            ? `Study ${dueCards.length} due card${dueCards.length !== 1 ? "s" : ""}`
            : "All caught up!"}
        </button>

        {/* Type breakdown */}
        <div className="flex gap-3 mb-8">
          {(["def", "fact", "formula"] as const).map((type) => (
            <div
              key={type}
              className="flex-1 bg-[var(--surface)] border border-[var(--border)] rounded-[10px] px-4 py-[10px]"
              style={{ borderLeft: `3px solid ${TYPE_COLOR[type]}` }}
            >
              <div className="font-[family-name:var(--font-syne)] text-[20px] font-extrabold">
                {filtered.filter((c) => c.type === type).length}
              </div>
              <div className="text-[11px] text-[var(--muted)] mt-0.5 capitalize">
                {type}s
              </div>
            </div>
          ))}
        </div>

        {/* Due preview */}
        <div className="text-[11px] font-bold text-[var(--muted)] uppercase tracking-[0.06em] mb-[10px]">
          Due Now
        </div>
        <div className="flex flex-col gap-1.5">
          {dueCards.length === 0 && (
            <p className="text-[14px] text-[var(--muted)]">
              No cards due for this selection.
            </p>
          )}
          {dueCards.slice(0, 6).map((card) => (
            <div
              key={card.id}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-lg px-[14px] py-[10px] flex justify-between items-center"
            >
              <span className="text-[13px]">{card.front}</span>
              <span
                className="text-[10px] font-semibold uppercase"
                style={{ color: TYPE_COLOR[card.type] }}
              >
                {card.type}
              </span>
            </div>
          ))}
          {dueCards.length > 6 && (
            <p className="text-[12px] text-[var(--muted)] text-center mt-0.5">
              +{dueCards.length - 6} more
            </p>
          )}
        </div>
      </div>
    );
  }

  /* ── Quiz ── */
  if (mode === "quiz") {
    const card = queue[qIdx];
    return (
      <div className="p-10 max-w-[620px] mx-auto">
        {/* Progress bar */}
        <div className="flex items-center gap-3 mb-9">
          <div className="flex-1 h-[3px] rounded-sm bg-[var(--surface3)]">
            <div
              className="h-full rounded-sm bg-[var(--accent)] transition-[width] duration-300"
              style={{ width: `${(qIdx / queue.length) * 100}%` }}
            />
          </div>
          <span className="text-[12px] text-[var(--muted)] whitespace-nowrap">
            {qIdx + 1} / {queue.length}
          </span>
          <button
            onClick={() => setMode("browse")}
            className="bg-transparent border border-[var(--border)] rounded-md px-[10px] py-1 text-[var(--muted)] text-[12px] cursor-pointer"
          >
            Exit
          </button>
        </div>

        {/* Card */}
        <div
          onClick={() => !flipped && setFlipped(true)}
          className="relative bg-[var(--surface)] border border-[var(--border)] rounded-[18px] px-10 py-12 min-h-[220px] flex flex-col items-center justify-center text-center mb-6"
          style={{ cursor: flipped ? "default" : "pointer" }}
        >
          <span
            className="absolute top-[14px] left-[18px] text-[10px] font-semibold uppercase tracking-[0.08em]"
            style={{ color: TYPE_COLOR[card.type] }}
          >
            {card.type} · {card.topicLabel}
          </span>
          <div
            className="text-[16px] leading-[1.65] max-w-[480px]"
            style={{ fontWeight: flipped ? 400 : 600 }}
          >
            {flipped ? card.back : card.front}
          </div>
          {!flipped && (
            <div className="absolute bottom-[14px] text-[11px] text-[var(--muted)]">
              tap to reveal
            </div>
          )}
        </div>

        {/* Rating */}
        {flipped && (
          <div className="flex gap-3">
            <button
              onClick={() => rate(false)}
              className="flex-1 bg-[var(--surface)] rounded-[12px] py-[14px] font-[family-name:var(--font-syne)] text-[15px] font-bold cursor-pointer"
              style={{
                border: "1px solid #f0606040",
                color: "#f06060",
              }}
            >
              Again
            </button>
            <button
              onClick={() => rate(true)}
              className="flex-1 bg-[var(--surface)] rounded-[12px] py-[14px] font-[family-name:var(--font-syne)] text-[15px] font-bold cursor-pointer"
              style={{
                border: "1px solid #52b78840",
                color: "var(--topic-done)",
              }}
            >
              Good
            </button>
          </div>
        )}
      </div>
    );
  }

  /* ── Done ── */
  return (
    <div className="p-10 pt-[100px] max-w-[620px] mx-auto text-center">
      <div className="font-[family-name:var(--font-syne)] text-[56px] font-extrabold text-[var(--accent)] leading-none mb-2">
        {Math.round((results.good / queue.length) * 100)}%
      </div>
      <p className="text-[var(--muted)] mb-2">
        {results.good} correct · {results.bad} to review
      </p>
      <p className="text-[var(--muted)] text-[12px] mb-9">
        Due cards will reschedule automatically
      </p>
      <button
        onClick={() => setMode("browse")}
        className="bg-[var(--accent)] border-0 rounded-[12px] px-8 py-[14px] text-white font-[family-name:var(--font-syne)] text-[15px] font-bold cursor-pointer"
      >
        Back to Flashcards
      </button>
    </div>
  );
}
