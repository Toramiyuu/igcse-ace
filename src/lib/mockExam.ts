import type { Flashcard, SRData } from "@/lib/flashcards";
import { isDue } from "@/lib/flashcards";

export interface MockResult {
  card: Flashcard;
  passed: boolean;
}

export interface TypeBreakdown {
  correct: number;
  total: number;
}

export interface MockBreakdown {
  def: TypeBreakdown;
  formula: TypeBreakdown;
  fact: TypeBreakdown;
}

/**
 * Pick `count` cards for a mock exam.
 * Overdue cards (isDue = true) are prioritised first, then random fill.
 */
export function pickMockCards(
  cards: Flashcard[],
  srData: SRData,
  count: number,
): Flashcard[] {
  const overdue: Flashcard[] = [];
  const fresh: Flashcard[] = [];

  for (const card of cards) {
    if (isDue(srData[card.id])) {
      overdue.push(card);
    } else {
      fresh.push(card);
    }
  }

  shuffle(overdue);
  shuffle(fresh);

  const pool = [...overdue, ...fresh];
  return pool.slice(0, count);
}

/**
 * Compute correct/total counts grouped by card type.
 */
export function computeBreakdown(results: MockResult[]): MockBreakdown {
  const bd: MockBreakdown = {
    def: { correct: 0, total: 0 },
    formula: { correct: 0, total: 0 },
    fact: { correct: 0, total: 0 },
  };
  for (const { card, passed } of results) {
    bd[card.type].total += 1;
    if (passed) bd[card.type].correct += 1;
  }
  return bd;
}

function shuffle<T>(arr: T[]): void {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
