"use client";

import Link from "next/link";
import type { SubjectMeta } from "@/data/constants";

export default function SubjectCard({
  subjectKey,
  meta,
}: {
  subjectKey: string;
  meta: SubjectMeta;
}) {
  return (
    <Link
      href={`/dashboard/subjects/${subjectKey}`}
      style={{ textDecoration: "none" }}
    >
      <div
        style={{
          borderRadius: "12px",
          padding: "18px 18px 20px",
          cursor: "pointer",
          background: `linear-gradient(135deg, var(--surface) 0%, ${meta.color}10 100%)`,
          border: `1px solid ${meta.color}28`,
          transition: "border-color 0.15s ease",
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.borderColor = `${meta.color}88`)
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.borderColor = `${meta.color}28`)
        }
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: meta.color,
            marginBottom: "12px",
          }}
        />
        <div
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 700,
            fontSize: "14px",
            marginBottom: "4px",
            color: "var(--text)",
          }}
        >
          {meta.name}
        </div>
        <div style={{ color: "var(--muted)", fontSize: "12px" }}>
          {meta.code}
        </div>
      </div>
    </Link>
  );
}
