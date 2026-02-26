import type { TopicNote } from "@/data/notes";

type TopicState = 0 | 1 | 2;

interface TopicGroup {
  label: string;
  key: string;
  items: [string, string][];
}

const STATE_SYMBOL: Record<TopicState, string> = {
  0: "○",
  1: "~",
  2: "✓",
};

function loadStates(): Record<string, TopicState> {
  try {
    const raw =
      typeof localStorage !== "undefined"
        ? localStorage.getItem("igcse-topics")
        : null;
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function escHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function generateRevisionHTML(
  subjectKey: string,
  subjectName: string,
  subjectCode: string,
  topicGroups: TopicGroup[],
  notes: Record<string, TopicNote>,
): string {
  const states = loadStates();
  const prefix = subjectKey;

  const allDefs: string[] = [];
  const allFormulae: string[] = [];
  const allFacts: string[] = [];

  for (const [key, note] of Object.entries(notes)) {
    if (!key.startsWith(prefix)) continue;
    if (note.defs) allDefs.push(...note.defs);
    if (note.formulae) allFormulae.push(...note.formulae);
    if (note.facts) allFacts.push(...note.facts);
  }

  const defsSection =
    allDefs.length > 0
      ? `<section>
        <h2>Definitions</h2>
        <table>
          <tbody>
            ${allDefs.map((d) => `<tr><td>${escHtml(d)}</td></tr>`).join("\n")}
          </tbody>
        </table>
      </section>`
      : "";

  const formulaeSection =
    allFormulae.length > 0
      ? `<section>
        <h2>Key Formulae</h2>
        <div class="formulae">
          ${allFormulae.map((f) => `<div class="formula">${escHtml(f)}</div>`).join("\n")}
        </div>
      </section>`
      : "";

  const factsSection =
    allFacts.length > 0
      ? `<section>
        <h2>Key Facts</h2>
        <ul>
          ${allFacts.map((f) => `<li>${escHtml(f)}</li>`).join("\n")}
        </ul>
      </section>`
      : "";

  const topicRows = topicGroups
    .flatMap((g) =>
      g.items.map(([num, name]) => {
        const k = `${subjectKey}-${num}`;
        const st = (states[k] ?? 0) as TopicState;
        return `<tr><td class="sym">${STATE_SYMBOL[st]}</td><td>${escHtml(`${num}. ${name}`)}</td></tr>`;
      }),
    )
    .join("\n");

  const topicSection =
    topicRows.length > 0
      ? `<section>
        <h2>Topic Checklist</h2>
        <table class="topics">
          <thead><tr><th></th><th>Topic</th></tr></thead>
          <tbody>${topicRows}</tbody>
        </table>
      </section>`
      : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${escHtml(subjectName)} — Revision Sheet</title>
  <style>
    body { font-family: Georgia, serif; max-width: 800px; margin: 40px auto; color: #111; font-size: 13px; }
    h1 { font-size: 22px; margin-bottom: 4px; }
    .subtitle { color: #666; font-size: 13px; margin-bottom: 24px; }
    h2 { font-size: 15px; border-bottom: 1px solid #ccc; padding-bottom: 4px; margin-top: 28px; margin-bottom: 10px; }
    table { border-collapse: collapse; width: 100%; margin-bottom: 12px; }
    td, th { padding: 5px 8px; border: 1px solid #ddd; vertical-align: top; }
    th { background: #f5f5f5; font-weight: bold; text-align: left; }
    td.sym { width: 24px; text-align: center; font-size: 14px; }
    .formulae { display: flex; flex-wrap: wrap; gap: 8px; }
    .formula { background: #f0f0f0; border: 1px solid #ccc; padding: 4px 10px; border-radius: 4px; font-family: monospace; }
    ul { margin: 0; padding-left: 20px; }
    li { margin-bottom: 4px; }
    @media print { body { margin: 20px; } section { page-break-inside: avoid; } }
  </style>
</head>
<body>
  <h1>${escHtml(subjectName)}</h1>
  <div class="subtitle">${escHtml(subjectCode)} — Revision Sheet</div>
  ${defsSection}
  ${formulaeSection}
  ${factsSection}
  ${topicSection}
</body>
</html>`;
}

export function printRevisionSheet(
  subjectKey: string,
  subjectName: string,
  subjectCode: string,
  topicGroups: TopicGroup[],
  notes: Record<string, TopicNote>,
): void {
  const html = generateRevisionHTML(
    subjectKey,
    subjectName,
    subjectCode,
    topicGroups,
    notes,
  );
  const win = window.open("", "_blank");
  if (!win) return;
  win.document.write(html);
  win.document.close();
}
