import type { SubjectKey } from "./subjects";

export const examStrategy: Record<SubjectKey, string> = {
  ict: "Use correct terminology in every answer and name files exactly as instructed — marks are lost for wrong file formats and imprecise naming.",
  cs: "Write pseudocode in Cambridge notation with DECLARE statements and proper indentation; show every trace table step with a ruler.",
  business:
    "Use the company name and data from the case study in every answer — generic theory scores limited marks.",
  engfirst:
    "Plan your composition for 5 minutes; open with something striking and vary sentence length throughout.",
  engsl:
    "Practise reading for gist before detail — skim the whole text first, then answer in order without copying chunks verbatim.",
  englit:
    "Avoid plot summary — analyse language choices and link technique → effect → theme in every paragraph.",
  science:
    "Show all working for calculations even if the final answer is wrong; method marks are available.",
  addmath:
    "Show all algebraic steps — unsupported calculator answers score zero; leave answers in exact form on Paper 1.",
  mathex:
    "Show all working step by step — method marks are awarded independently of the final answer. Check answers fit the context.",
  mathcore:
    "Show every calculation step clearly. Time per mark is roughly one minute — flag hard questions and return to them.",
  gp: "Focus on skills not content — always give reasoned judgements with evidence from the sources provided.",
  drama:
    "Connect every performance choice to character motivation and context — examiners reward intention, not just description.",
  dt: "Annotate every design idea with function, material, and manufacturing notes — a drawing without explanation scores poorly.",
  music:
    "Use precise musical vocabulary (dynamics, tempo, texture, tonality) in listening answers — vague descriptions lose marks.",
  art: "Document your creative process with annotations showing influences, experiments, and developments — uncontextualised work scores less.",
};
