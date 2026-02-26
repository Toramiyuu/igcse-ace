import { describe, it, expect, vi, beforeEach } from "vitest";
import { syncTopicConfidence } from "@/lib/topicSync";
import { generateFlashcards } from "@/lib/flashcards";
import type { SRData } from "@/lib/flashcards";

describe("syncTopicConfidence", () => {
  beforeEach(() => {
    vi.stubGlobal("localStorage", {
      getItem: vi.fn().mockReturnValue(null),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
    });
  });

  it("does not write to localStorage when SR data is empty", () => {
    syncTopicConfidence({});
    expect(localStorage.setItem).not.toHaveBeenCalled();
  });

  it("does not throw", () => {
    expect(() => syncTopicConfidence({})).not.toThrow();
  });

  it("advances topic to state 1 when some cards in topic are passed", () => {
    const cards = generateFlashcards();
    const ictCard = cards.find((c) => c.subject === "ict");
    if (!ictCard) return;

    const sr: SRData = {
      [ictCard.id]: { interval: 3, easeFactor: 2.6, due: "2099-01-01" },
    };

    const lastDash = ictCard.topicKey.lastIndexOf("-");
    const num = ictCard.topicKey.slice(lastDash + 1);
    const stateKey = `${ictCard.subject}-${num}`;

    syncTopicConfidence(sr);

    const setCall = (localStorage.setItem as ReturnType<typeof vi.fn>).mock
      .calls[0];
    expect(setCall).toBeDefined();
    const written = JSON.parse(setCall[1]);
    expect(written[stateKey]).toBeGreaterThanOrEqual(1);
  });

  it("sets topic to state 2 when all cards in topic are passed", () => {
    const cards = generateFlashcards();
    const ictCards = cards.filter((c) => c.subject === "ict");
    const firstTopicKey = ictCards[0]?.topicKey;
    if (!firstTopicKey) return;

    const topicCards = ictCards.filter((c) => c.topicKey === firstTopicKey);
    const sr: SRData = {};
    for (const c of topicCards) {
      sr[c.id] = { interval: 5, easeFactor: 2.5, due: "2099-01-01" };
    }

    const lastDash = firstTopicKey.lastIndexOf("-");
    const num = firstTopicKey.slice(lastDash + 1);
    const stateKey = `ict-${num}`;

    syncTopicConfidence(sr);

    const setCall = (localStorage.setItem as ReturnType<typeof vi.fn>).mock
      .calls[0];
    const written = JSON.parse(setCall[1]);
    expect(written[stateKey]).toBe(2);
  });

  it("does not downgrade a topic that is already at a higher state", () => {
    const existingStates = { "ict-1": 2 };
    (localStorage.getItem as ReturnType<typeof vi.fn>).mockReturnValue(
      JSON.stringify(existingStates),
    );

    const cards = generateFlashcards();
    const sr: SRData = {};
    for (const c of cards.filter((c) => c.subject === "ict")) {
      sr[c.id] = { interval: 1, easeFactor: 2.5, due: "2099-01-01" };
    }

    syncTopicConfidence(sr);

    const setCall = (localStorage.setItem as ReturnType<typeof vi.fn>).mock
      .calls[0];
    if (setCall) {
      const written = JSON.parse(setCall[1]);
      expect(written["ict-1"]).toBe(2);
    }
  });

  it("handles localStorage read errors gracefully", () => {
    (localStorage.getItem as ReturnType<typeof vi.fn>).mockImplementation(
      () => {
        throw new Error("storage error");
      },
    );
    expect(() => syncTopicConfidence({})).not.toThrow();
  });
});
