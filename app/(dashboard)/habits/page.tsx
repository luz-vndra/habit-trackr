import HabitList from "./HabitList";

export default function HabitsPage() {
  return (
    <section className="space-y-4">
      <header className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Your Habits</h2>
        <button className="rounded-md bg-white px-3 py-1 text-sm text-black">
          + Add
        </button>
      </header>

      <HabitList />
    </section>
  );
}
