import type { Habit } from "@/domain/habit";
import { openDB, STORES } from "./db";

export async function getAllHabits(): Promise<Habit[]> {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORES.HABITS, "readonly");
    const store = tx.objectStore(STORES.HABITS);
    const request = store.getAll();

    request.onsuccess = () => resolve(request.result as Habit[]);
    request.onerror = () => reject(request.error);
  });
}

export async function saveHabits(habits: Habit[]): Promise<void> {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORES.HABITS, "readwrite");
    const store = tx.objectStore(STORES.HABITS);

    store.clear();
    habits.forEach((habit) => store.put(habit));

    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function deleteHabit(habitId: string): Promise<void> {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORES.HABITS, "readwrite");
    const store = tx.objectStore(STORES.HABITS);

    store.delete(habitId);

    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function deleteEventsForHabit(habitId: string): Promise<void> {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORES.EVENTS, "readwrite");
    const store = tx.objectStore(STORES.EVENTS);
    const index = store.index("by-habit");

    const range = IDBKeyRange.only(habitId);
    const request = index.getAll(range);

    request.onsuccess = () => {
      const events = request.result;

      for (const event of events) {
        store.delete(event.id);
      }
    };

    request.onerror = () => reject(request.error);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}
