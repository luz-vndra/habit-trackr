import Link from "next/link";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-neutral-300/30">
        <nav className="mx-auto flex max-w-md items-center justify-between px-4 py-3">
          <h1 className="text-lg font-semibold">Habit Trackr</h1>
          <div className="flex gap-6">
            <Link
              href="/habits"
              className="text-sm text-neutral-400 hover:text-white"
            >
              Habits
            </Link>
            <Link
              href="/analytics"
              className="text-sm text-neutral-400 hover:text-white"
            >
              Analytics
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-md flex-1 px-4 py-6">
        {children}
      </main>

      <footer className="border-t border-neutral-800 px-4 py-3 text-center text-xs text-neutral-500">
        Offline-first · Built with Next.js
      </footer>
    </div>
  );
}
