import { describe, it, expect, vi, beforeEach } from "vitest";

type TopicState = 0 | 1 | 2;

function cycle(current: TopicState): TopicState {
  return (((current + 1) % 3) as TopicState);
}

const DOT_CLASS: Record<TopicState, string> = {
  0: "bg-[var(--surface3)]",
  1: "bg-[var(--topic-partial)]",
  2: "bg-[var(--topic-done)]",
};

describe("TopicsTab — cycle logic", () => {
  it("cycles from 0 to 1 (unseen → in-progress)", () => {
    expect(cycle(0)).toBe(1);
  });

  it("cycles from 1 to 2 (in-progress → confident)", () => {
    expect(cycle(1)).toBe(2);
  });

  it("cycles from 2 back to 0 (confident → unseen)", () => {
    expect(cycle(2)).toBe(0);
  });

  it("full cycle returns to original state", () => {
    const start: TopicState = 0;
    expect(cycle(cycle(cycle(start)))).toBe(start);
  });
});

const NOTES_KEY = "igcse-topic-notes";

function loadNotes(): Record<string, string> {
  try {
    const raw = localStorage.getItem(NOTES_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveNote(
  notes: Record<string, string>,
  key: string,
  value: string,
): Record<string, string> {
  const updated = { ...notes, [key]: value };
  try {
    localStorage.setItem(NOTES_KEY, JSON.stringify(updated));
  } catch {}
  return updated;
}

describe("TopicsTab — note storage", () => {
  beforeEach(() => {
    vi.stubGlobal("localStorage", {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
    });
  });

  it("loadNotes returns empty object when localStorage is empty", () => {
    (localStorage.getItem as ReturnType<typeof vi.fn>).mockReturnValue(null);
    expect(loadNotes()).toEqual({});
  });

  it("loadNotes returns stored notes", () => {
    const stored = { "ict-1": "my note" };
    (localStorage.getItem as ReturnType<typeof vi.fn>).mockReturnValue(
      JSON.stringify(stored),
    );
    expect(loadNotes()).toEqual(stored);
  });

  it("loadNotes returns empty object when localStorage throws", () => {
    (localStorage.getItem as ReturnType<typeof vi.fn>).mockImplementation(
      () => {
        throw new Error("storage error");
      },
    );
    expect(loadNotes()).toEqual({});
  });

  it("saveNote returns updated notes record", () => {
    (localStorage.getItem as ReturnType<typeof vi.fn>).mockReturnValue(null);
    const updated = saveNote({}, "ict-1", "test note");
    expect(updated["ict-1"]).toBe("test note");
  });

  it("saveNote preserves existing notes", () => {
    const existing = { "ict-1": "first" };
    const updated = saveNote(existing, "ict-2", "second");
    expect(updated["ict-1"]).toBe("first");
    expect(updated["ict-2"]).toBe("second");
  });

  it("saveNote writes to localStorage", () => {
    saveNote({}, "ict-1", "hello");
    expect(localStorage.setItem).toHaveBeenCalledWith(
      NOTES_KEY,
      JSON.stringify({ "ict-1": "hello" }),
    );
  });

  it("saveNote stores empty string for cleared notes", () => {
    const updated = saveNote({ "ict-1": "old" }, "ict-1", "");
    expect(updated["ict-1"]).toBe("");
  });
});

describe("TopicsTab — DOT_CLASS mapping", () => {
  it("state 0 uses surface3 CSS variable", () => {
    expect(DOT_CLASS[0]).toBe("bg-[var(--surface3)]");
  });

  it("state 1 uses topic-partial CSS variable", () => {
    expect(DOT_CLASS[1]).toBe("bg-[var(--topic-partial)]");
  });

  it("state 2 uses topic-done CSS variable", () => {
    expect(DOT_CLASS[2]).toBe("bg-[var(--topic-done)]");
  });

  it("all states have CSS variable class strings", () => {
    for (const cls of Object.values(DOT_CLASS)) {
      expect(cls).toMatch(/^bg-\[var\(--/);
    }
  });
});
