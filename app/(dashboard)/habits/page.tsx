export default function HabitsPage() {
  return (
    <section className="space-y-4">
      <header className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Your Habits</h2>
        <button className="rounded-md bg-white px-3 py-1 text-sm text-black">
          + Add
        </button>
      </header>

      <ul className="space-y-3">
        <li className="rounded-lg border border-neutral-800 p-4">
          <p className="font-medium">Exercise</p>
          <p className="text-sm text-neutral-400">0-day streak</p>
        </li>
      </ul>
    </section>
  );
}
