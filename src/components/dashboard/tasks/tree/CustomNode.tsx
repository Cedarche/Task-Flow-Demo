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
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Task } from "@/stores/task-store";


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
    const statusClass = statusColors['started' as keyof typeof statusColors];

  return (
    <div className="overflow-hidden flex flex-col rounded-lg bg-zinc-100 mb-2 2xl:mb-4 dark:bg-zinc-800 max-w-[460px]  shadow ring-1 ring-zinc-200 dark:ring-zinc-500/30 hover:ring-green-400/70">
      <div className="p-3 2xl:p-5">
        <div className="flex items-start mb-2 w-full justify-between">
          <div
            className={`inline-flex items-center rounded-md px-1.5 py-0.5 2xl:px-2 2xl:py-1 text-xs font-medium ring-1 ring-inset ${statusClass}`}
          >
            <RectangleStackIcon className="size-4 2xl:size-6 mr-2 " />
            <div className="font-mono text-xs 2xl:text-sm leading-6 text-gray-500 dark:text-gray-400 ">
              {data.label}
            </div>
          </div>
          <XMarkIcon className="size-4 2xl:size-6  cursor-pointer hover:text-rose-400 text-gray-600 dark:text-gray-400" />
        </div>
        <div className="flex flex-row">
          <div className="flex-grow flex flex-col">
            <dt className="truncate text-sm 2xl:text-base font-bold text-gray-700 dark:text-gray-200">
              Task Name
            </dt>
            <dt className="mt-2 truncate text-xs 2xl:text-sm text-wrap text-gray-600 dark:text-gray-400">
            Create a user profile settings page that allows users to update their personal information and preferences.
            </dt>
          </div>
          <div
            id="Subtask summary"
            className="hidden 2xl:flex flex-none  w-[50px]   items-center justify-center ml-4"
          >
            <CircularProgressbar value={50} text={`${50}%`} />
          </div>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-row pl-2 mt-3 min-w-[40px]">Team List</div>
          <dt className="mt-2 truncate text-xs 2xl:text-sm text-wrap text-gray-600 dark:text-gray-400">
            Start Date
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
              Hello
              
            </div>
            <div className="w-full flex flex-col p-0.5 gap-y-1 2xl:p-1.5 2xl:pl-4 2xl:pt-3 2xl:gap-y-2">
              Hello
              
            </div>
          </DisclosurePanel>
        </div>
      </Disclosure>
    </div>
  );
}

export default memo(CustomNode);

{
  /* <Handle
  type="target"
  position={Position.Right}
  className="w-16 !bg-teal-500"
/>
<Handle
  type="source"
  position={Position.Left}
  className="w-16 !bg-teal-500"
/> */
}
