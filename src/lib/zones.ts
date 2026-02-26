import type { Exam, SubjectKey } from "@/data/subjects";
import { subjects } from "@/data/subjects";
import {
  zoneExams,
  ICT_PRACTICALS,
  GP_COURSEWORK,
  hasZoneData,
  type ZoneKey,
} from "@/data/zones";

export { zoneKeyFromNumber };

function zoneKeyFromNumber(zone: number): ZoneKey {
  if (zone >= 1 && zone <= 5) return `Z${zone}` as ZoneKey;
  return "Z1";
}

/**
 * Returns the full exam list for a given zone number (1-5) and subject.
 *
 * - ICT: zone-specific written exams + zone-independent practicals (prepended)
 * - GP: zone-specific written exam + zone-independent coursework (appended)
 * - Other subjects with zone data: zone-specific exams only
 * - Subjects without zone data: falls back to subjects.ts static exams
 */
export function getExamsForZone(zone: number, subjectKey: SubjectKey): Exam[] {
  const zk = zoneKeyFromNumber(zone);

  if (!hasZoneData(subjectKey)) {
    return subjects[subjectKey].exams;
  }

  const zoneSubjectKey = subjectKey as keyof (typeof zoneExams)[ZoneKey];
  const written: Exam[] = zoneExams[zk][zoneSubjectKey] ?? [];

  if (subjectKey === "ict") {
    return [...ICT_PRACTICALS, ...written];
  }

  if (subjectKey === "gp") {
    return [...written, ...GP_COURSEWORK];
  }

  return written;
}
