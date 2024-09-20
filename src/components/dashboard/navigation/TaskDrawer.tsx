import { Dialog, DialogPanel } from "@headlessui/react";
import { Task } from "@/stores/task-store";
import { statusColors } from "@/lib/constants";
import {
  RectangleStackIcon,
  PencilSquareIcon,
  XMarkIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { Heading, Subheading } from "@/components/catalyst/heading";
import { Text } from "@/components/catalyst/text";
import { teamList } from "@/lib/DEMODATA";
import { CircularProgressbar } from "react-circular-progressbar";
import SubTask from "../tasks/grid/SubTask";
import { Button } from "@/components/catalyst/button";
import { PlusIcon } from "@heroicons/react/16/solid";

interface TaskDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  task: Task;
  onClose: () => void;
}

export default function TaskDrawer({
  open,
  setOpen,
  task,
  onClose,
}: TaskDrawerProps) {
  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  if (!task) {
    return null;
  }

  const statusClass = statusColors[task.status as keyof typeof statusColors];

  return (
    <Dialog open={open} onClose={handleClose} className="relative z-10">
      <div className="fixed inset-0 bg-black bg-opacity-30" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <form className="flex h-full flex-col divide-y divide-gray-200 bg-slate-50 dark:lg:bg-zinc-800 shadow-xl">
                <div className="h-0 flex-1 overflow-y-auto">
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="   p-2 sm:p-2">
                      {/* Heading */}
                      <div className="w-full py-4 px-3 bg-gray-200/80 dark:bg-gray-300/10 border border-gray-300 rounded-md flex flex-row items-center justify-between">
                        <div className="inline-flex items-center gap-x-2">
                          <div
                            className={`inline-flex items-center rounded-md px-1.5 py-0.5 2xl:px-2 2xl:py-1 text-xs font-medium ring-1 ring-inset ${statusClass}`}
                          >
                            <RectangleStackIcon className="size-6 mr-2 " />
                            <div className="font-mono text-xs 2xl:text-sm leading-6 text-gray-500 dark:text-gray-400 ">
                              {task.taskID}
                            </div>
                          </div>
                          <Text>{task.status}</Text>
                        </div>
                        <XMarkIcon className="size-4 2xl:size-5  cursor-pointer hover:text-rose-400 text-gray-600 dark:text-gray-400" />
                      </div>
                      {/* Task Name */}
                      <div className="w-full py-4 px-3 my-1  border border-gray-300 dark:border-gray-200/20 rounded-md flex flex-col ">
                        <div className="w-full flex flex-row items-center justify-between">
                          <Subheading>Task Name</Subheading>
                          <PencilSquareIcon className="size-4 dark:text-gray-200 cursor-pointer" />
                        </div>
                        <Text>{task.taskName}</Text>
                      </div>
                      {/* Description */}
                      <div className="w-full py-4 px-3 my-1  border border-gray-300 dark:border-gray-200/20 rounded-md flex flex-col ">
                        <div className="w-full flex flex-row items-center justify-between">
                          <Subheading>Task Description</Subheading>
                          <PencilSquareIcon className="size-4 dark:text-gray-200 cursor-pointer" />
                        </div>
                        <Text>{task.taskDescription}</Text>
                      </div>
                      {/* Team & Progress*/}
                      <div className="w-full flex flex-row items-center justify-between">
                        {/* Team */}
                        <div className="w-full py-4 mr-1 px-3   border border-gray-300 dark:border-gray-200/20 rounded-md flex-1 flex-col ">
                          <div className="w-full  flex flex-row items-center justify-between">
                            <Subheading>Team</Subheading>
                            <PencilSquareIcon className="size-4 dark:text-gray-200 cursor-pointer" />
                          </div>
                          <div className="flex flex-row pl-2 mt-3 min-w-[40px]">
                            {task.assignedUsers.map((user: string) => {
                              const teamMember = teamList.find(
                                (obj: any) => obj.userID === user
                              );
                              return teamMember ? (
                                <img
                                  key={user}
                                  alt={teamMember.name}
                                  src={teamMember.imageUrl}
                                  className="size-7 2xl:size-8 -ml-2 border-2 border-indigo-400 dark:border-green-400/20 rounded-full object-cover bg-gray-200 dark:bg-gray-800"
                                />
                              ) : null;
                            })}
                          </div>
                        </div>
                        {/* Progress */}
                        <div className="w-full py-4 ml-1 px-3 border  border-gray-300 dark:border-gray-200/20 rounded-md flex-1 flex-col ">
                          <div className="w-full flex flex-row items-center justify-between">
                            <Subheading>Progress</Subheading>
                          </div>
                          <div className="w-full flex flex-row items-center justify-between">
                            <div className="inline-flex gap-x-2 items-baseline">
                              <Heading>4/6</Heading>
                              <span className="text-xs font-light text-gray-500 dark:text-gray-400">
                                Subtasks
                              </span>
                            </div>
                            <div className=" text-white  min-w-[45px] min-h-[45px] max-w-[45px] max-h-[45px] items-center justify-center">
                              <CircularProgressbar
                                value={task.percentComplete}
                                text={`${task.percentComplete}%`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Subtasks */}
                      <div className="w-full py-3 px-3 my-1  border border-gray-300 dark:border-gray-200/20 rounded-md flex flex-col ">
                        <div className="flex flex-row mb-3 items-center justify-between">
                          <Subheading>Sub Tasks</Subheading>
                          <Button color="light">
                            <PlusIcon />
                            Add
                          </Button>
                        </div>
                        {task.subTasks.length ? (
                          <div className="w-full flex flex-col  gap-y-1">
                            {task.subTasks.map((subTask: any) => (
                              <SubTask
                                key={subTask.subTaskID}
                                subTask={subTask}
                              />
                            ))}
                          </div>
                        ) : (
                          <div className="w-full flex flex-row items-center justify-start">
                            <ExclamationTriangleIcon className="text-[#ff9d00] size-5 mr-2" />
                            <Text>No Sub Tasks yet, click to add one.</Text>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-shrink-0 justify-end px-4 py-4">
                  <button
                    type="button"
                    className="relative mr-4 inline-flex justify-center rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:ring-offset-2 dark:focus:ring-offset-2"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="relative inline-flex justify-center rounded-md bg-indigo-600 dark:bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 dark:hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:ring-offset-2 dark:focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
