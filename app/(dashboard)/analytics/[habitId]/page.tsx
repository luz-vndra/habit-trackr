import React from "react";
import AnalyticsClient from "./AnalyticsClient";

type PageProps = {
  params: Promise<{
    habitId: string;
  }>;
};

export default function AnalyticsPage({ params }: PageProps) {
  // ✅ CORRECT for Next.js 16
  const { habitId } = React.use(params);

  console.log("AnalyticsPage habitId:", habitId);

  return <AnalyticsClient habitId={habitId} />;
}
