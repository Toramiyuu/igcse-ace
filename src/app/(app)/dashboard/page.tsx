"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { UserProfile } from "@/types";

const SUBJECT_META: Record<
  string,
  { name: string; code: string; color: string }
> = {
  ict: { name: "ICT", code: "0417", color: "#60a0f0" },
  cs: { name: "Computer Science", code: "0478", color: "#a070f0" },
  business: { name: "Business Studies", code: "0450", color: "#50d08f" },
  engfirst: { name: "English First Language", code: "0500", color: "#f0c040" },
  englit: { name: "English Literature", code: "0475", color: "#f060a0" },
  science: { name: "Sciences (Double)", code: "0654", color: "#f06060" },
  addmath: { name: "Additional Mathematics", code: "0606", color: "#f09040" },
  gp: { name: "Global Perspectives", code: "0457", color: "#40d0f0" },
  maths: { name: "Mathematics", code: "0580", color: "#60a0f0" },
  physics: { name: "Physics", code: "0625", color: "#a070f0" },
  chemistry: { name: "Chemistry", code: "0620", color: "#50d08f" },
  biology: { name: "Biology", code: "0610", color: "#f0c040" },
  history: { name: "History", code: "0470", color: "#f060a0" },
  geography: { name: "Geography", code: "0460", color: "#40d0f0" },
  economics: { name: "Economics", code: "0455", color: "#f09040" },
};

export default function DashboardPage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        router.push("/login");
        return;
      }
      const { data } = await supabase
        .from("user_profiles")
        .select("*")
        .eq("id", user.id)
        .single();
      if (!data) {
        router.push("/onboarding");
        return;
      }
      setProfile(data);
      setLoading(false);
    }
    load();
  }, []);

  async function signOut() {
    await supabase.auth.signOut();
    router.push("/");
  }

  if (loading)
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "var(--bg)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ color: "var(--muted)", fontFamily: "var(--font-syne)" }}>
          Loading…
        </div>
      </div>
    );

  const subjects = (profile?.subjects || [])
    .map((k) => SUBJECT_META[k])
    .filter(Boolean);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      {/* Top nav */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 32px",
          borderBottom: "1px solid var(--border)",
          position: "sticky",
          top: 0,
          background: "rgba(8,8,16,0.9)",
          backdropFilter: "blur(12px)",
          zIndex: 100,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: 18,
          }}
        >
          IGCSE <span style={{ color: "var(--accent)" }}>Ace</span>
        </div>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <span style={{ color: "var(--muted)", fontSize: 13 }}>
            {profile?.session_year} · Zone {profile?.zone}
          </span>
          <button
            onClick={signOut}
            style={{
              background: "none",
              border: "1px solid var(--border)",
              color: "var(--muted)",
              padding: "6px 14px",
              borderRadius: 8,
              cursor: "pointer",
              fontSize: 13,
            }}
          >
            Sign out
          </button>
        </div>
      </nav>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 32px" }}>
        {/* Hero */}
        <div style={{ marginBottom: 48 }}>
          <h1
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: 36,
              fontWeight: 800,
              marginBottom: 8,
            }}
          >
            Your Dashboard
          </h1>
          <p style={{ color: "var(--muted)" }}>
            {subjects.length} subject{subjects.length !== 1 ? "s" : ""} ·
            May/June {profile?.session_year} · Cambridge CAIE
          </p>
        </div>

        {/* Subject grid */}
        <h2
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: 20,
            fontWeight: 700,
            marginBottom: 20,
          }}
        >
          Your Subjects
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 16,
            marginBottom: 48,
          }}
        >
          {subjects.map((s, i) => (
            <div
              key={i}
              style={{
                background: "var(--surface)",
                border: `1px solid ${s.color}33`,
                borderRadius: 14,
                padding: "24px 20px",
                cursor: "pointer",
                transition: "all 0.15s",
                backgroundImage: `linear-gradient(135deg, var(--surface) 0%, ${s.color}12 100%)`,
              }}
              onMouseOver={(e) => (e.currentTarget.style.borderColor = s.color)}
              onMouseOut={(e) =>
                (e.currentTarget.style.borderColor = `${s.color}33`)
              }
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: s.color,
                  marginBottom: 14,
                }}
              />
              <div
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                  fontSize: 16,
                  marginBottom: 4,
                }}
              >
                {s.name}
              </div>
              <div style={{ color: "var(--muted)", fontSize: 13 }}>
                {s.code}
              </div>
            </div>
          ))}
        </div>

        {/* Coming soon banner */}
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 14,
            padding: "32px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 32, marginBottom: 12 }}>🚀</div>
          <h3
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: 20,
              fontWeight: 700,
              marginBottom: 8,
            }}
          >
            Full study tools coming next
          </h3>
          <p
            style={{
              color: "var(--muted)",
              fontSize: 14,
              maxWidth: 440,
              margin: "0 auto",
            }}
          >
            Flashcards, mock exams, timetable, streak tracker, past paper log,
            and more are being wired up to your account. Check back shortly.
          </p>
        </div>
      </div>
    </div>
  );
}
