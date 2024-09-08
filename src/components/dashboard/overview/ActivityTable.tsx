import React from "react";
import { statuses, StatusKey } from "@/lib/DEMODATA";
import { Avatar } from "@/components/catalyst/avatar";

function ActivityTable({ activityItems, classNames }: any) {
  return (
    <table className="mt-6 w-full whitespace-nowrap text-left">
      <colgroup>
        <col className="w-full sm:w-4/12" />
        <col className="lg:w-4/12" />
        <col className="lg:w-2/12" />
        <col className="lg:w-1/12" />
        <col className="lg:w-1/12" />
      </colgroup>
      <thead className="border-b border-gray-200 dark:border-white/10 text-sm leading-6 text-black dark:text-white">
        <tr>
          <th
            scope="col"
            className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8"
          >
            User
          </th>
          <th
            scope="col"
            className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell"
          >
            Message
          </th>
          <th
            scope="col"
            className="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20"
          >
            Status
          </th>
          <th
            scope="col"
            className="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20"
          >
            Duration
          </th>
          <th
            scope="col"
            className="hidden py-2 pl-0 pr-4 text-right font-semibold sm:table-cell sm:pr-6 lg:pr-8"
          >
            Task/Subtask
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 dark:divide-white/5">
        {activityItems.map((item: any) => (
          <tr key={item.commit}>
            <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
              <div className="flex items-center gap-x-4">
                <img
                  alt=""
                  src={item.user.imageUrl}
                  className="h-8 w-8 rounded-full object-cover bg-gray-200 dark:bg-gray-800 "
                />
                <div className="truncate text-sm font-medium leading-6 text-black dark:text-white">
                  {item.user.name}
                </div>
              </div>
            </td>
            <td className="hidden py-4 pl-0 pr-4 text-sm leading-6 text-gray-500 dark:text-gray-400 sm:table-cell sm:pr-8">
              <div className="flex gap-x-3">
                <div className=" text-sm leading-6 text-gray-500 dark:text-gray-400">
                  {item.message}
                </div>
          
              </div>
            </td>
            <td className="py-4 pl-0 pr-4 text-sm leading-6 text-gray-500 dark:text-gray-400 sm:pr-8 lg:pr-20">
              <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                <time
                  dateTime={item.dateTime}
                  className="text-gray-500 dark:text-gray-400 sm:hidden"
                >
                  {item.date}
                </time>
                <div
                  className={classNames(
                    statuses[item.status as StatusKey], 
                    "flex-none rounded-full p-1"
                  )}
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-current" />
                </div>
                <div className="hidden text-black dark:text-white sm:block">
                  {item.status}
                </div>
              </div>
            </td>
            <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-500 dark:text-gray-400 md:table-cell lg:pr-20">
              {item.duration}
            </td>
            <td className="hidden py-4 pl-0 pr-4 text-sm leading-6 text-gray-500 dark:text-gray-400 sm:table-cell sm:pr-8">
              <div className="flex gap-x-1">
                <div className="font-mono text-sm leading-6 text-gray-500 dark:text-gray-400">
                  {item.task} -
                </div>
                <span className="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-500 dark:text-gray-400 ring-1 ring-inset ring-gray-200 dark:ring-gray-400/20">
                  {item.subTask}
                </span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ActivityTable;
