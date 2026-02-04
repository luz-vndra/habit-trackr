"use client";

import { useEffect, useState } from "react";
import { getEventsForHabit } from "@/storage/habit-events-db";
import { computeHourlyCounts } from "@/domain/analytics";

type Props = {
  habitId: string;
};

export default function AnalyticsClient({ habitId }: Props) {
  const [hourlyCounts, setHourlyCounts] = useState<Record<number, number>>({});

  useEffect(() => {
    // ✅ HARD GUARD — REQUIRED
    if (!habitId) return;

    getEventsForHabit(habitId).then((events) => {
      setHourlyCounts(computeHourlyCounts(events));
    });
  }, [habitId]);

  if (!habitId) {
    return <p className="text-sm text-neutral-500">No habit selected.</p>;
  }

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Hourly Activity</h2>

      <div className="grid grid-cols-6 gap-2">
        {Object.entries(hourlyCounts).map(([hour, count]) => (
          <div key={hour} className="border rounded p-2 text-center">
            <div className="text-xs text-neutral-500">{hour}:00</div>
            <div className="font-semibold">{count}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
