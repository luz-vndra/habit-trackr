import type { HabitEvent } from "@/domain/habit-event";
import { openDB, STORES } from "./db";

export async function addHabitEvent(event: HabitEvent): Promise<void> {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORES.EVENTS, "readwrite");
    tx.objectStore(STORES.EVENTS).put(event);

    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function getEventsForHabit(
  habitId: string,
): Promise<HabitEvent[]> {
  if (!habitId) return [];

  const db = await openDB();

  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORES.EVENTS, "readonly");
    const store = tx.objectStore(STORES.EVENTS);
    const index = store.index("by-habit");

    const range = IDBKeyRange.only(habitId);
    const request = index.getAll(range);

    request.onsuccess = () => resolve(request.result as HabitEvent[]);
    request.onerror = () => reject(request.error);
  });
}
