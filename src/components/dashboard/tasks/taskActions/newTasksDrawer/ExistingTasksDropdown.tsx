"use client";

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Label,
} from "@headlessui/react";
import {
  CheckIcon,
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import {
  FolderIcon,
  RectangleStackIcon,
  PlusCircleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useState } from "react";
import { Task } from "@/lib/types";
import { statusColors } from "@/lib/constants";

interface TaskDropdownProps {
  tasks: Task[];
  selectedTasks: Task[];
  setSelectedTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  stage: string;
}

export default function ExistingTaskDropdown({
  tasks,
  selectedTasks,
  setSelectedTasks,
  stage,
}: TaskDropdownProps) {
  const [query, setQuery] = useState("");
  // stage is something like "Stage 2"
  // Get the number of the previous stage
  const prevStage = Number(stage.slice(-1)) - 1;

  const statusClass = statusColors["started" as keyof typeof statusColors];

  const filteredTasks =
    query === ""
      ? tasks.filter((task: Task) => {
          return Number(task.stage) === prevStage;
        })
      : tasks.filter((task: Task) => {
          const lowerCaseQuery = query.toLowerCase();
          return (
            Number(task.stage) === prevStage &&
            (task.taskName.toLowerCase().includes(lowerCaseQuery) ||
              task.taskID.toLowerCase().includes(lowerCaseQuery))
          );
        });

  const removeTask = (taskID: string) => {
    let newSelectedTasks = selectedTasks.filter(function (task: Task) {
      return task.taskID !== taskID;
    });
    setSelectedTasks(newSelectedTasks);
  };

  return (
    <Combobox
      as="div"
      multiple
      value={selectedTasks}
      onChange={(task) => {
        setQuery("");
        setSelectedTasks(task);
      }}
    >
      <Label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
        Parent Tasks
      </Label>
      {selectedTasks.length > 0 && (
        <div className="w-full my-1 border border-gray-300 dark:border-gray-600 rounded-lg p-1 inline-flex gap-x-2 items-center">
          {selectedTasks.map((task: Task) => (
            <div
              onClick={() => removeTask(task.taskID)}
              key={task.taskID}
              className={`inline-flex items-center rounded-md px-1.5 py-1 text-xs font-medium ring-1 cursor-pointer ring-inset ${statusClass}`}
            >
              <RectangleStackIcon className="size-4 2xl:size-5 mr-2 " />
              <div className="font-mono text-xs 2xl:text-sm leading-6 text-gray-500 dark:text-gray-300 ">
                {task.taskID}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="relative my-2">
        <ComboboxInput
          className="w-full rounded-lg border-0 bg-white dark:bg-white/5 dark:*:bg-zinc-800 py-1.5 pl-3 pr-12  shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6 text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white dark:*:text-white"
          onChange={(event) => setQuery(event.target.value)}
          onBlur={() => setQuery("")}
          displayValue={(task: Task) => task?.taskID}
        />
        <ComboboxButton
          className={clsx([
            "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2",
            "focus:outline-none ",
          ])}
        >
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </ComboboxButton>

        {filteredTasks.length > 0 && (
          <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white dark:bg-zinc-900 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm dark:text-white dark:*:text-white no-scrollbar">
            {filteredTasks.map((task: any) => (
              <ComboboxOption
                key={task.taskID}
                value={task}
                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600/10 data-[focus]:dark:bg-indigo-600/20 data-[focus]:text-white"
              >
                <div className="inline-flex gap-x-2 items-center">
                  <div
                    className={`inline-flex items-center rounded-md px-1.5 py-1 text-xs font-medium ring-1 ring-inset ${statusClass}`}
                  >
                    <RectangleStackIcon className="size-4 2xl:size-5 mr-2 " />
                    <div className="font-mono text-xs 2xl:text-sm leading-6 text-gray-500 dark:text-gray-300 ">
                      {task.taskID}
                    </div>
                  </div>
                  <span className="ml-3 flex-auto truncate text-gray-700 dark:text-gray-200">
                    {task.taskName}
                  </span>
                </div>

                <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                </span>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        )}
      </div>
    </Combobox>
  );
}
