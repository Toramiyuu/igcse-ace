export type SubjectKey =
  | "ict"
  | "cs"
  | "business"
  | "engfirst"
  | "engsl"
  | "englit"
  | "science"
  | "addmath"
  | "mathex"
  | "mathcore"
  | "gp"
  | "drama"
  | "dt"
  | "music"
  | "art";

export interface SubjectMeta {
  name: string;
  code: string;
  color: string;
  papers: PaperMeta[];
  exams: ExamDate[];
}

export interface PaperMeta {
  label: string;
  max: number;
  duration: string;
  description: string;
}

export interface ExamDate {
  paper: string;
  date: string;
  iso: string;
  duration: string;
}

export interface Topic {
  num: string;
  name: string;
}

export interface Flashcard {
  id: string;
  subj: SubjectKey;
  topicKey: string;
  topicName: string;
  type: "def" | "formula" | "fact";
  question: string;
  answer: string;
}

export interface UserProfile {
  id: string;
  subjects: SubjectKey[];
  session_year: number;
  zone: number;
  created_at: string;
}

export interface TopicProgress {
  topic_key: string;
  state: 0 | 1 | 2;
}

export interface StudyActivity {
  date: string;
  minutes: number;
  actions: number;
}

export interface PaperAttempt {
  id: string;
  subject: SubjectKey;
  paper: string;
  year: string;
  score: number;
  max: number;
  date: string;
}

export interface FlashcardSR {
  card_id: string;
  interval: number;
  next_review: number;
  last_passed: boolean;
}

export interface MockResult {
  date: string;
  score: number;
  max: number;
  breakdown: { def: number; formula: number; fact: number };
}
