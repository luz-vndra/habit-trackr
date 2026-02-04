"use client";

import Link from "next/link";
import type { Habit } from "@/domain/habit";
import { addHabitEvent } from "@/storage/habit-events-db";

type Props = {
  habit: Habit;
  onDelete: (habitId: string) => void;
};

export default function HabitCard({ habit, onDelete }: Props) {
  async function logEvent() {
    await addHabitEvent({
      id: crypto.randomUUID(),
      habitId: habit.id,
      timestamp: Date.now(),
    });
  }

  return (
    <div className="rounded-lg border p-4 flex justify-between items-center">
      <p className="font-medium">{habit.name}</p>

      <div className="flex gap-2">
        <button onClick={logEvent} className="text-sm px-3 py-1 rounded border">
          Log
        </button>

        <Link
          href={`/analytics/${habit.id}`}
          className="text-sm px-3 py-1 rounded border"
        >
          Analytics
        </Link>

        <button
          onClick={() => onDelete(habit.id)}
          className="text-sm px-3 py-1 rounded border text-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
