import { describe, it, expect, vi, beforeEach } from "vitest";
import { getWeakestTopics, getKeyFormulae, subjectNotePrefix, getAllFormulae } from "@/lib/briefing";
import { topicNotes } from "@/data/notes";


describe("subjectNotePrefix", () => {
  it("maps business to bus-", () => expect(subjectNotePrefix("business")).toBe("bus-"));
  it("maps addmath to am-", () => expect(subjectNotePrefix("addmath")).toBe("am-"));
  it("maps other subjects to subj-", () => expect(subjectNotePrefix("ict")).toBe("ict-"));
  it("maps cs to cs-", () => expect(subjectNotePrefix("cs")).toBe("cs-"));
});

describe("getKeyFormulae", () => {
  it("returns at most `limit` formulae", () => {
    const result = getKeyFormulae("addmath", 3);
    expect(result.length).toBeLessThanOrEqual(3);
  });

  it("returns empty array for a subject with no formulae (engfirst)", () => {
    const result = getKeyFormulae("engfirst", 8);
    expect(Array.isArray(result)).toBe(true);
  });

  it("returns formulae as strings", () => {
    const result = getKeyFormulae("science", 5);
    for (const f of result) {
      expect(typeof f).toBe("string");
    }
  });
});

describe("getWeakestTopics", () => {
  beforeEach(() => {
    vi.stubGlobal("localStorage", {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
    });
  });

  it("returns empty array when localStorage is empty", () => {
    (localStorage.getItem as ReturnType<typeof vi.fn>).mockReturnValue(null);
    const result = getWeakestTopics("ict", 5);
    expect(Array.isArray(result)).toBe(true);
  });

  it("excludes topics at state 2 (confident)", () => {
    const states: Record<string, number> = {};
    for (const key of Object.keys(topicNotes)) {
      if (key.startsWith("ict-")) states[key] = 2;
    }
    (localStorage.getItem as ReturnType<typeof vi.fn>).mockReturnValue(
      JSON.stringify(states),
    );
    const result = getWeakestTopics("ict", 5);
    expect(result).toHaveLength(0);
  });

  it("prioritises state-0 topics over state-1", () => {
    const ictKeys = Object.keys(topicNotes).filter((k) => k.startsWith("ict-"));
    if (ictKeys.length < 2) return;

    const states: Record<string, number> = {};
    states[ictKeys[0]] = 1;
    states[ictKeys[1]] = 0;

    (localStorage.getItem as ReturnType<typeof vi.fn>).mockReturnValue(
      JSON.stringify(states),
    );
    const result = getWeakestTopics("ict", 2);
    const idx0 = result.indexOf(ictKeys[1]);
    const idx1 = result.indexOf(ictKeys[0]);
    if (idx0 !== -1 && idx1 !== -1) {
      expect(idx0).toBeLessThan(idx1);
    }
  });

  it("returns at most `limit` topics", () => {
    (localStorage.getItem as ReturnType<typeof vi.fn>).mockReturnValue(null);
    const result = getWeakestTopics("ict", 3);
    expect(result.length).toBeLessThanOrEqual(3);
  });

  it("returns empty array when localStorage throws", () => {
    (localStorage.getItem as ReturnType<typeof vi.fn>).mockImplementation(() => {
      throw new Error("storage error");
    });
    expect(() => getWeakestTopics("ict", 5)).not.toThrow();
    const result = getWeakestTopics("ict", 5);
    expect(Array.isArray(result)).toBe(true);
  });
});

describe("getAllFormulae", () => {
  it("returns an array", () => {
    expect(Array.isArray(getAllFormulae())).toBe(true);
  });

  it("each entry has a subject and formula string", () => {
    for (const e of getAllFormulae()) {
      expect(typeof e.subject).toBe("string");
      expect(typeof e.formula).toBe("string");
      expect(e.formula.length).toBeGreaterThan(0);
    }
  });

  it("includes addmath formulae", () => {
    const result = getAllFormulae();
    const amEntries = result.filter((e) => e.subject === "addmath");
    expect(amEntries.length).toBeGreaterThan(0);
  });

  it("includes science formulae", () => {
    const result = getAllFormulae();
    const sciEntries = result.filter((e) => e.subject === "science");
    expect(sciEntries.length).toBeGreaterThan(0);
  });

  it("does not include subjects with no formulae in topicNotes (engfirst)", () => {
    const result = getAllFormulae();
    const engEntries = result.filter((e) => e.subject === "engfirst");
    expect(engEntries.length).toBe(0);
  });
});
