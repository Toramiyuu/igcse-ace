"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { generateFlashcards, loadSR, updateSR, saveSR } from "@/lib/flashcards";
import type { Flashcard } from "@/lib/flashcards";
import { pickMockCards, computeBreakdown } from "@/lib/mockExam";
import type { MockResult } from "@/lib/mockExam";
import { createClient } from "@/lib/supabase/client";
import ResultsScreen from "./ResultsScreen";

const CARD_COUNT = 20;
const SECONDS_PER_CARD = 30;

type Phase = "start" | "quiz" | "results";

export default function MockExamPage() {
  const [phase, setPhase] = useState<Phase>("start");
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [index, setIndex] = useState(0);
  const [results, setResults] = useState<MockResult[]>([]);
  const [timeLeft, setTimeLeft] = useState(SECONDS_PER_CARD);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const supabaseRef = useRef(createClient());
  const indexRef = useRef(index);
  const resultsRef = useRef(results);
  const cardsRef = useRef(cards);
  indexRef.current = index;
  resultsRef.current = results;
  cardsRef.current = cards;

  const advance = useCallback(
    (passed: boolean) => {
      const i = indexRef.current;
      const card = cardsRef.current[i];
      const newResults = [...resultsRef.current, { card, passed }];
      setResults(newResults);
      if (i + 1 < cardsRef.current.length) {
        setIndex(i + 1);
        setTimeLeft(SECONDS_PER_CARD);
      } else {
        finishQuiz(newResults);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  function startQuiz() {
    const allCards = generateFlashcards();
    const sr = loadSR();
    const picked = pickMockCards(allCards, sr, CARD_COUNT);
    setCards(picked);
    setIndex(0);
    setResults([]);
    setTimeLeft(SECONDS_PER_CARD);
    setPhase("quiz");
  }

  async function finishQuiz(finalResults: MockResult[]) {
    if (timerRef.current) clearInterval(timerRef.current);
    setPhase("results");
    setSaving(true);

    let sr = loadSR();
    for (const { card, passed } of finalResults) {
      sr = updateSR(sr, card.id, passed);
    }
    saveSR(sr);

    const {
      data: { user },
    } = await supabaseRef.current.auth.getUser();
    if (user) {
      const correct = finalResults.filter((r) => r.passed).length;
      const breakdown = computeBreakdown(finalResults);
      const { error } = await supabaseRef.current.from("mock_results").insert({
        user_id: user.id,
        score: correct,
        max: finalResults.length,
        breakdown: {
          def: breakdown.def,
          formula: breakdown.formula,
          fact: breakdown.fact,
        },
        date: new Date().toISOString().slice(0, 10),
      });
      if (error) {
        console.error("Failed to save mock result:", error.message);
        setSaveError(true);
      }
    }
    setSaving(false);
  }

  useEffect(() => {
    if (phase !== "quiz") return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          advance(false);
          return SECONDS_PER_CARD;
        }
        return t - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [phase, advance]);

  if (phase === "start") {
    return (
      <div className="p-10 max-w-[540px]">
        <h1 className="font-[family-name:var(--font-syne)] text-[28px] font-extrabold mb-2">
          Mock Exam
        </h1>
        <p className="text-[var(--muted)] text-[14px] mb-8 leading-[1.7]">
          20 cards · 30 seconds each · Auto-advances when timer expires. Overdue
          cards are prioritised. Both sides shown at once — decide if you knew
          it before seeing the answer.
        </p>
        <button
          onClick={startQuiz}
          className="bg-[var(--accent)] text-black font-bold px-8 py-[14px] rounded-[10px] text-[16px] w-full border-0 cursor-pointer"
        >
          Start Mock Exam
        </button>
      </div>
    );
  }

  if (phase === "results") {
    return (
      <ResultsScreen
        results={results}
        breakdown={computeBreakdown(results)}
        saving={saving}
        saveError={saveError}
      />
    );
  }

  const card = cards[index];
  const progress = ((index + 1) / cards.length) * 100;
  const timerPct = (timeLeft / SECONDS_PER_CARD) * 100;

  return (
    <div className="p-10 max-w-[700px]">
      {/* Progress */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 h-1.5 bg-[var(--surface2)] rounded-full overflow-hidden">
          <div
            className="h-full bg-[var(--accent)] rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-[12px] text-[var(--muted)] shrink-0">
          {index + 1}/{cards.length}
        </span>
      </div>

      {/* Countdown bar */}
      <div className="h-1 bg-[var(--surface2)] rounded-full overflow-hidden mb-7">
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{
            width: `${timerPct}%`,
            background:
              timerPct > 50
                ? "var(--topic-done)"
                : timerPct > 25
                  ? "var(--accent)"
                  : "#ef4444",
          }}
        />
      </div>

      {/* Card */}
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[14px] p-7 mb-5">
        <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--muted)] mb-4 flex items-center gap-2">
          <span
            className="px-2 py-0.5 rounded text-[10px]"
            style={{
              background:
                card.type === "def"
                  ? "rgba(240,192,64,0.15)"
                  : card.type === "formula"
                    ? "rgba(240,144,64,0.15)"
                    : "rgba(64,208,240,0.15)",
              color:
                card.type === "def"
                  ? "var(--accent)"
                  : card.type === "formula"
                    ? "var(--type-formula)"
                    : "var(--type-fact)",
            }}
          >
            {card.type}
          </span>
          {card.topicLabel}
        </div>
        <div className="font-semibold text-[15px] mb-5 leading-[1.5]">
          {card.front}
        </div>
        <div className="border-t border-[var(--border)] my-4" />
        <div className="text-[var(--muted)] text-[14px] leading-[1.6]">
          {card.back}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => advance(false)}
          className="flex-1 py-4 rounded-[10px] font-bold text-[15px] border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:border-[#ef4444] hover:text-[#ef4444] transition-colors duration-150"
        >
          ✗ Don&apos;t know
        </button>
        <button
          onClick={() => advance(true)}
          className="flex-1 py-4 rounded-[10px] font-bold text-[15px] border-0 text-black transition-colors duration-150"
          style={{ background: "var(--topic-done)" }}
        >
          ✓ I know this
        </button>
      </div>
      <div className="text-center mt-4 text-[13px] text-[var(--muted)]">
        {timeLeft}s remaining
      </div>
    </div>
  );
}
