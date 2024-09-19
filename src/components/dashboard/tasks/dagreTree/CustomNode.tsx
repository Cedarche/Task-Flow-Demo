import React, { memo } from "react";
import { Handle, Position } from "@xyflow/react";
import { CircularProgressbar } from "react-circular-progressbar";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  RectangleStackIcon,
  ChevronDoubleDownIcon,
  EyeIcon,
  EyeSlashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Task } from "@/stores/task-store";
import SubTask from "../grid/SubTask";
import { teamList } from "@/lib/DEMODATA";

const statusColors: Record<Task["status"], string> = {
  notStarted:
    "bg-gray-50 text-gray-600 ring-gray-500/10 dark:text-gray-400 dark:ring-gray-400/20 dark:bg-gray-400/10",
  started:
    "bg-blue-50 text-blue-700 ring-blue-700/10 dark:text-blue-400 dark:ring-blue-400/30 dark:bg-blue-400/10",
  issues:
    "bg-red-50 text-red-700 ring-red-600/10 dark:text-red-400 dark:ring-red-400/20 dark:bg-red-400/10",
  complete:
    "bg-green-50 text-green-700 ring-green-600/20 dark:text-green-400 dark:ring-green-500/20 dark:bg-green-500/10",
};

function CustomNode({ data }: any) {
  const statusClass = statusColors["started" as keyof typeof statusColors];

  return (
    <div className="overflow-hidden flex flex-col rounded-lg bg-zinc-100   dark:bg-zinc-800 max-w-[300px] min-w-[300px] 2xl:max-w-[460px] 2xl:min-w-[460px]  max-h-[200px] shadow ring-1 ring-zinc-200 dark:ring-zinc-500/30 hover:ring-green-400/70">
      <div className="p-3 2xl:p-5">
        <div className="flex items-start mb-2 w-full justify-between">
          <div
            className={`inline-flex items-center rounded-md px-1.5 py-0.5 2xl:px-2 2xl:py-1 text-xs font-medium ring-1 ring-inset ${statusClass}`}
          >
            <RectangleStackIcon className="size-4 2xl:size-6 mr-2 " />
            <div className="font-mono text-xs 2xl:text-sm leading-6 text-gray-500 dark:text-gray-400 ">
              {data.taskID}
            </div>
          </div>
          {data.childTasks.length > 0 && (
            <EyeSlashIcon
              className="size-4 2xl:size-5  cursor-pointer hover:text-rose-400 text-gray-600 dark:text-gray-400"
              onClick={data.toggleVisibility}
            />
          )}
        </div>
        <div className="flex flex-row">
          <div className="flex-grow flex flex-col">
            <dt className="truncate text-sm 2xl:text-base font-bold text-gray-700 dark:text-gray-200">
              {data.taskName}
            </dt>
            <dt className="mt-2 truncate  text-xs 2xl:text-sm text-wrap text-gray-600 dark:text-gray-400">
              {truncateText(data.taskDescription, 100)}
            </dt>
          </div>
          <div
            id="Subtask summary"
            className="hidden 2xl:flex flex-none  max-w-[50px]  items-center justify-center ml-4"
          >
            <CircularProgressbar
              value={data.percentComplete}
              text={`${data.percentComplete}%`}
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-row pl-2 mt-3 min-w-[40px]">
            {data.assignedUsers.map((user: string) => {
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
            {data.startDate}
          </dt>
        </div>
      </div>
      {data.stage !== "1" && (
        <Handle
          type="target"
          position={Position.Left}
          className="h-5 w-5 !bg-teal-500"
        />
      )}
      {data.stage !== "4" && (
        <Handle
          type="source"
          position={Position.Right}
          className="h-5 w-5 !bg-teal-500"
        />
      )}
    </div>
  );
}

export default memo(CustomNode);

function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;

  const truncatedText = text.slice(0, maxLength);
  const lastSpaceIndex = truncatedText.lastIndexOf(" ");

  if (lastSpaceIndex === -1) {
    return truncatedText + "...";
  }

  return truncatedText.slice(0, lastSpaceIndex) + "...";
}
