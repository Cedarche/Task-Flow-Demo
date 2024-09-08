"use client";
import { useState } from "react";
import TaskDrawer from "../navigation/TaskDrawer";
import { Heading } from "@/components/catalyst/heading";
import { TaskBoardDropdown } from "./TaskBoardDropdown";
import { TaskBanner } from "./TaskBanner";

function TasksBoard({ children }: any) {
  const [addTask, setAddTask] = useState(false);

  return (
    <>
      <TaskDrawer open={addTask} setOpen={setAddTask} />
      <div className="w-full flex flex-col justify-center">
        <div className="flex w-full flex-wrap items-end justify-between gap-4 ">
          <Heading
            level={1}
            className="xl:text-4xl  md:ml-8 text-black dark:text-white"
          >
            Tasks
          </Heading>
          <TaskBoardDropdown />
        </div>
        <TaskBanner addTask={addTask} setAddTask={setAddTask} />
        <div>{children}</div>
      </div>
    </>
  );
}

export default TasksBoard;
