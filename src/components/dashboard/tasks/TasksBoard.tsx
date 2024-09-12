"use client";
import { useState } from "react";
import { Heading } from "@/components/catalyst/heading";
import { TaskBoardDropdown } from "./TaskBoardDropdown";
import { TaskBanner } from "./TaskBanner";
import TaskDrawer from "../navigation/TaskDrawer";

function TasksBoard({ children }: any) {
  const [addTask, setAddTask] = useState(false);

  return (
    <>
      <TaskDrawer open={addTask} setOpen={setAddTask} />

      <div className="w-full flex flex-col justify-center">
        <div className="max-h-34">
          <div className="flex w-full flex-wrap items-end justify-between gap-4 ">
            <Heading
              level={1}
              className="xl:text-2xl text-black dark:text-white"
            >
              Tasks
            </Heading>
            <TaskBoardDropdown />
          </div>
          <TaskBanner setAddTask={setAddTask} />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </>
  );
}

export default TasksBoard;
