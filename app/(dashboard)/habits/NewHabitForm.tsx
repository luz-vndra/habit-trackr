"use client";

import { useState } from "react";
import DashboardCard from "../DashboardCard";

type Props = {
  onAddHabit: (name: string) => void;
};

export default function NewHabitForm({ onAddHabit }: Props) {
  const [name, setName] = useState("");

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    if (!name.trim()) return;

    onAddHabit(name.trim());
    setName("");
  }

  return (
    <DashboardCard title="Add a new habit">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="e.g. Drink water"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 rounded border px-3 py-2"
        />
        <button type="submit" className="rounded bg-black text-white px-4">
          Add
        </button>
      </form>
    </DashboardCard>
  );
}
