import { describe, it, expect } from "vitest";
import {
  ZONE_INFO,
  ICT_PRACTICALS,
  GP_COURSEWORK,
  zoneExams,
  hasZoneData,
  type ZoneKey,
} from "@/data/zones";

const ZONE_KEYS: ZoneKey[] = ["Z1", "Z2", "Z3", "Z4", "Z5"];

describe("ZONE_INFO", () => {
  it("has entries for all 5 zones", () => {
    expect(Object.keys(ZONE_INFO)).toHaveLength(5);
    for (const z of ZONE_KEYS) {
      expect(ZONE_INFO[z]).toBeDefined();
    }
  });

  it("each zone has label, region, and countries", () => {
    for (const z of ZONE_KEYS) {
      expect(typeof ZONE_INFO[z].label).toBe("string");
      expect(typeof ZONE_INFO[z].region).toBe("string");
      expect(typeof ZONE_INFO[z].countries).toBe("string");
    }
  });
});

describe("ICT_PRACTICALS", () => {
  it("has 4 practical entries", () => {
    expect(ICT_PRACTICALS).toHaveLength(4);
  });

  it("all practicals are before written exams (April dates)", () => {
    for (const e of ICT_PRACTICALS) {
      expect(e.iso).toMatch(/^2026-04/);
    }
  });
});

describe("GP_COURSEWORK", () => {
  it("has 2 coursework components", () => {
    expect(GP_COURSEWORK).toHaveLength(2);
  });

  it("coursework entries have null iso (no fixed date)", () => {
    for (const e of GP_COURSEWORK) {
      expect(e.iso).toBeNull();
    }
  });
});

describe("zoneExams", () => {
  it("covers all 5 zones", () => {
    expect(Object.keys(zoneExams)).toHaveLength(5);
  });

  it("each zone has all 8 subject keys", () => {
    const expectedSubjects = ["ict", "cs", "business", "engfirst", "englit", "science", "addmath", "gp"];
    for (const z of ZONE_KEYS) {
      for (const subj of expectedSubjects) {
        expect(zoneExams[z][subj as keyof typeof zoneExams.Z1], `${z}.${subj}`).toBeDefined();
      }
    }
  });

  it("Z1 CS uses /13 paper codes (zone-1 variant)", () => {
    const csPapers = zoneExams.Z1.cs;
    expect(csPapers[0].code).toBe("0478/13");
    expect(csPapers[1].code).toBe("0478/23");
  });

  it("Z4 CS uses /12 paper codes (zone-4 variant)", () => {
    const csPapers = zoneExams.Z4.cs;
    expect(csPapers[0].code).toBe("0478/12");
    expect(csPapers[1].code).toBe("0478/22");
  });

  it("Z5 GP exam is on a different date than Z1 GP", () => {
    expect(zoneExams.Z5.gp[0].iso).not.toBe(zoneExams.Z1.gp[0].iso);
  });
});

describe("hasZoneData", () => {
  it("returns true for the 8 original subjects", () => {
    for (const sk of ["ict", "cs", "business", "engfirst", "englit", "science", "addmath", "gp"] as const) {
      expect(hasZoneData(sk)).toBe(true);
    }
  });

  it("returns false for subjects without zone data", () => {
    for (const sk of ["engsl", "mathex", "mathcore", "drama", "dt", "music", "art"] as const) {
      expect(hasZoneData(sk)).toBe(false);
    }
  });
});
