"use client"
import { useSearchParams } from "next/navigation";
import TaskGrid from "@/components/dashboard/tasks/grid/TaskGrid";
import TreeChart from "@/components/dashboard/tasks/tree/DagreTree"

function Tasks() {
  const searchParams = useSearchParams();
  const viewType = searchParams.get("view") || "Tree"; // default to Grid view

  return viewType === "Tree" ? <TreeChart /> : <TaskGrid />;
}

export default Tasks;
