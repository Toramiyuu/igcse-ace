import { topicNotes } from "@/data/notes";
import { topicData } from "@/data/topics";

export interface Flashcard {
  id: string;
  subject: string;
  topicKey: string;
  topicLabel: string;
  type: "def" | "fact" | "formula";
  front: string;
  back: string;
}

export interface SREntry {
  interval: number;
  easeFactor: number;
  due: string;
}

export type SRData = Record<string, SREntry>;

const SUBJECT_PREFIXES: [string, string][] = [
  ["ict-theory", "ict"],
  ["ict-practical", "ict"],
  ["cs-topics", "cs"],
  ["bus-topics", "business"],
  ["sci-bio", "science"],
  ["sci-chem", "science"],
  ["sci-phys", "science"],
  ["am-topics", "addmath"],
  ["gp-topics", "gp"],
  ["engfirst", "engfirst"],
  ["englit", "englit"],
];

function subjectFromKey(key: string): string {
  for (const [prefix, subj] of SUBJECT_PREFIXES) {
    if (key.startsWith(prefix)) return subj;
  }
  return "other";
}

function topicLabelFromKey(noteKey: string): string {
  const lastDash = noteKey.lastIndexOf("-");
  const groupKey = noteKey.slice(0, lastDash);
  const num = noteKey.slice(lastDash + 1);
  const entry = (topicData[groupKey] ?? []).find(([n]) => n === num);
  return entry ? entry[1] : groupKey;
}

function parseDef(def: string): { front: string; back: string } {
  const eqIdx = def.indexOf(" = ");
  const colIdx = def.indexOf(": ");
  const sepIdx = eqIdx !== -1 ? eqIdx : colIdx !== -1 ? colIdx : -1;
  if (sepIdx !== -1 && sepIdx < def.length * 0.6) {
    const term = def.slice(0, sepIdx).trim();
    const meaning = def.slice(sepIdx + (eqIdx !== -1 ? 3 : 2)).trim();
    return { front: `Define: ${term}`, back: meaning };
  }
  return { front: "What is the definition?", back: def };
}

let _cache: Flashcard[] | null = null;

export function generateFlashcards(): Flashcard[] {
  if (_cache) return _cache;
  const cards: Flashcard[] = [];
  for (const [noteKey, note] of Object.entries(topicNotes)) {
    const subject = subjectFromKey(noteKey);
    const topicLabel = topicLabelFromKey(noteKey);
    for (const [i, def] of (note.defs ?? []).entries()) {
      const { front, back } = parseDef(def);
      cards.push({
        id: `${noteKey}-def-${i}`,
        subject,
        topicKey: noteKey,
        topicLabel,
        type: "def",
        front,
        back,
      });
    }
    for (const [i, fact] of (note.facts ?? []).entries()) {
      cards.push({
        id: `${noteKey}-fact-${i}`,
        subject,
        topicKey: noteKey,
        topicLabel,
        type: "fact",
        front: `Key fact — ${topicLabel}`,
        back: fact,
      });
    }
    for (const [i, formula] of (note.formulae ?? []).entries()) {
      const eqIdx = formula.indexOf(" = ");
      const front =
        eqIdx !== -1
          ? `Formula: ${formula.slice(0, eqIdx).trim()} = ?`
          : "State the formula:";
      cards.push({
        id: `${noteKey}-formula-${i}`,
        subject,
        topicKey: noteKey,
        topicLabel,
        type: "formula",
        front,
        back: formula,
      });
    }
  }
  _cache = cards;
  return cards;
}

export function isDue(entry: SREntry | undefined): boolean {
  if (!entry) return true;
  return entry.due <= new Date().toISOString().slice(0, 10);
}

export function updateSR(
  data: SRData,
  cardId: string,
  passed: boolean,
): SRData {
  const entry = data[cardId] ?? { interval: 1, easeFactor: 2.5, due: "" };
  let { interval, easeFactor } = entry;
  if (passed) {
    interval = Math.round(interval * easeFactor);
    easeFactor = Math.min(2.5, easeFactor + 0.1);
  } else {
    interval = 1;
    easeFactor = Math.max(1.3, easeFactor - 0.2);
  }
  const due = new Date();
  due.setDate(due.getDate() + interval);
  return {
    ...data,
    [cardId]: { interval, easeFactor, due: due.toISOString().slice(0, 10) },
  };
}

export function loadSR(): SRData {
  try {
    const raw = localStorage.getItem("igcse-sr");
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveSR(data: SRData): void {
  localStorage.setItem("igcse-sr", JSON.stringify(data));
}
