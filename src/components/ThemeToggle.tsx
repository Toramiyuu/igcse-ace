"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function getTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  return (localStorage.getItem("igcse-theme") as Theme) ?? "dark";
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("igcse-theme", theme);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(getTheme());
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    applyTheme(next);
    setTheme(next);
  }

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      style={{
        background: "none",
        border: "1px solid var(--border)",
        color: "var(--muted)",
        width: 32,
        height: 32,
        borderRadius: 8,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 15,
        flexShrink: 0,
        transition: "border-color 0.12s, color 0.12s",
      }}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
