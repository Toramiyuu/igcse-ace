import type { SubjectKey } from "./subjects";

export interface GradeBounds {
  astar: number;
  a: number;
  b: number;
  c: number;
}

export const gradeBoundaries: Record<SubjectKey, GradeBounds> = {
  ict: { astar: 82, a: 68, b: 54, c: 42 },
  cs: { astar: 83, a: 69, b: 55, c: 43 },
  business: { astar: 82, a: 68, b: 54, c: 42 },
  engfirst: { astar: 85, a: 72, b: 59, c: 47 },
  engsl: { astar: 80, a: 65, b: 52, c: 40 },
  englit: { astar: 87, a: 74, b: 61, c: 48 },
  science: { astar: 83, a: 70, b: 57, c: 44 },
  addmath: { astar: 81, a: 66, b: 51, c: 37 },
  mathex: { astar: 80, a: 65, b: 50, c: 37 },
  mathcore: { astar: 75, a: 60, b: 46, c: 33 },
  gp: { astar: 80, a: 65, b: 52, c: 40 },
  drama: { astar: 80, a: 65, b: 52, c: 40 },
  dt: { astar: 80, a: 65, b: 52, c: 40 },
  music: { astar: 80, a: 65, b: 52, c: 40 },
  art: { astar: 80, a: 65, b: 52, c: 40 },
};

export const subjNames: Record<SubjectKey, string> = {
  ict: "ICT",
  cs: "Computer Science",
  business: "Business Studies",
  engfirst: "English 1st Lang",
  engsl: "English 2nd Lang",
  englit: "English Lit",
  science: "Co-ord Sciences",
  addmath: "Add Maths",
  mathex: "Maths Extended",
  mathcore: "Maths Core",
  gp: "Global Perspectives",
  drama: "Drama",
  dt: "Design & Tech",
  music: "Music",
  art: "Art & Design",
};

export const paperOptions: Record<
  SubjectKey,
  { label: string; max: number }[]
> = {
  ict: [
    { label: "Paper 1 — Theory", max: 80 },
    { label: "Paper 2 — Document Production, Databases & Pres.", max: 70 },
    { label: "Paper 3 — Spreadsheets & Data Manipulation", max: 70 },
  ],
  cs: [
    { label: "Paper 1 — Computer Systems", max: 75 },
    { label: "Paper 2 — Algorithms, Programming & Logic", max: 75 },
  ],
  business: [
    { label: "Paper 1 — Short Answer & Data Response", max: 80 },
    { label: "Paper 2 — Case Study", max: 80 },
  ],
  engfirst: [
    { label: "Paper 1 — Reading", max: 80 },
    { label: "Paper 2 — Directed Writing & Composition", max: 80 },
  ],
  englit: [
    { label: "Paper 1 — Poetry & Prose", max: 50 },
    { label: "Paper 2 — Drama", max: 50 },
  ],
  science: [
    { label: "Paper 2 — Multiple Choice (Extended)", max: 40 },
    { label: "Paper 4 — Theory (Extended)", max: 120 },
    { label: "Paper 5/6 — Practical / Alt to Practical", max: 60 },
  ],
  addmath: [
    { label: "Paper 1 — Non-Calculator", max: 80 },
    { label: "Paper 2 — Calculator", max: 80 },
  ],
  gp: [
    { label: "Component 1 — Written Exam", max: 70 },
    { label: "Component 2 — Individual Report", max: 60 },
    { label: "Component 3 — Team Project", max: 70 },
  ],
  engsl: [
    { label: "Paper 1 — Reading & Writing", max: 70 },
    { label: "Paper 2 — Listening", max: 30 },
  ],
  mathex: [
    { label: "Paper 2 — Extended", max: 70 },
    { label: "Paper 4 — Extended", max: 130 },
  ],
  mathcore: [
    { label: "Paper 1 — Core", max: 56 },
    { label: "Paper 3 — Core", max: 104 },
  ],
  drama: [
    { label: "Paper 1 — Written Exam", max: 80 },
    { label: "Component 2/3 — Practical", max: 60 },
  ],
  dt: [
    { label: "Paper 1 — Written", max: 80 },
    { label: "Coursework — Design Portfolio", max: 60 },
  ],
  music: [
    { label: "Paper 1 — Listening", max: 80 },
    { label: "Coursework — Performing & Composing", max: 60 },
  ],
  art: [
    { label: "Component 1 — Portfolio", max: 60 },
    { label: "Component 2 — Exam", max: 40 },
  ],
};

export function getGrade(
  pct: number,
  bounds: GradeBounds,
): { g: string; cls: string } {
  if (pct >= bounds.astar) return { g: "A*", cls: "grade-astar" };
  if (pct >= bounds.a) return { g: "A", cls: "grade-a" };
  if (pct >= bounds.b) return { g: "B", cls: "" };
  if (pct >= bounds.c) return { g: "C", cls: "" };
  return { g: "U", cls: "" };
}
