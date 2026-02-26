import { topicNotes } from "@/data/notes";
import { generateFlashcards } from "@/lib/flashcards";
import type { SubjectKey } from "@/data/subjects";

export interface FormulaEntry {
  subject: SubjectKey;
  formula: string;
}

export function getAllFormulae(): FormulaEntry[] {
  return generateFlashcards()
    .filter((c) => c.type === "formula")
    .map((c) => ({ subject: c.subject as SubjectKey, formula: c.back }));
}

type TopicState = 0 | 1 | 2;

export function subjectNotePrefix(subj: string): string {
  if (subj === "business") return "bus-";
  if (subj === "addmath") return "am-";
  return `${subj}-`;
}

export function getWeakestTopics(subj: string, limit = 5): string[] {
  try {
    const raw = localStorage.getItem("igcse-topics");
    const states: Record<string, TopicState> = raw ? JSON.parse(raw) : {};
    const prefix = subjectNotePrefix(subj);
    const subjectKeys = Object.keys(topicNotes).filter((k) =>
      k.startsWith(prefix),
    );
    return subjectKeys
      .filter((k) => (states[k] ?? 0) < 2)
      .sort((a, b) => (states[a] ?? 0) - (states[b] ?? 0))
      .slice(0, limit);
  } catch {
    return [];
  }
}

export function getKeyFormulae(subj: string, limit = 8): string[] {
  const prefix = subjectNotePrefix(subj);
  const formulae: string[] = [];
  for (const [key, note] of Object.entries(topicNotes)) {
    if (!key.startsWith(prefix)) continue;
    for (const f of note.formulae ?? []) {
      formulae.push(f);
      if (formulae.length >= limit) return formulae;
    }
  }
  return formulae;
}
