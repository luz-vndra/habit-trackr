const DB_NAME = "habit-trackr";
export const DB_VERSION = 2;

export const STORES = {
  HABITS: "habits",
  EVENTS: "habit-events",
} as const;

export function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;

      if (!db.objectStoreNames.contains(STORES.HABITS)) {
        db.createObjectStore(STORES.HABITS, { keyPath: "id" });
      }

      if (!db.objectStoreNames.contains(STORES.EVENTS)) {
        const store = db.createObjectStore(STORES.EVENTS, {
          keyPath: "id",
        });
        store.createIndex("by-habit", "habitId", { unique: false });
        store.createIndex("by-time", "timestamp", { unique: false });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
