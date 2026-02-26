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
    <div className="flex min-h-screen bg-[var(--bg)]">
      {/* Sidebar */}
      <aside className="w-[220px] min-h-screen bg-[var(--surface)] border-r border-[var(--border)] flex flex-col sticky top-0 h-screen overflow-y-auto shrink-0">
        {/* Logo */}
        <div className="px-[18px] pt-5 pb-4 border-b border-[var(--border)] font-[family-name:var(--font-syne)] font-extrabold text-[17px] tracking-[-0.3px]">
          IGCSE <span className="text-[var(--accent)]">Ace</span>
        </div>

        {/* Main nav */}
        <nav className="px-[10px] pt-3 pb-2 flex-1">
          <div className="mb-1">
            {NAV.map(({ href, label, icon }) => (
              <Link key={href} href={href} className="no-underline block">
                <div
                  className={`flex items-center gap-[10px] px-[10px] py-2 rounded-lg text-[13px] mb-0.5 transition-[background,color] duration-[120ms] ${
                    isActive(href)
                      ? "font-semibold text-[var(--text)] bg-[var(--surface2)]"
                      : "font-normal text-[var(--muted)] hover:bg-[var(--surface2)] hover:text-[var(--text)]"
                  }`}
                >
                  <span className="text-[14px] opacity-80">{icon}</span>
                  {label}
                </div>
              </Link>
            ))}
          </div>

          {/* Subjects divider */}
          {subjects.length > 0 && (
            <>
              <div className="text-[10px] font-bold tracking-[0.08em] text-[var(--muted)] px-[10px] pt-3 pb-1.5 uppercase">
                Subjects
              </div>
              {subjects.map((key) => {
                const meta = SUBJECT_META[key as keyof typeof SUBJECT_META];
                if (!meta) return null;
                const href = `/dashboard/subjects/${key}`;
                return (
                  <Link key={key} href={href} className="no-underline block">
                    <div
                      className={`flex items-center gap-[9px] px-[10px] py-[7px] rounded-lg text-[12px] mb-px transition-[background,color] duration-[120ms] ${
                        isActive(href)
                          ? "font-semibold text-[var(--text)] bg-[var(--surface2)]"
                          : "font-normal text-[var(--muted)] hover:bg-[var(--surface2)] hover:text-[var(--text)]"
                      }`}
                    >
                      <span
                        className="w-[7px] h-[7px] rounded-full shrink-0"
                        style={{ background: meta.color }}
                      />
                      {meta.name}
                    </div>
                  </Link>
                );
              })}
            </>
          )}
        </nav>

        {/* Footer */}
        <div className="px-[18px] pt-3 pb-4 border-t border-[var(--border)]">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="text-[11px] text-[var(--muted)]">
                {profile.session_year}
              </div>
              <Link
                href="/onboarding"
                className="no-underline"
                title="Change zone"
              >
                <div className="text-[11px] font-semibold text-[var(--accent)] leading-tight">
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
          <button
            onClick={signOut}
            className="w-full bg-transparent border border-[var(--border)] text-[var(--muted)] py-[5px] px-3 rounded-[7px] cursor-pointer text-[12px] hover:text-[var(--text)] hover:border-[var(--muted)] transition-colors duration-[120ms]"
          >
            Sign out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0 overflow-x-hidden">{children}</main>
    </div>
  );
}
