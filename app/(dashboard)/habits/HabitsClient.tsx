"use client";

import { useEffect, useState } from "react";
import type { Habit } from "@/domain/habit";
import NewHabitForm from "./NewHabitForm";
import HabitList from "./HabitList";
import { getAllHabits, saveHabits } from "@/storage/habits-db";
import { deleteHabitWithEvents } from "@/storage/delete-habit";

export default function HabitsClient() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // 1. Load once on mount
  useEffect(() => {
    getAllHabits().then((storedHabits) => {
      setHabits(storedHabits);
      setHydrated(true);
    });
  }, []);

  // 2. Persist on change (after hydration)
  useEffect(() => {
    if (!hydrated) return;
    saveHabits(habits);
  }, [habits, hydrated]);

  function addHabit(name: string) {
    const newHabit: Habit = {
      id: crypto.randomUUID(),
      name,
      createdAt: Date.now(),
    };

    setHabits((prev) => [...prev, newHabit]);
  }

  const handleDeleteHabit = async (habitId: string) => {
    setHabits((prev) => prev.filter((h) => h.id !== habitId));
    await deleteHabitWithEvents(habitId);
  };

  return (
    <div className="space-y-6">
      <NewHabitForm onAddHabit={addHabit} />
      <HabitList habits={habits} onDeleteHabit={handleDeleteHabit} />
    </div>
  );
}
