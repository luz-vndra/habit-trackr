// server-rendered

import "./globals.css";

export const metadata = {
  title: "Habit Tracker",
  applicationName: "Habit Tracker",
  themeColor: "#0f172a",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
  },
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
