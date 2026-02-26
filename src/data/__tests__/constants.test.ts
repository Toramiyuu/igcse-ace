import { describe, it, expect } from "vitest";
import { SUBJECT_META, SUBJECT_KEYS } from "../constants";
import type { SubjectKey } from "@/data/subjects";

const ALL_KEYS: SubjectKey[] = [
  "ict", "cs", "business", "engfirst", "engsl", "englit",
  "science", "addmath", "mathex", "mathcore", "gp",
  "drama", "dt", "music", "art",
];

describe("SUBJECT_META", () => {
  it("has all 15 subjects", () => {
    expect(SUBJECT_KEYS).toHaveLength(15);
    expect(SUBJECT_KEYS.sort()).toEqual(ALL_KEYS.sort());
  });

  it("every entry has name, color, and code", () => {
    for (const key of ALL_KEYS) {
      const meta = SUBJECT_META[key];
      expect(meta, `missing meta for ${key}`).toBeDefined();
      expect(typeof meta.name).toBe("string");
      expect(meta.name.length).toBeGreaterThan(0);
      expect(typeof meta.color).toBe("string");
      expect(meta.color.length).toBeGreaterThan(0);
      expect(typeof meta.code).toBe("string");
      expect(meta.code).toMatch(/^\d{4}$/);
    }
  });

  it("colors are hex strings (not CSS variables)", () => {
    for (const key of ALL_KEYS) {
      expect(SUBJECT_META[key].color).toMatch(/^#[0-9a-fA-F]{6}$/);
    }
  });
});
