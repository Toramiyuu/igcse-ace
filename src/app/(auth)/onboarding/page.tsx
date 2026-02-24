"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { SubjectKey } from "@/types";

const ALL_SUBJECTS: {
  key: SubjectKey;
  name: string;
  code: string;
  color: string;
}[] = [
  { key: "ict", name: "ICT", code: "0417", color: "#60a0f0" },
  { key: "cs", name: "Computer Science", code: "0478", color: "#a070f0" },
  { key: "business", name: "Business Studies", code: "0450", color: "#50d08f" },
  {
    key: "engfirst",
    name: "English First Language",
    code: "0500",
    color: "#f0c040",
  },
  { key: "englit", name: "English Literature", code: "0475", color: "#f060a0" },
  { key: "science", name: "Sciences (Double)", code: "0654", color: "#f06060" },
  {
    key: "addmath",
    name: "Additional Mathematics",
    code: "0606",
    color: "#f09040",
  },
  { key: "gp", name: "Global Perspectives", code: "0457", color: "#40d0f0" },
  { key: "maths", name: "Mathematics", code: "0580", color: "#60a0f0" },
  { key: "physics", name: "Physics", code: "0625", color: "#a070f0" },
  { key: "chemistry", name: "Chemistry", code: "0620", color: "#50d08f" },
  { key: "biology", name: "Biology", code: "0610", color: "#f0c040" },
  { key: "history", name: "History", code: "0470", color: "#f060a0" },
  { key: "geography", name: "Geography", code: "0460", color: "#40d0f0" },
  { key: "economics", name: "Economics", code: "0455", color: "#f09040" },
];

export default function OnboardingPage() {
  const [selected, setSelected] = useState<SubjectKey[]>([]);
  const [year, setYear] = useState(2026);
  const [zone, setZone] = useState(4);
  const [saving, setSaving] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  function toggle(key: SubjectKey) {
    setSelected((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
    );
  }

  async function save() {
    if (selected.length === 0) return;
    setSaving(true);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;

    await supabase.from("user_profiles").upsert({
      id: user.id,
      subjects: selected,
      session_year: year,
      zone,
      subscription_status: "trialing",
      trial_end: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    });

    const res = await fetch("/api/stripe/checkout", { method: "POST" });
    const { url } = await res.json();
    if (url) window.location.href = url;
    else router.push("/dashboard");
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        padding: "60px 24px",
      }}
    >
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <div
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: 22,
            marginBottom: 40,
            color: "var(--accent)",
          }}
        >
          IGCSE Ace
        </div>
        <h1
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: 32,
            fontWeight: 800,
            marginBottom: 8,
          }}
        >
          Choose your subjects
        </h1>
        <p style={{ color: "var(--muted)", marginBottom: 32 }}>
          Select the subjects you're sitting. You can change these later.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(190px,1fr))",
            gap: 10,
            marginBottom: 36,
          }}
        >
          {ALL_SUBJECTS.map((s) => {
            const active = selected.includes(s.key);
            return (
              <button
                key={s.key}
                onClick={() => toggle(s.key)}
                style={{
                  background: active ? `${s.color}18` : "var(--surface)",
                  border: `1px solid ${active ? s.color : "var(--border)"}`,
                  borderRadius: 10,
                  padding: "14px 16px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  textAlign: "left",
                  transition: "all 0.15s",
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: s.color,
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{
                      color: "var(--text)",
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    {s.name}
                  </div>
                  <div style={{ color: "var(--muted)", fontSize: 11 }}>
                    {s.code}
                  </div>
                </div>
                {active && (
                  <span
                    style={{ marginLeft: "auto", color: s.color, fontSize: 14 }}
                  >
                    ✓
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            marginBottom: 32,
            flexWrap: "wrap",
          }}
        >
          <div>
            <label
              style={{
                fontSize: 13,
                color: "var(--muted)",
                display: "block",
                marginBottom: 6,
              }}
            >
              Session year
            </label>
            <select
              value={year}
              onChange={(e) => setYear(+e.target.value)}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--text)",
                padding: "8px 12px",
                borderRadius: 8,
                fontSize: 14,
              }}
            >
              <option value={2026}>May/June 2026</option>
              <option value={2027}>May/June 2027</option>
            </select>
          </div>
          <div>
            <label
              style={{
                fontSize: 13,
                color: "var(--muted)",
                display: "block",
                marginBottom: 6,
              }}
            >
              Time zone
            </label>
            <select
              value={zone}
              onChange={(e) => setZone(+e.target.value)}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--text)",
                padding: "8px 12px",
                borderRadius: 8,
                fontSize: 14,
              }}
            >
              {[1, 2, 3, 4, 5, 6].map((z) => (
                <option key={z} value={z}>
                  Zone {z}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={save}
          disabled={selected.length === 0 || saving}
          style={{
            background:
              selected.length > 0 ? "var(--accent)" : "var(--surface2)",
            color: selected.length > 0 ? "#000" : "var(--muted)",
            fontWeight: 700,
            padding: "14px 32px",
            borderRadius: 10,
            border: "none",
            fontSize: 16,
            cursor: selected.length > 0 ? "pointer" : "not-allowed",
            width: "100%",
          }}
        >
          {saving
            ? "Setting up your account…"
            : `Continue with ${selected.length} subject${selected.length !== 1 ? "s" : ""}`}
        </button>
        <p
          style={{
            color: "var(--muted)",
            fontSize: 12,
            textAlign: "center",
            marginTop: 12,
          }}
        >
          7-day free trial starts now · £4/month after
        </p>
      </div>
    </div>
  );
}
