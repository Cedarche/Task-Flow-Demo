import React from "react";
import { ArrowUpOnSquareIcon, TicketIcon } from "@heroicons/react/24/outline";

function SubTask({ subTask }: any) {
  return (
    <div className="w-full flex-col hover:border-gray-400 min-h-[30px] p-1.5 2xl:p-2 border dark:border-gray-600/50 rounded-lg bg-zinc-200/80 dark:bg-zinc-700/50">
      <div className="w-full flex flex-row items-center justify-between">
        <div className="inline-flex gap-x-2 items-center">
          <TicketIcon className="ml-1 size-4 2xl:size-5 text-blue-500" />
          <span className="text-xs 2xl:text-xs font-mono  text-gray-700 dark:text-gray-200">
            {subTask.subTaskID}
          </span>
        </div>
        {subTask.completed ? (
          <span className="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-[10px] 2xl:text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
            Completed
          </span>
        ) : subTask.started ? (
          <span className="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-[10px] 2xl:text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/30">
            In Progress
          </span>
        ) : (
          <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-[10px] 2xl:text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20">
            Not Started
          </span>
        )}
      </div>
      <div className="w-full mt-1 flex flex-row items-center ">
        <span className="text-xs 2xl:text-sm pl-1 font-semibold text-gray-700 dark:text-gray-200">
          {subTask.subTaskName}
        </span>
        <span className=" hidden 2xl:block mx-2 text-gray-400">|</span>
        <span className=" hidden 2xl:block text-wrap text-xs  pt-0.5 text-gray-700 dark:text-gray-200">
          {subTask.startDate}
        </span>
      </div>
    </div>
  );
}

export default SubTask;
