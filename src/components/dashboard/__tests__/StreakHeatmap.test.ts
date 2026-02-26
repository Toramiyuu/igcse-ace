import { describe, it, expect } from "vitest";

function cellColor(actions: number): string {
  if (actions === 0) return "var(--streak-empty)";
  if (actions <= 2) return "var(--streak-low)";
  if (actions <= 5) return "var(--streak-mid)";
  return "var(--streak-high)";
}

describe("cellColor", () => {
  it("returns streak-empty for 0 actions", () => {
    expect(cellColor(0)).toBe("var(--streak-empty)");
  });

  it("returns streak-low for 1–2 actions", () => {
    expect(cellColor(1)).toBe("var(--streak-low)");
    expect(cellColor(2)).toBe("var(--streak-low)");
  });

  it("returns streak-mid for 3–5 actions", () => {
    expect(cellColor(3)).toBe("var(--streak-mid)");
    expect(cellColor(5)).toBe("var(--streak-mid)");
  });

  it("returns streak-high for 6+ actions", () => {
    expect(cellColor(6)).toBe("var(--streak-high)");
    expect(cellColor(100)).toBe("var(--streak-high)");
  });

  it("uses CSS variables (no hardcoded hex)", () => {
    for (const n of [0, 1, 3, 6]) {
      expect(cellColor(n)).toMatch(/^var\(--streak-/);
    }
  });
});
