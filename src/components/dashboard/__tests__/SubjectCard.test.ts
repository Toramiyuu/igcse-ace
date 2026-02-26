import { describe, it, expect } from "vitest";
import { SUBJECT_META } from "@/data/constants";

describe("SubjectCard meta shape", () => {
  it("every subject has the fields SubjectCard needs (name, color, code)", () => {
    for (const [key, meta] of Object.entries(SUBJECT_META)) {
      expect(typeof meta.name, key).toBe("string");
      expect(typeof meta.color, key).toBe("string");
      expect(typeof meta.code, key).toBe("string");
    }
  });

  it("subjectKey maps to a valid dashboard href", () => {
    for (const key of Object.keys(SUBJECT_META)) {
      expect(`/dashboard/subjects/${key}`).toMatch(/^\/dashboard\/subjects\/\w+$/);
    }
  });
});
