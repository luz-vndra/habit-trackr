"use client";

import { useState } from "react";
import type { Habit } from "@/domain/habit";

export default function HabitList() {
  const [habits, setHabits] = useState<Habit[]>([]);

  return (
    <div className="space-y-4">
      {habits.length === 0 && (
        <p className="text-sm opacity-70">
          No habits yet. Add one to get started.
        </p>
      )}

      <ul className="space-y-3">
        {habits.map((habit) => (
          <li key={habit.id} className="rounded-lg border p-4">
            {habit.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
