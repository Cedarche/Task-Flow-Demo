'use client'
import {
  RectangleGroupIcon,
  ArrowTopRightOnSquareIcon,
  RectangleStackIcon
} from "@heroicons/react/24/outline";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export function TasksOverview({ taskList, teamList }: any) {
  return (
    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
      {taskList.slice(0, 3).map((task: any) => (
        <div
          key={task.taskID}
          className="overflow-hidden flex flex-col rounded-lg bg-gray-100/20 dark:bg-gray-700/20 px-4 py-5 shadow sm:p-5"
        >
          <div className="flex items-start mb-2 w-full justify-between">
            <div className="flex flex-row">
              <RectangleStackIcon className="h-6 w-6 mr-2 text-indigo-400" />
              <div className="font-mono text-sm leading-6 text-gray-500 dark:text-gray-400">
                {task.taskID}
              </div>
            </div>
            <ArrowTopRightOnSquareIcon className="h-4 w-4 cursor-pointer text-gray-600 dark:text-gray-400" />
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
              className="flex-none  max-w-[50px] flex items-center justify-center ml-4"
            >
              <CircularProgressbar value={task.percentComplete} text={`${task.percentComplete}%`} />
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
      ))}
    </dl>
  );
}
