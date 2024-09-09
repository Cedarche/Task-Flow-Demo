"use client";
import React from "react";
import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from "@hello-pangea/dnd";
import {
  RectangleGroupIcon,
  ArrowUpOnSquareIcon,
  TicketIcon,
  RectangleStackIcon,
  ChevronDoubleDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { getItemStyle } from "./GridFunctions"; // Assuming you have a helper function for styles
import { CircularProgressbar } from "react-circular-progressbar";
import { teamList } from "@/lib/DEMODATA";
import SubTask from "./SubTask";

interface DraggableItemProps {
  task: any;
  index: number;
  state: any[];
  setState: React.Dispatch<React.SetStateAction<any[]>>;
  ind: number;
}

const DraggableItem: React.FC<DraggableItemProps> = ({
  task,
  index,
  state,
  setState,
  ind,
}) => {
  return (
    <Draggable key={task.taskID} draggableId={task.taskID} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          //   style={getItemStyle(
          //     snapshot.isDragging,
          //     provided.draggableProps.style
          //   )}
          className="overflow-hidden flex flex-col rounded-lg bg-zinc-100 mb-4 dark:bg-zinc-800  shadow "
        >
          <div className="px-4 py-5 sm:p-5">
            <div className="flex items-start mb-2 w-full justify-between">
              <div className="flex flex-row">
                <RectangleStackIcon className="h-6 w-6 mr-2 text-indigo-400" />
                <div className="font-mono text-sm leading-6 text-gray-500 dark:text-gray-400">
                  {task.taskID}
                </div>
              </div>
              <XMarkIcon
                className="h-6 w-6 cursor-pointer text-gray-600 dark:text-gray-400"
                onClick={() => {
                  const newState = [...state];
                  newState[ind].splice(index, 1);
                  setState(newState.filter((group) => group.length));
                }}
              />
            </div>
            <div className="flex flex-row">
              <div className="flex-grow flex flex-col">
                <dt className="truncate text-base font-bold text-gray-700 dark:text-gray-200">
                  {task.taskName}
                </dt>
                <dt className="mt-2 truncate text-sm text-wrap text-gray-600 dark:text-gray-400">
                  {task.taskDescription}
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
              <div className="flex flex-row pl-2 mt-2 min-w-[40px]">
                {task.assignedUsers.map((user: string) => {
                  const teamMember = teamList.find(
                    (obj: any) => obj.userID === user
                  );
                  return teamMember ? (
                    <img
                      key={user}
                      alt={teamMember.name}
                      src={teamMember.imageUrl}
                      className="h-7 w-7 -ml-2 border-2 border-indigo-400 dark:border-green-400/20 rounded-full object-cover bg-gray-200 dark:bg-gray-800"
                    />
                  ) : null;
                })}
              </div>
              <dt className="mt-2 truncate text-sm text-wrap text-gray-600 dark:text-gray-400">
                {task.startDate}
              </dt>
            </div>
          </div>
          <Disclosure
            as="div"
            className="w-full flex flex-col cursor-pointer p-1.5 border-t  bg-zinc-200/50 dark:bg-zinc-700/50"
          >
            <DisclosureButton className="w-full flex items-center justify-between">
              <div className="text-sm text-gray-500 ml-1.5 my-1 dark:text-gray-400">
                Sub tasks
              </div>

              <ChevronDoubleDownIcon className="h-4 w-4 mr-1.5 my-1 text-gray-500 dark:text-gray-400" />
            </DisclosureButton>
            <div className="overflow-hidden ">
              <DisclosurePanel
                transition
                className="origin-top transition duration-100 ease-in-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
              >
                <div className="w-full flex flex-col p-1.5 pl-4 pt-3 gap-y-2">
                 {task.subTasks.map((subTask: any) => (
                   <SubTask key={subTask.subTaskID} subTask={subTask}/>
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
