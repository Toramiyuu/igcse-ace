import { describe, it, expect } from "vitest";
import { getExamsForZone, zoneKeyFromNumber } from "@/lib/zones";

describe("zoneKeyFromNumber", () => {
  it("converts integer 1-5 to zone key string", () => {
    expect(zoneKeyFromNumber(1)).toBe("Z1");
    expect(zoneKeyFromNumber(2)).toBe("Z2");
    expect(zoneKeyFromNumber(3)).toBe("Z3");
    expect(zoneKeyFromNumber(4)).toBe("Z4");
    expect(zoneKeyFromNumber(5)).toBe("Z5");
  });

  it("clamps invalid numbers to Z1", () => {
    expect(zoneKeyFromNumber(0)).toBe("Z1");
    expect(zoneKeyFromNumber(6)).toBe("Z1");
    expect(zoneKeyFromNumber(-1)).toBe("Z1");
  });
});

describe("getExamsForZone", () => {
  it("returns zone-specific exams for cs in Z1", () => {
    const exams = getExamsForZone(1, "cs");
    expect(exams.length).toBeGreaterThan(0);
    expect(exams[0].code).toBe("0478/13");
  });

  it("returns zone-specific exams for cs in Z4", () => {
    const exams = getExamsForZone(4, "cs");
    expect(exams.length).toBeGreaterThan(0);
    expect(exams[0].code).toBe("0478/12");
  });

  it("prepends ICT practicals to ict exams", () => {
    const exams = getExamsForZone(1, "ict");
    const practicals = exams.filter((e) => e.iso?.startsWith("2026-04"));
    expect(practicals.length).toBe(4);
  });

  it("appends GP coursework to gp exams", () => {
    const exams = getExamsForZone(1, "gp");
    const coursework = exams.filter((e) => e.iso === null);
    expect(coursework.length).toBe(2);
  });

  it("falls back to subjects data for subjects without zone data", () => {
    const exams = getExamsForZone(1, "engsl");
    expect(exams.length).toBeGreaterThan(0);
  });

  it("returns exams for all 15 subjects without throwing", () => {
    const allSubjects = [
      "ict", "cs", "business", "engfirst", "englit", "engsl",
      "science", "addmath", "mathex", "mathcore", "gp",
      "drama", "dt", "music", "art",
    ] as const;
    for (const sk of allSubjects) {
      expect(() => getExamsForZone(1, sk)).not.toThrow();
    }
  });
});
