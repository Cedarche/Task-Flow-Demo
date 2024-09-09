// app/dashboard/layout.tsx
import { ReactNode } from "react";
import TasksBoard from "@/components/dashboard/tasks/TasksBoard";

export default function TaskLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
      <TasksBoard>
        {children}
      </TasksBoard>
    );
  }
  