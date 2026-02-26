const STREAK_KEY = "igcse-streak";

interface DayData {
  minutes: number;
  actions: number;
}

export function recordActivity(minutes = 0): void {
  try {
    const raw =
      typeof localStorage !== "undefined"
        ? localStorage.getItem(STREAK_KEY)
        : null;
    const data: Record<string, DayData> = raw ? JSON.parse(raw) : {};
    const today = new Date().toISOString().slice(0, 10);
    const day = data[today] ?? { minutes: 0, actions: 0 };
    data[today] = { minutes: day.minutes + minutes, actions: day.actions + 1 };
    localStorage.setItem(STREAK_KEY, JSON.stringify(data));
  } catch {}
}
