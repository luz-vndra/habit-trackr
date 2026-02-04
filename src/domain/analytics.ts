import type { HabitEvent } from "./habit-event";

export type HourlyCount = Record<number, number>; // 0–23

export function computeHourlyCounts(events: HabitEvent[]): HourlyCount {
  const hours: HourlyCount = {};

  for (let i = 0; i < 24; i++) {
    hours[i] = 0;
  }

  for (const event of events) {
    const hour = new Date(event.timestamp).getHours();
    hours[hour]++;
  }

  return hours;
}
