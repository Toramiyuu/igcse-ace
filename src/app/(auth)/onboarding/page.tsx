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
    <div className="min-h-screen bg-[var(--bg)] py-[60px] px-6">
      <div className="max-w-[640px] mx-auto">
        <div className="font-[family-name:var(--font-syne)] font-extrabold text-[22px] mb-10 text-[var(--accent)]">
          IGCSE Ace
        </div>
        <h1 className="font-[family-name:var(--font-syne)] text-[32px] font-extrabold mb-2">
          Choose your subjects
        </h1>
        <p className="text-[var(--muted)] mb-8">
          Select the subjects you&apos;re sitting. You can change these later.
        </p>

        <div
          className="grid gap-[10px] mb-9"
          style={{ gridTemplateColumns: "repeat(auto-fill,minmax(190px,1fr))" }}
        >
          {SUBJECT_KEYS.map((key) => {
            const s = SUBJECT_META[key];
            const active = selected.includes(key);
            return (
              <button
                key={key}
                onClick={() => toggle(key)}
                className="rounded-[10px] px-4 py-[14px] cursor-pointer flex items-center gap-[10px] text-left transition-all duration-150"
                style={{
                  background: active ? `${s.color}18` : "var(--surface)",
                  border: `1px solid ${active ? s.color : "var(--border)"}`,
                }}
              >
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: s.color }}
                />
                <div className="flex-1 min-w-0">
                  <div className="text-[var(--text)] text-[13px] font-semibold truncate">
                    {s.name}
                  </div>
                  <div className="text-[var(--muted)] text-[11px]">
                    {s.code}
                  </div>
                </div>
                {active && (
                  <span
                    className="ml-auto text-[14px]"
                    style={{ color: s.color }}
                  >
                    ✓
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="flex gap-4 mb-8 flex-wrap">
          <div>
            <label className="text-[13px] text-[var(--muted)] block mb-1.5">
              Session year
            </label>
            <select
              value={year}
              onChange={(e) => setYear(+e.target.value)}
              className="bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] px-3 py-2 rounded-lg text-[14px]"
            >
              <option value={2026}>May/June 2026</option>
              <option value={2027}>May/June 2027</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="text-[13px] text-[var(--muted)] block mb-1.5">
              Cambridge zone
            </label>
            <div className="flex flex-wrap gap-2">
              {(["Z1", "Z2", "Z3", "Z4", "Z5"] as ZoneKey[]).map((zk, i) => {
                const zNum = i + 1;
                const info = ZONE_INFO[zk];
                const active = zone === zNum;
                return (
                  <button
                    key={zk}
                    type="button"
                    onClick={() => setZone(zNum)}
                    className="rounded-[10px] px-3 py-2.5 text-left transition-all duration-150 border"
                    style={{
                      background: active
                        ? "color-mix(in srgb, var(--accent) 12%, transparent)"
                        : "var(--surface)",
                      borderColor: active ? "var(--accent)" : "var(--border)",
                    }}
                  >
                    <div className="text-[12px] font-bold text-[var(--accent)]">
                      {info.label}
                    </div>
                    <div className="text-[11px] text-[var(--text)] font-semibold leading-tight">
                      {info.region}
                    </div>
                    <div className="text-[10px] text-[var(--muted)] leading-tight mt-0.5">
                      {info.countries}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <button
          onClick={save}
          disabled={selected.length === 0 || saving}
          className="w-full font-bold py-[14px] px-8 rounded-[10px] border-0 text-[16px] transition-colors duration-150"
          style={{
            background:
              selected.length > 0 ? "var(--accent)" : "var(--surface2)",
            color: selected.length > 0 ? "#000" : "var(--muted)",
            cursor: selected.length > 0 ? "pointer" : "not-allowed",
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
