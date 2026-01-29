// server-rendered

import "./globals.css";

export const metadata = {
  title: "Habit Trackr",
  description: "Offline-first habit tracker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen transition-colors">{children}</body>
    </html>
  );
}
