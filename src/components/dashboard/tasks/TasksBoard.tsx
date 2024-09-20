"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Heading } from "@/components/catalyst/heading";
import { TaskBoardDropdown } from "./TaskBoardDropdown";
import { TaskBanner } from "./TaskBanner";

import NewTaskDrawer from "../navigation/NewTaskDrawer";
import TaskDrawer from "../navigation/TaskDrawer";

function TasksBoard({ children }: any) {
  const searchParams = useSearchParams();
  const taskID = searchParams.get("taskID");
  const [openTask, setOpenTask] = useState(!!taskID);
  const [addTask, setAddTask] = useState(false);
  const router = useRouter();
  const pathname = window.location.pathname;
  const [taskData, setTaskData] = useState<any>(null);

  useEffect(() => {
    const fetchTask = async () => {
      if (taskID) {
        try {
          const response = await fetch(`/api/tasks/${taskID}`, {
            method: 'GET', // Ensure you're using GET method
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const data = await response.json();

          setTaskData(data);
        } catch (error) {
          console.error('Error fetching task:', error);
        }
      }
    };

    fetchTask();
  }, [taskID]);

  useEffect(() => {
    setOpenTask(!!taskID);
  }, [taskID]);

  const handleCloseTaskDrawer = () => {
    setOpenTask(false);
    setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("taskID");
      router.replace(`${pathname}?${params.toString()}`);
    }, 500); // Adjust the delay to match your drawer's animation duration
  };

  return (
    <>
      <NewTaskDrawer open={addTask} setOpen={setAddTask} />
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
          <TaskBanner setAddTask={setAddTask} />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </>
  );
}

export default TasksBoard;
