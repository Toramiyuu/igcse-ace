import Link from "next/link";
import type { MockResult, MockBreakdown } from "@/lib/mockExam";

export default function ResultsScreen({
  results,
  breakdown,
  saving,
  saveError = false,
}: {
  results: MockResult[];
  breakdown: MockBreakdown;
  saving: boolean;
  saveError?: boolean;
}) {
  const correct = results.filter((r) => r.passed).length;
  const pct =
    results.length > 0 ? Math.round((correct / results.length) * 100) : 0;

  const bySubject: Record<string, { correct: number; total: number }> = {};
  for (const { card, passed } of results) {
    if (!bySubject[card.subject])
      bySubject[card.subject] = { correct: 0, total: 0 };
    bySubject[card.subject].total += 1;
    if (passed) bySubject[card.subject].correct += 1;
  }

  return (
    <div className="p-10 max-w-[600px]">
      <h1 className="font-[family-name:var(--font-syne)] text-[28px] font-extrabold mb-6">
        Results
      </h1>

      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[14px] px-8 py-7 mb-6 text-center">
        <div
          className="font-[family-name:var(--font-syne)] text-[64px] font-extrabold leading-none mb-1"
          style={{
            color:
              pct >= 80
                ? "var(--topic-done)"
                : pct >= 60
                  ? "var(--accent)"
                  : "#ef4444",
          }}
        >
          {pct}%
        </div>
        <div className="text-[var(--muted)] text-[14px]">
          {correct} / {results.length} correct
        </div>
        {saving && (
          <div className="text-[12px] text-[var(--muted)] mt-2">Saving…</div>
        )}
        {saveError && (
          <div className="text-[12px] text-[#ef4444] mt-2">
            Could not save result — check your connection
          </div>
        )}
      </div>

      <h2 className="font-[family-name:var(--font-syne)] font-bold text-[11px] uppercase tracking-[0.08em] text-[var(--muted)] mb-3">
        By Type
      </h2>
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[12px] divide-y divide-[var(--border)] mb-6">
        {(["def", "formula", "fact"] as const).map((type) => {
          const { correct: c, total: t } = breakdown[type];
          return (
            t > 0 && (
              <div
                key={type}
                className="flex items-center justify-between px-5 py-3"
              >
                <span className="text-[13px] font-semibold">
                  {type === "def"
                    ? "Definitions"
                    : type === "formula"
                      ? "Formulae"
                      : "Facts"}
                </span>
                <span className="text-[13px] text-[var(--muted)]">
                  {c}/{t}
                </span>
              </div>
            )
          );
        })}
      </div>

      {Object.keys(bySubject).length > 1 && (
        <>
          <h2 className="font-[family-name:var(--font-syne)] font-bold text-[11px] uppercase tracking-[0.08em] text-[var(--muted)] mb-3">
            By Subject
          </h2>
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[12px] divide-y divide-[var(--border)] mb-6">
            {Object.entries(bySubject).map(
              ([subj, { correct: c, total: t }]) => (
                <div
                  key={subj}
                  className="flex items-center justify-between px-5 py-3"
                >
                  <span className="text-[13px] font-semibold uppercase">
                    {subj}
                  </span>
                  <span className="text-[13px] text-[var(--muted)]">
                    {c}/{t}
                  </span>
                </div>
              ),
            )}
          </div>
        </>
      )}

      <div className="flex gap-3">
        <Link
          href="/dashboard"
          className="flex-1 text-center py-3 rounded-[10px] border border-[var(--border)] text-[var(--muted)] no-underline text-[14px] font-semibold hover:text-[var(--text)] transition-colors"
        >
          Back to Dashboard
        </Link>
        <button
          onClick={() => window.location.reload()}
          className="flex-1 py-3 rounded-[10px] bg-[var(--accent)] text-black font-bold text-[14px] border-0 cursor-pointer"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
