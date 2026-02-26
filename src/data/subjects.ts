export type SubjectKey =
  | "ict"
  | "cs"
  | "business"
  | "engfirst"
  | "englit"
  | "engsl"
  | "science"
  | "addmath"
  | "mathex"
  | "mathcore"
  | "gp"
  | "drama"
  | "dt"
  | "music"
  | "art";

export interface Exam {
  paper: string;
  date: string;
  iso: string | null;
  session: string;
  duration: string;
  code: string;
}

export interface Subject {
  name: string;
  code: string;
  color: string;
  exams: Exam[];
}

export const subjects: Record<SubjectKey, Subject> = {
  ict: {
    name: "ICT",
    code: "0417",
    color: "var(--blue)",
    exams: [
      {
        paper: "Paper 2 (Practical – Documents/DB)",
        date: "Wed 1 Apr 2026",
        iso: "2026-04-01",
        session: "Practical window",
        duration: "2h 30m",
        code: "0417/21",
      },
      {
        paper: "Paper 3 (Practical – Spreadsheets/Web)",
        date: "Thu 2 Apr 2026",
        iso: "2026-04-02",
        session: "Practical window",
        duration: "2h 30m",
        code: "0417/31",
      },
      {
        paper: "Paper 2 Var 2 (Practical – Documents/DB)",
        date: "Thu 16 Apr 2026",
        iso: "2026-04-16",
        session: "Practical window",
        duration: "2h 30m",
        code: "0417/22",
      },
      {
        paper: "Paper 3 Var 2 (Practical – Spreadsheets/Web)",
        date: "Tue 21 Apr 2026",
        iso: "2026-04-21",
        session: "Practical window",
        duration: "2h 30m",
        code: "0417/32",
      },
      {
        paper: "Paper 1 (Theory)",
        date: "Thu 7 May 2026",
        iso: "2026-05-07",
        session: "AM",
        duration: "1h 30m",
        code: "0417/13",
      },
    ],
  },
  cs: {
    name: "Computer Science",
    code: "0478",
    color: "var(--purple)",
    exams: [
      {
        paper: "Paper 1 (Computer Systems)",
        date: "Wed 13 May 2026",
        iso: "2026-05-13",
        session: "PM",
        duration: "1h 45m",
        code: "0478/12",
      },
      {
        paper: "Paper 2 (Algorithms & Programming)",
        date: "Wed 20 May 2026",
        iso: "2026-05-20",
        session: "PM",
        duration: "1h 45m",
        code: "0478/22",
      },
    ],
  },
  business: {
    name: "Business Studies",
    code: "0450",
    color: "var(--green)",
    exams: [
      {
        paper: "Paper 1 (Short Answer & Data)",
        date: "Mon 11 May 2026",
        iso: "2026-05-11",
        session: "PM",
        duration: "1h 30m",
        code: "0450/12",
      },
      {
        paper: "Paper 2 (Case Study)",
        date: "Mon 18 May 2026",
        iso: "2026-05-18",
        session: "PM",
        duration: "1h 30m",
        code: "0450/22",
      },
    ],
  },
  engfirst: {
    name: "English First Language",
    code: "0500",
    color: "var(--accent)",
    exams: [
      {
        paper: "Paper 1 (Reading)",
        date: "Wed 6 May 2026",
        iso: "2026-05-06",
        session: "PM",
        duration: "2h",
        code: "0500/12",
      },
      {
        paper: "Paper 2 (Directed Writing & Composition)",
        date: "Fri 15 May 2026",
        iso: "2026-05-15",
        session: "PM",
        duration: "2h",
        code: "0500/22",
      },
    ],
  },
  englit: {
    name: "English Literature",
    code: "0475",
    color: "var(--pink)",
    exams: [
      {
        paper: "Paper 1 (Poetry & Prose)",
        date: "Fri 8 May 2026",
        iso: "2026-05-08",
        session: "AM",
        duration: "1h 30m",
        code: "0475/13",
      },
      {
        paper: "Paper 2 (Drama – Closed Book)",
        date: "Mon 11 May 2026",
        iso: "2026-05-11",
        session: "AM",
        duration: "1h 30m",
        code: "0475/23",
      },
      {
        paper: "Paper 3 (Drama – Open Text)",
        date: "Mon 11 May 2026",
        iso: "2026-05-11",
        session: "AM",
        duration: "45m",
        code: "0475/33",
      },
      {
        paper: "Paper 4 (Unseen)",
        date: "Mon 11 May 2026",
        iso: "2026-05-11",
        session: "AM",
        duration: "1h 15m",
        code: "0475/43",
      },
    ],
  },
  science: {
    name: "Co-ordinated Sciences",
    code: "0654",
    color: "var(--red)",
    exams: [
      {
        paper: "Paper 3 (Theory Core)",
        date: "Thu 7 May 2026",
        iso: "2026-05-07",
        session: "PM",
        duration: "2h",
        code: "0654/32",
      },
      {
        paper: "Paper 4 (Theory Extended)",
        date: "Thu 7 May 2026",
        iso: "2026-05-07",
        session: "PM",
        duration: "2h",
        code: "0654/42",
      },
      {
        paper: "Paper 5 (Practical)",
        date: "Tue 12 May 2026",
        iso: "2026-05-12",
        session: "PM",
        duration: "2h",
        code: "0654/52",
      },
      {
        paper: "Paper 6 (Alt to Practical)",
        date: "Tue 12 May 2026",
        iso: "2026-05-12",
        session: "PM",
        duration: "1h 30m",
        code: "0654/62",
      },
      {
        paper: "Paper 2 (MCQ Extended)",
        date: "Wed 3 Jun 2026",
        iso: "2026-06-03",
        session: "PM",
        duration: "45m",
        code: "0654/22",
      },
    ],
  },
  addmath: {
    name: "Additional Mathematics",
    code: "0606",
    color: "var(--cyan)",
    exams: [
      {
        paper: "Paper 1 (No Calculator)",
        date: "Mon 18 May 2026",
        iso: "2026-05-18",
        session: "PM",
        duration: "2h",
        code: "0606/12",
      },
      {
        paper: "Paper 2 (Calculator)",
        date: "Tue 26 May 2026",
        iso: "2026-05-26",
        session: "PM",
        duration: "2h",
        code: "0606/22",
      },
    ],
  },
  gp: {
    name: "Global Perspectives",
    code: "0457",
    color: "var(--teal)",
    exams: [
      {
        paper: "Component 1 (Written Exam)",
        date: "Tue 5 May 2026",
        iso: "2026-05-05",
        session: "AM",
        duration: "1h 25m",
        code: "0457/13",
      },
      {
        paper: "Component 2 (Individual Report)",
        date: "Coursework deadline",
        iso: null,
        session: "—",
        duration: "N/A",
        code: "—",
      },
      {
        paper: "Component 3 (Team Project)",
        date: "Coursework deadline",
        iso: null,
        session: "—",
        duration: "N/A",
        code: "—",
      },
    ],
  },
  engsl: {
    name: "English Second Language",
    code: "0510",
    color: "var(--yellow)",
    exams: [
      {
        paper: "Paper 1 (Reading & Writing)",
        date: "TBC",
        iso: null,
        session: "AM",
        duration: "1h 30m",
        code: "0510/12",
      },
      {
        paper: "Paper 2 (Listening)",
        date: "TBC",
        iso: null,
        session: "AM",
        duration: "45m",
        code: "0510/22",
      },
    ],
  },
  mathex: {
    name: "Mathematics Extended",
    code: "0580",
    color: "var(--green)",
    exams: [
      {
        paper: "Paper 2 (Extended)",
        date: "TBC",
        iso: null,
        session: "AM",
        duration: "1h 30m",
        code: "0580/22",
      },
      {
        paper: "Paper 4 (Extended)",
        date: "TBC",
        iso: null,
        session: "PM",
        duration: "2h 30m",
        code: "0580/42",
      },
    ],
  },
  mathcore: {
    name: "Mathematics Core",
    code: "0580",
    color: "var(--cyan)",
    exams: [
      {
        paper: "Paper 1 (Core)",
        date: "TBC",
        iso: null,
        session: "AM",
        duration: "1h",
        code: "0580/12",
      },
      {
        paper: "Paper 3 (Core)",
        date: "TBC",
        iso: null,
        session: "PM",
        duration: "2h",
        code: "0580/32",
      },
    ],
  },
  drama: {
    name: "Drama",
    code: "0411",
    color: "var(--purple)",
    exams: [
      {
        paper: "Paper 1 (Written)",
        date: "TBC",
        iso: null,
        session: "AM",
        duration: "2h",
        code: "0411/12",
      },
      {
        paper: "Paper 2 (Practical – Directing)",
        date: "Coursework window",
        iso: null,
        session: "—",
        duration: "N/A",
        code: "0411/02",
      },
      {
        paper: "Paper 3 (Practical – Acting)",
        date: "Coursework window",
        iso: null,
        session: "—",
        duration: "N/A",
        code: "0411/03",
      },
    ],
  },
  dt: {
    name: "Design & Technology",
    code: "0445",
    color: "var(--orange)",
    exams: [
      {
        paper: "Paper 1 (Written)",
        date: "TBC",
        iso: null,
        session: "AM",
        duration: "1h 15m",
        code: "0445/12",
      },
      {
        paper: "Coursework (Design Portfolio)",
        date: "Coursework deadline",
        iso: null,
        session: "—",
        duration: "N/A",
        code: "0445/02",
      },
    ],
  },
  music: {
    name: "Music",
    code: "0410",
    color: "var(--blue)",
    exams: [
      {
        paper: "Paper 1 (Listening)",
        date: "TBC",
        iso: null,
        session: "AM",
        duration: "1h",
        code: "0410/12",
      },
      {
        paper: "Coursework (Performing)",
        date: "Coursework deadline",
        iso: null,
        session: "—",
        duration: "N/A",
        code: "0410/02",
      },
      {
        paper: "Coursework (Composing)",
        date: "Coursework deadline",
        iso: null,
        session: "—",
        duration: "N/A",
        code: "0410/04",
      },
    ],
  },
  art: {
    name: "Art & Design",
    code: "0400",
    color: "var(--pink)",
    exams: [
      {
        paper: "Component 1 (Portfolio)",
        date: "Coursework deadline",
        iso: null,
        session: "—",
        duration: "N/A",
        code: "0400/02",
      },
      {
        paper: "Component 2 (Examination)",
        date: "TBC",
        iso: null,
        session: "AM",
        duration: "3h",
        code: "0400/12",
      },
    ],
  },
};
