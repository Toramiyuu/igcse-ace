import { generateFlashcards } from "@/lib/flashcards";
import type { SRData, Flashcard } from "@/lib/flashcards";

type TopicState = 0 | 1 | 2;

function topicsTabKey(card: Flashcard): string {
  const lastDash = card.topicKey.lastIndexOf("-");
  const num = card.topicKey.slice(lastDash + 1);
  return `${card.subject}-${num}`;
}

export function syncTopicConfidence(srData: SRData): void {
  const cards = generateFlashcards();

  const byTopic: Record<string, Flashcard[]> = {};
  for (const card of cards) {
    (byTopic[card.topicKey] ??= []).push(card);
  }

  let states: Record<string, number> = {};
  try {
    const raw =
      typeof localStorage !== "undefined"
        ? localStorage.getItem("igcse-topics")
        : null;
    if (raw) states = JSON.parse(raw);
  } catch {
    states = {};
  }

  let changed = false;

  for (const [, topicCards] of Object.entries(byTopic)) {
    const stateKey = topicsTabKey(topicCards[0]);

    const passedCount = topicCards.filter((c) => {
      const entry = srData[c.id];
      return entry && entry.interval > 1;
    }).length;

    let newState: TopicState;
    if (passedCount === 0) newState = 0;
    else if (passedCount < topicCards.length) newState = 1;
    else newState = 2;

    const current = (states[stateKey] ?? 0) as TopicState;
    if (newState > current) {
      states[stateKey] = newState;
      changed = true;
    }
  }

  if (changed) {
    try {
      localStorage.setItem("igcse-topics", JSON.stringify(states));
    } catch {}
  }
}
