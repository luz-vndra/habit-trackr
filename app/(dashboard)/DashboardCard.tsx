import { ReactNode } from "react";

type Props = {
  title?: string;
  children: ReactNode;
};

export default function DashboardCard({ title, children }: Props) {
  return (
    <section className="rounded-lg border p-4 space-y-3 my-5">
      {title && <h3 className="font-semibold">{title}</h3>}
      {children}
    </section>
  );
}
