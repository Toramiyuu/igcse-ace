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
    <Link href={`/dashboard/subjects/${subjectKey}`} className="no-underline">
      <div
        className="rounded-[12px] p-[18px_18px_20px] cursor-pointer transition-[border-color] duration-150 group"
        style={{
          background: `linear-gradient(135deg, var(--surface) 0%, ${meta.color}10 100%)`,
          border: `1px solid ${meta.color}28`,
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.borderColor = `${meta.color}88`)
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.borderColor = `${meta.color}28`)
        }
      >
        <div
          className="w-2 h-2 rounded-full mb-3"
          style={{ background: meta.color }}
        />
        <div className="font-[family-name:var(--font-syne)] font-bold text-[14px] mb-[3px]">
          {meta.name}
        </div>
        <div className="text-[var(--muted)] text-[12px]">{meta.code}</div>
      </div>
    </Link>
  );
}
