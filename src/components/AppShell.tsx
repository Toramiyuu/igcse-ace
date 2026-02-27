"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import type { UserProfile } from "@/types";
import { SUBJECT_META } from "@/data/constants";
import ThemeToggle from "@/components/ThemeToggle";
import { ZONE_INFO, type ZoneKey } from "@/data/zones";

const NAV = [
  { href: "/dashboard", label: "Overview", icon: "⊞" },
  { href: "/dashboard/tracker", label: "Exam Tracker", icon: "📅" },
  { href: "/dashboard/flashcards", label: "Flashcards", icon: "🃏" },
  { href: "/dashboard/timetable", label: "Timetable", icon: "📆" },
  { href: "/dashboard/mock-exam", label: "Mock Exam", icon: "📝" },
  { href: "/dashboard/formulas", label: "Formulas", icon: "∑" },
];

export default function AppShell({
  profile,
  children,
}: {
  profile: UserProfile;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  async function signOut() {
    await supabase.auth.signOut();
    router.push("/");
  }

  const subjects = (profile.subjects || []).filter(
    (k) => SUBJECT_META[k as keyof typeof SUBJECT_META],
  );

  function isActive(href: string) {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  }

  return (
    <>
      <style>{`
        .nav-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 12px;
          border-radius: 8px;
          font-size: 14px;
          margin-bottom: 2px;
          transition: background 0.12s ease, color 0.12s ease;
          text-decoration: none;
          color: var(--muted);
          font-weight: 400;
        }
        .nav-item:hover { background: var(--surface2); color: var(--text); }
        .nav-item.active { background: var(--surface2); color: var(--text); font-weight: 600; }

        .subject-item {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 7px 12px;
          border-radius: 8px;
          font-size: 13px;
          margin-bottom: 1px;
          transition: background 0.12s ease, color 0.12s ease;
          text-decoration: none;
          color: var(--muted);
          font-weight: 400;
        }
        .subject-item:hover { background: var(--surface2); color: var(--text); }
        .subject-item.active { background: var(--surface2); color: var(--text); font-weight: 600; }

        .signout-btn {
          width: 100%;
          background: transparent;
          border: 1px solid var(--border);
          color: var(--muted);
          padding: 7px 12px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 13px;
          transition: color 0.12s ease, border-color 0.12s ease;
        }
        .signout-btn:hover { color: var(--text); border-color: var(--muted); }
      `}</style>

      <div
        style={{ display: "flex", minHeight: "100vh", background: "var(--bg)" }}
      >
        {/* Sidebar */}
        <aside
          style={{
            width: "240px",
            minHeight: "100vh",
            height: "100vh",
            background: "var(--surface)",
            borderRight: "1px solid var(--border)",
            display: "flex",
            flexDirection: "column",
            position: "sticky",
            top: 0,
            overflowY: "auto",
            flexShrink: 0,
          }}
        >
          {/* Logo */}
          <div
            style={{
              padding: "22px 20px 18px",
              borderBottom: "1px solid var(--border)",
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 800,
              fontSize: "18px",
              letterSpacing: "-0.02em",
            }}
          >
            IGCSE <span style={{ color: "var(--accent)" }}>Ace</span>
          </div>

          {/* Main nav */}
          <nav style={{ padding: "10px 8px", flex: 1 }}>
            {NAV.map(({ href, label, icon }) => (
              <Link
                key={href}
                href={href}
                className={`nav-item${isActive(href) ? " active" : ""}`}
              >
                <span
                  style={{
                    width: "20px",
                    textAlign: "center",
                    fontSize: "15px",
                    opacity: 0.75,
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </span>
                {label}
              </Link>
            ))}

            {/* Subjects section */}
            {subjects.length > 0 && (
              <>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    padding: "18px 12px 8px",
                  }}
                >
                  Subjects
                </div>
                {subjects.map((key) => {
                  const meta = SUBJECT_META[key as keyof typeof SUBJECT_META];
                  if (!meta) return null;
                  const href = `/dashboard/subjects/${key}`;
                  return (
                    <Link
                      key={key}
                      href={href}
                      className={`subject-item${isActive(href) ? " active" : ""}`}
                    >
                      <span
                        style={{
                          width: "7px",
                          height: "7px",
                          borderRadius: "50%",
                          background: meta.color,
                          flexShrink: 0,
                        }}
                      />
                      {meta.name}
                    </Link>
                  );
                })}
              </>
            )}
          </nav>

          {/* Footer */}
          <div
            style={{
              padding: "16px 20px",
              borderTop: "1px solid var(--border)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "var(--muted)",
                    marginBottom: "2px",
                  }}
                >
                  {profile.session_year}
                </div>
                <Link
                  href="/onboarding"
                  style={{ textDecoration: "none" }}
                  title="Change zone"
                >
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "var(--accent)",
                      lineHeight: 1.3,
                    }}
                  >
                    {(() => {
                      const zk = `Z${profile.zone}` as ZoneKey;
                      const info = ZONE_INFO[zk];
                      return info
                        ? `${info.label} · ${info.region}`
                        : `Zone ${profile.zone}`;
                    })()}
                  </div>
                </Link>
              </div>
              <ThemeToggle />
            </div>
            <button onClick={signOut} className="signout-btn">
              Sign out
            </button>
          </div>
        </aside>

        {/* Main content */}
        <main style={{ flex: 1, minWidth: 0, overflowX: "hidden" }}>
          {children}
        </main>
      </div>
    </>
  );
}
