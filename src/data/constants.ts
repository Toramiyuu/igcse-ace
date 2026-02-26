import type { SubjectKey } from "./subjects";

export interface SubjectMeta {
  name: string;
  /** Hex color for subject accent */
  color: string;
  /** Cambridge syllabus code e.g. "0417" */
  code: string;
}

export const SUBJECT_META: Record<SubjectKey, SubjectMeta> = {
  ict: { name: "ICT", color: "#60a0f0", code: "0417" },
  cs: { name: "Computer Science", color: "#a070f0", code: "0478" },
  business: { name: "Business Studies", color: "#50d08f", code: "0450" },
  engfirst: { name: "English 1st Language", color: "#f0c040", code: "0500" },
  englit: { name: "English Literature", color: "#f060a0", code: "0475" },
  engsl: { name: "English 2nd Language", color: "#e0b030", code: "0510" },
  science: { name: "Co-ordinated Sciences", color: "#f06060", code: "0654" },
  addmath: { name: "Additional Maths", color: "#f09040", code: "0606" },
  mathex: { name: "Mathematics Extended", color: "#60d0a0", code: "0580" },
  mathcore: { name: "Mathematics Core", color: "#40b080", code: "0580" },
  gp: { name: "Global Perspectives", color: "#40d0f0", code: "0457" },
  drama: { name: "Drama", color: "#c070f0", code: "0411" },
  dt: { name: "Design & Technology", color: "#f0a060", code: "0445" },
  music: { name: "Music", color: "#80a0f0", code: "0410" },
  art: { name: "Art & Design", color: "#f08080", code: "0400" },
};

/** Ordered array of all subject keys */
export const SUBJECT_KEYS = Object.keys(SUBJECT_META) as SubjectKey[];
