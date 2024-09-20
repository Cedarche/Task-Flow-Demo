"use client";
import React from "react";
import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from "@hello-pangea/dnd";
import {
  RectangleStackIcon,
  ChevronDoubleDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { CircularProgressbar } from "react-circular-progressbar";
import { teamList } from "@/lib/DEMODATA";
import { Task } from "@/stores/task-store";
import SubTask from "./SubTask";
import { statusColors } from "@/lib/constants";

interface DraggableItemProps {
  task: Task;
  index: number;
  state: any[];
  setState: React.Dispatch<React.SetStateAction<any[]>>;
  ind: number;
  handleTaskClick: (taskID: string) => void; // Updated type
}

const DraggableItem: React.FC<DraggableItemProps> = ({
  task,
  index,
  state,
  setState,
  ind,
  handleTaskClick,
}) => {
  const statusClass = statusColors[task.status as keyof typeof statusColors];

  return (
    <Draggable key={task.taskID} draggableId={task.taskID} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="overflow-hidden flex flex-col rounded-lg bg-zinc-100 mb-2 2xl:mb-4 dark:bg-zinc-800  shadow hover:ring-1 hover:ring-green-400/70"
        >
          <div
            className="p-3 2xl:p-5"
            onClick={() => handleTaskClick(task.taskID)}
          >
            <div className="flex items-start mb-2 w-full justify-between">
              <div
                className={`inline-flex items-center rounded-md px-1.5 py-0.5 2xl:px-2 2xl:py-1 text-xs font-medium ring-1 ring-inset ${statusClass}`}
              >
                <RectangleStackIcon className="size-4 2xl:size-6 mr-2 " />
                <div className="font-mono text-xs 2xl:text-sm leading-6 text-gray-500 dark:text-gray-400 ">
                  {task.taskID}
                </div>
              </div>
              <XMarkIcon
                className="size-4 2xl:size-6  cursor-pointer hover:text-rose-400 text-gray-600 dark:text-gray-400"
                onClick={() => {
                  const newState = [...state];
                  newState[ind].splice(index, 1);
                  setState(newState.filter((group) => group.length));
                }}
              />
            </div>
            <div className="flex flex-row">
              <div className="flex-grow flex flex-col">
                <dt className="truncate text-sm 2xl:text-base font-bold text-gray-700 dark:text-gray-200">
                  {task.taskName}
                </dt>
                <dt className="mt-2 truncate text-xs 2xl:text-sm text-wrap text-gray-600 dark:text-gray-400">
                  {truncateText(task.taskDescription, 100)}
                </dt>
              </div>
              <div
                id="Subtask summary"
                className="hidden 2xl:flex flex-none  max-w-[50px]  items-center justify-center ml-4"
              >
                <CircularProgressbar
                  value={task.percentComplete}
                  text={`${task.percentComplete}%`}
                />
              </div>
            </div>
            <div className="flex w-full items-center justify-between">
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
                      className="size-5 2xl:size-7 -ml-2 border-2 border-indigo-400 dark:border-green-400/20 rounded-full object-cover bg-gray-200 dark:bg-gray-800"
                    />
                  ) : null;
                })}
              </div>
              <dt className="mt-2 truncate text-xs 2xl:text-sm text-wrap text-gray-600 dark:text-gray-400">
                {task.startDate}
              </dt>
            </div>
          </div>
          <Disclosure
            as="div"
            className="w-full flex flex-col cursor-pointer p-1.5 border-t  bg-zinc-200/50 dark:bg-zinc-700/50"
          >
            <DisclosureButton className="w-full flex items-center justify-between">
              <div className="text-xs 2xl:text-sm text-gray-500 ml-1.5 my-1 dark:text-gray-400">
                Sub tasks
              </div>

              <ChevronDoubleDownIcon className="size-3 2xl:size-4 mr-1.5 my-1 text-gray-500 dark:text-gray-400" />
            </DisclosureButton>
            <div className="overflow-hidden ">
              <DisclosurePanel
                transition
                className="origin-top transition duration-100 ease-in-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
              >
                <div className="w-full flex flex-col p-0.5 gap-y-1 2xl:p-1.5 2xl:pl-4 2xl:pt-3 2xl:gap-y-2">
                  {task.subTasks.map((subTask: any) => (
                    <SubTask key={subTask.subTaskID} subTask={subTask} />
                  ))}
                </div>
              </DisclosurePanel>
            </div>
          </Disclosure>
        </div>
      )}
    </Draggable>
  );
};

export default DraggableItem;

function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;

  const truncatedText = text.slice(0, maxLength);
  const lastSpaceIndex = truncatedText.lastIndexOf(" ");

  if (lastSpaceIndex === -1) {
    return truncatedText + "...";
  }

  return truncatedText.slice(0, lastSpaceIndex) + "...";
}
