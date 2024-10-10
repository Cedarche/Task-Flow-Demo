"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Heading } from "@/components/catalyst/heading";
import { TaskBoardDropdown } from "./TaskBoardDropdown";
import { TaskBanner } from "./TaskBanner";
import { useTaskStore } from "@/providers/task-store-provider";
import { useTeamStore } from "@/providers/team-store-provider";

import NewTaskDrawer from "./taskActions/newTasksDrawer/NewTaskDrawer";
import TaskDrawer from "./taskActions/taskDrawer/TaskDrawer";

function TasksBoard({ children }: any) {
  const searchParams = useSearchParams();
  const taskID = searchParams.get("taskID");
  const [openTask, setOpenTask] = useState(!!taskID);
  const [openNewTask, setOpenNewTask] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [taskData, setTaskData] = useState<any>(null);
  const getTaskByID = useTaskStore((state) => state.getTaskByID);
  const addTask = useTaskStore((state) => state.addTask);
  const updateTask = useTaskStore((state) => state.updateTask);
  const tasks = useTaskStore((state) => state.tasks);
  const teamMembers = useTeamStore((state) => state.teamMembers);

  useEffect(() => {
    if (taskID) {
      const data = getTaskByID(taskID);

      setTaskData(data);

      setOpenTask(!!taskID);
    }
  }, [taskID, getTaskByID]);

  const handleCloseTaskDrawer = () => {
    setOpenTask(false);
    setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("taskID");
      router.replace(`${pathname}?${params.toString()}`);
    }, 500);
  };

  return (
    <>
      <NewTaskDrawer
        open={openNewTask}
        setOpen={setOpenNewTask}
        tasks={tasks}
        updateTask={updateTask}
        addTask={addTask}
        teamMembers={teamMembers}
      />
      <TaskDrawer
        open={openTask}
        setOpen={setOpenTask}
        task={taskData}
        onClose={handleCloseTaskDrawer}
      />

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
          <TaskBanner setAddTask={setOpenNewTask} />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </>
  );
}

export default TasksBoard;
