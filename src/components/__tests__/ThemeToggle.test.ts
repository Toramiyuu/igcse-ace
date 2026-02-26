import { describe, it, expect, beforeEach, vi } from "vitest";

const store: Record<string, string> = {};
vi.stubGlobal("localStorage", {
  getItem: (k: string) => store[k] ?? null,
  setItem: (k: string, v: string) => { store[k] = v; },
  removeItem: (k: string) => { delete store[k]; },
  clear: () => { for (const k in store) delete store[k]; },
});

const attrs: Record<string, string> = {};
vi.stubGlobal("document", {
  documentElement: {
    setAttribute: (k: string, v: string) => { attrs[k] = v; },
    getAttribute: (k: string) => attrs[k] ?? null,
    removeAttribute: (k: string) => { delete attrs[k]; },
  },
});

type Theme = "dark" | "light";

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("igcse-theme", theme);
}

function getTheme(): Theme {
  return (localStorage.getItem("igcse-theme") as Theme) ?? "dark";
}

describe("theme logic", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
  });

  it("defaults to dark when nothing stored", () => {
    expect(getTheme()).toBe("dark");
  });

  it("applyTheme sets data-theme attribute on <html>", () => {
    applyTheme("light");
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
  });

  it("applyTheme persists to localStorage", () => {
    applyTheme("light");
    expect(localStorage.getItem("igcse-theme")).toBe("light");
  });

  it("getTheme reads persisted value", () => {
    applyTheme("light");
    expect(getTheme()).toBe("light");
    applyTheme("dark");
    expect(getTheme()).toBe("dark");
  });

  it("toggle cycle: dark → light → dark", () => {
    const next = (t: Theme): Theme => (t === "dark" ? "light" : "dark");
    applyTheme("dark");
    applyTheme(next(getTheme()));
    expect(getTheme()).toBe("light");
    applyTheme(next(getTheme()));
    expect(getTheme()).toBe("dark");
  });
});
