import { describe, it, expect } from "vitest";

const NAV = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/tracker", label: "Exam Tracker" },
  { href: "/dashboard/flashcards", label: "Flashcards" },
  { href: "/dashboard/timetable", label: "Timetable" },
  { href: "/dashboard/mock-exam", label: "Mock Exam" },
  { href: "/dashboard/formulas", label: "Formulas" },
];

describe("AppShell NAV", () => {
  it("includes Mock Exam route", () => {
    expect(NAV.some((n) => n.href === "/dashboard/mock-exam")).toBe(true);
  });

  it("includes Formulas route", () => {
    expect(NAV.some((n) => n.href === "/dashboard/formulas")).toBe(true);
  });

  it("has 6 nav items", () => {
    expect(NAV).toHaveLength(6);
  });
});
