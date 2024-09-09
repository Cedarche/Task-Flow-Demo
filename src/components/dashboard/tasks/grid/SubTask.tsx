import React from "react";
import { ArrowUpOnSquareIcon, TicketIcon } from "@heroicons/react/24/outline";

function SubTask({ subTask }: any) {
  return (
    <div className="w-full flex-col hover:border-gray-400 min-h-[30px] p-2 border rounded-lg bg-zinc-200/80 dark:bg-zinc-700/50">
      <div className="w-full flex flex-row items-center justify-between">
        <div className="inline-flex gap-x-2 items-center">
          <TicketIcon className="ml-1 h-5 w-5 text-blue-500" />
          <span className="text-xs font-mono font-bold text-gray-700 dark:text-gray-200">
            {subTask.subTaskID}
          </span>
        </div>
        {subTask.completed ? (
          <span className="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
            Completed
          </span>
        ) : subTask.started ? (
          <span className="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/30">
            In Progress
          </span>
        ) : (
          <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20">
            Not Started
          </span>
        )}
      </div>
      <div className="w-full mt-0.5 flex flex-row items-center ">
        <span className="text-sm pl-1 font-semibold text-gray-700 dark:text-gray-200">
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
