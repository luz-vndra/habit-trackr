export default function DashboardPage() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Today</h2>
        <p className="text-neutral-400 text-sm">Show up for your habits.</p>
      </div>

      <div className="rounded-xl border border-neutral-800 p-4">
        <p className="text-neutral-400 text-sm">No habits yet.</p>
        <p className="text-sm">Add your first habit to get started.</p>
      </div>
    </section>
  );
}
