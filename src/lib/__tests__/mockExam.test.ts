import { describe, it, expect } from "vitest";
import { pickMockCards, computeBreakdown } from "@/lib/mockExam";
import type { Flashcard } from "@/lib/flashcards";
import type { SRData } from "@/lib/flashcards";

function makeCard(id: string, type: "def" | "fact" | "formula" = "def"): Flashcard {
  return {
    id,
    subject: "ict",
    topicKey: "ict-theory-1",
    topicLabel: "Test Topic",
    type,
    front: `Q: ${id}`,
    back: `A: ${id}`,
  };
}

describe("pickMockCards", () => {
  const cards = Array.from({ length: 50 }, (_, i) =>
    makeCard(`card-${i}`, i % 3 === 0 ? "def" : i % 3 === 1 ? "fact" : "formula"),
  );

  it("returns exactly count cards", () => {
    const picked = pickMockCards(cards, {}, 20);
    expect(picked).toHaveLength(20);
  });

  it("returns at most all available cards if fewer than count", () => {
    const tiny = [makeCard("a"), makeCard("b")];
    const picked = pickMockCards(tiny, {}, 20);
    expect(picked).toHaveLength(2);
  });

  it("prioritises overdue cards", () => {
    const srData: SRData = {};
    for (let i = 0; i < 5; i++) {
      srData[`card-${i}`] = { interval: 1, easeFactor: 2.5, due: "2020-01-01" };
    }
    for (let i = 5; i < 50; i++) {
      srData[`card-${i}`] = { interval: 10, easeFactor: 2.5, due: "2099-01-01" };
    }
    const picked = pickMockCards(cards, srData, 20);
    const ids = new Set(picked.map((c) => c.id));
    for (let i = 0; i < 5; i++) {
      expect(ids.has(`card-${i}`), `card-${i} should be in picked`).toBe(true);
    }
  });

  it("returns no duplicates", () => {
    const picked = pickMockCards(cards, {}, 20);
    const ids = picked.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe("computeBreakdown", () => {
  it("tallies correct answers by type", () => {
    const results = [
      { card: makeCard("a", "def"), passed: true },
      { card: makeCard("b", "def"), passed: false },
      { card: makeCard("c", "formula"), passed: true },
      { card: makeCard("d", "fact"), passed: true },
    ];
    const bd = computeBreakdown(results);
    expect(bd.def).toEqual({ correct: 1, total: 2 });
    expect(bd.formula).toEqual({ correct: 1, total: 1 });
    expect(bd.fact).toEqual({ correct: 1, total: 1 });
  });

  it("handles all wrong answers", () => {
    const results = [
      { card: makeCard("x", "def"), passed: false },
      { card: makeCard("y", "def"), passed: false },
    ];
    const bd = computeBreakdown(results);
    expect(bd.def).toEqual({ correct: 0, total: 2 });
  });
});
