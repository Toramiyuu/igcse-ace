import { describe, it, expect, vi, beforeEach } from "vitest";
import { generateRevisionHTML } from "@/lib/printSheet";

const mockTopicGroups = [
  {
    label: "Theory",
    key: "ict-theory-topics",
    items: [
      ["1", "Computer Systems"],
      ["2", "Input/Output Devices"],
    ] as [string, string][],
  },
];

const mockTopicNotes = {
  "ict-1": {
    defs: ["Computer system = hardware + software working together"],
    formulae: ["Data rate = bandwidth × efficiency"],
    facts: ["RAM is volatile; ROM is non-volatile"],
  },
};

describe("generateRevisionHTML", () => {
  beforeEach(() => {
    vi.stubGlobal("localStorage", {
      getItem: vi.fn().mockReturnValue(null),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
    });
  });

  it("returns a string", () => {
    const html = generateRevisionHTML("ict", "ICT", "0417", mockTopicGroups, mockTopicNotes);
    expect(typeof html).toBe("string");
  });

  it("includes the subject name in the output", () => {
    const html = generateRevisionHTML("ict", "ICT", "0417", mockTopicGroups, mockTopicNotes);
    expect(html).toContain("ICT");
  });

  it("includes subject code in the output", () => {
    const html = generateRevisionHTML("ict", "ICT", "0417", mockTopicGroups, mockTopicNotes);
    expect(html).toContain("0417");
  });

  it("includes definitions from topicNotes", () => {
    const html = generateRevisionHTML("ict", "ICT", "0417", mockTopicGroups, mockTopicNotes);
    expect(html).toContain("Computer system = hardware + software working together");
  });

  it("includes formulae from topicNotes", () => {
    const html = generateRevisionHTML("ict", "ICT", "0417", mockTopicGroups, mockTopicNotes);
    expect(html).toContain("Data rate = bandwidth × efficiency");
  });

  it("includes facts from topicNotes", () => {
    const html = generateRevisionHTML("ict", "ICT", "0417", mockTopicGroups, mockTopicNotes);
    expect(html).toContain("RAM is volatile; ROM is non-volatile");
  });

  it("includes topic names from topicGroups", () => {
    const html = generateRevisionHTML("ict", "ICT", "0417", mockTopicGroups, mockTopicNotes);
    expect(html).toContain("Computer Systems");
    expect(html).toContain("Input/Output Devices");
  });

  it("returns valid HTML with DOCTYPE", () => {
    const html = generateRevisionHTML("ict", "ICT", "0417", mockTopicGroups, mockTopicNotes);
    expect(html).toMatch(/<!DOCTYPE html>/i);
  });

  it("returns empty sections gracefully when topicNotes is empty", () => {
    expect(() =>
      generateRevisionHTML("ict", "ICT", "0417", mockTopicGroups, {}),
    ).not.toThrow();
  });
});
