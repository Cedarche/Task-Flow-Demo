// app/dashboard/layout.tsx
import { ReactNode } from "react";
import Sidebar from "@/components/dashboard/navigation/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
      <Sidebar children={children}/>
    );
  }
  