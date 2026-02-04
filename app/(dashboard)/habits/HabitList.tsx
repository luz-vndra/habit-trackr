"use client";

import type { Habit } from "@/domain/habit";
import HabitCard from "./HabitCard";

type Props = {
  habits: Habit[];
  onDeleteHabit: (habitId: string) => void;
};

export default function HabitList({ habits, onDeleteHabit }: Props) {
  if (habits.length === 0) {
    return <p>No habits yet. Add one to get started.</p>;
  }

  return (
    <div className="grid gap-3">
      {habits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} onDelete={onDeleteHabit} />
      ))}
    </div>
  );
}
