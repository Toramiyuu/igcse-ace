"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SUBJECT_META, SUBJECT_KEYS } from "@/data/constants";
import type { SubjectKey } from "@/data/subjects";
import { ZONE_INFO, type ZoneKey } from "@/data/zones";

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
    });

    router.push("/dashboard");
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        padding: "60px 24px 80px",
      }}
    >
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        {/* Logo */}
        <div
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "22px",
            marginBottom: "40px",
            color: "var(--accent)",
            letterSpacing: "-0.02em",
          }}
        >
          IGCSE Ace
        </div>

        <h1
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "32px",
            fontWeight: 800,
            marginBottom: "8px",
            color: "var(--text)",
            letterSpacing: "-0.02em",
          }}
        >
          Choose your subjects
        </h1>
        <p
          style={{
            color: "var(--muted)",
            fontSize: "15px",
            marginBottom: "32px",
            lineHeight: 1.5,
          }}
        >
          Select the subjects you&apos;re sitting. You can change these later.
        </p>

        {/* Subject grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
            gap: "10px",
            marginBottom: "36px",
          }}
        >
          {SUBJECT_KEYS.map((key) => {
            const s = SUBJECT_META[key];
            const active = selected.includes(key);
            return (
              <button
                key={key}
                onClick={() => toggle(key)}
                style={{
                  borderRadius: "10px",
                  padding: "14px 16px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  textAlign: "left",
                  background: active ? `${s.color}18` : "var(--surface)",
                  border: `1px solid ${active ? s.color : "var(--border)"}`,
                  transition: "border-color 0.15s ease, background 0.15s ease",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    flexShrink: 0,
                    background: s.color,
                  }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      color: "var(--text)",
                      fontSize: "13px",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {s.name}
                  </div>
                  <div style={{ color: "var(--muted)", fontSize: "11px" }}>
                    {s.code}
                  </div>
                </div>
                {active && (
                  <span
                    style={{
                      marginLeft: "auto",
                      fontSize: "14px",
                      color: s.color,
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Session year */}
        <div style={{ marginBottom: "28px" }}>
          <label
            style={{
              fontSize: "13px",
              color: "var(--muted)",
              display: "block",
              marginBottom: "8px",
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
              padding: "9px 14px",
              borderRadius: "8px",
              fontSize: "14px",
              cursor: "pointer",
              outline: "none",
            }}
          >
            <option value={2026}>May/June 2026</option>
            <option value={2027}>May/June 2027</option>
          </select>
        </div>

        {/* Cambridge zone */}
        <div style={{ marginBottom: "32px" }}>
          <label
            style={{
              fontSize: "13px",
              color: "var(--muted)",
              display: "block",
              marginBottom: "8px",
            }}
          >
            Cambridge zone
          </label>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "8px",
            }}
          >
            {(["Z1", "Z2", "Z3", "Z4", "Z5"] as ZoneKey[]).map((zk, i) => {
              const zNum = i + 1;
              const info = ZONE_INFO[zk];
              const active = zone === zNum;
              return (
                <button
                  key={zk}
                  type="button"
                  onClick={() => setZone(zNum)}
                  style={{
                    borderRadius: "10px",
                    padding: "10px 12px",
                    textAlign: "left",
                    border: `1px solid ${active ? "var(--accent)" : "var(--border)"}`,
                    background: active
                      ? "color-mix(in srgb, var(--accent) 12%, transparent)"
                      : "var(--surface)",
                    cursor: "pointer",
                    transition:
                      "border-color 0.15s ease, background 0.15s ease",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "var(--accent)",
                      marginBottom: "3px",
                    }}
                  >
                    {info.label}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "var(--text)",
                      fontWeight: 600,
                      lineHeight: 1.3,
                      marginBottom: "3px",
                    }}
                  >
                    {info.region}
                  </div>
                  <div
                    style={{
                      fontSize: "10px",
                      color: "var(--muted)",
                      lineHeight: 1.4,
                    }}
                  >
                    {info.countries}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={save}
          disabled={selected.length === 0 || saving}
          style={{
            width: "100%",
            fontWeight: 700,
            padding: "15px 32px",
            borderRadius: "10px",
            border: "none",
            fontSize: "16px",
            background:
              selected.length > 0 ? "var(--accent)" : "var(--surface2)",
            color: selected.length > 0 ? "#000" : "var(--muted)",
            cursor: selected.length > 0 ? "pointer" : "not-allowed",
            transition: "background 0.15s ease",
          }}
        >
          {saving
            ? "Setting up your account…"
            : `Continue with ${selected.length} subject${selected.length !== 1 ? "s" : ""}`}
        </button>
      </div>
    </div>
  );
}
