import { describe, it, expect, beforeEach, vi } from "vitest";


interface Attempt {
  subj: string;
  paper: string;
  year: string;
  score: number;
  max: number;
  date: string;
}

function loadAll(storage: Record<string, string>): Attempt[] {
  try {
    const raw = storage["igcse-paper-log"];
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveAll(storage: Record<string, string>, all: Attempt[]) {
  storage["igcse-paper-log"] = JSON.stringify(all);
}

describe("PaperLogTab — loadAll / saveAll", () => {
  it("returns empty array when nothing is stored", () => {
    expect(loadAll({})).toEqual([]);
  });

  it("returns parsed attempts from storage", () => {
    const attempt: Attempt = {
      subj: "ict",
      paper: "Paper 1",
      year: "2024",
      score: 72,
      max: 100,
      date: "2025-01-01",
    };
    const storage: Record<string, string> = {};
    saveAll(storage, [attempt]);
    expect(loadAll(storage)).toEqual([attempt]);
  });

  it("returns empty array when storage value is malformed JSON", () => {
    expect(loadAll({ "igcse-paper-log": "not-json{{{" })).toEqual([]);
  });

  it("appending an attempt persists correctly", () => {
    const storage: Record<string, string> = {};
    const a1: Attempt = { subj: "cs", paper: "P1", year: "2023", score: 60, max: 80, date: "2024-01-01" };
    const a2: Attempt = { subj: "cs", paper: "P2", year: "2024", score: 55, max: 80, date: "2024-06-01" };
    saveAll(storage, [a1]);
    const all = loadAll(storage);
    all.push(a2);
    saveAll(storage, all);
    expect(loadAll(storage)).toHaveLength(2);
    expect(loadAll(storage)[1].score).toBe(55);
  });

  it("deleting an attempt removes the correct entry", () => {
    const storage: Record<string, string> = {};
    const a1: Attempt = { subj: "ict", paper: "P1", year: "2023", score: 70, max: 100, date: "2024-01-01" };
    const a2: Attempt = { subj: "ict", paper: "P2", year: "2024", score: 80, max: 100, date: "2024-06-01" };
    saveAll(storage, [a1, a2]);
    const all = loadAll(storage);
    const target = all[0];
    const fi = all.findIndex(
      (a) => a.subj === target.subj && a.date === target.date && a.paper === target.paper && a.score === target.score,
    );
    all.splice(fi, 1);
    saveAll(storage, all);
    const remaining = loadAll(storage);
    expect(remaining).toHaveLength(1);
    expect(remaining[0].paper).toBe("P2");
  });
});
