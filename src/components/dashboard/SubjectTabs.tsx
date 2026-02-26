"use client";

import { useState } from "react";
import type { Exam } from "@/data/subjects";
import type { GradeBounds } from "@/data/papers";
import { topicNotes } from "@/data/notes";
import { printRevisionSheet } from "@/lib/printSheet";
import PapersTab from "./tabs/PapersTab";
import TopicsTab from "./tabs/TopicsTab";
import StrategyTab from "./tabs/StrategyTab";
import PaperLogTab from "./tabs/PaperLogTab";

interface TopicGroup {
  label: string;
  key: string;
  items: [string, string][];
}

interface PaperOption {
  label: string;
  max: number;
}

export interface SubjectTabsProps {
  subjectKey: string;
  subjectName: string;
  subjectCode: string;
  color: string;
  exams: Exam[];
  topicGroups: TopicGroup[];
  strategy: string;
  gradeBounds: GradeBounds;
  paperOptions: PaperOption[];
}

const TABS = ["Papers", "Topics", "Strategy", "Paper Log"] as const;
type Tab = (typeof TABS)[number];

export default function SubjectTabs({
  subjectKey,
  subjectName,
  subjectCode,
  color,
  exams,
  topicGroups,
  strategy,
  gradeBounds,
  paperOptions,
}: SubjectTabsProps) {
  const [activeTab, setActiveTab] = useState<Tab>("Papers");

  function handlePrint() {
    printRevisionSheet(
      subjectKey,
      subjectName,
      subjectCode,
      topicGroups,
      topicNotes,
    );
  }

  return (
    <>
      <div className="flex items-center border-b border-[var(--border)] mb-6 gap-2">
        <div className="flex flex-1">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`bg-transparent border-0 px-4 py-2 text-[13px] cursor-pointer -mb-px transition-colors duration-150 ${
                activeTab === tab
                  ? "font-semibold text-[var(--text)]"
                  : "font-normal text-[var(--muted)] hover:text-[var(--text)]"
              }`}
              style={{
                borderBottom: `2px solid ${activeTab === tab ? color : "transparent"}`,
              }}
            >
              {tab}
            </button>
          ))}
        </div>
        <button
          onClick={handlePrint}
          className="shrink-0 px-3 py-1.5 rounded-[8px] text-[12px] font-semibold border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--accent)] cursor-pointer transition-colors duration-150"
        >
          Print Sheet
        </button>
      </div>

      {activeTab === "Papers" && <PapersTab exams={exams} color={color} />}
      {activeTab === "Topics" && (
        <TopicsTab
          subjectKey={subjectKey}
          color={color}
          topicGroups={topicGroups}
        />
      )}
      {activeTab === "Strategy" && (
        <StrategyTab
          strategy={strategy}
          color={color}
          gradeBounds={gradeBounds}
        />
      )}
      {activeTab === "Paper Log" && (
        <PaperLogTab
          subjectKey={subjectKey}
          color={color}
          paperOptions={paperOptions}
        />
      )}
    </>
  );
}
