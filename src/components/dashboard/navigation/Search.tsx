"use client";

import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Dialog,
  DialogPanel,
  DialogBackdrop,
} from "@headlessui/react";

import { usePathname, useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import {
  FolderIcon,
  RectangleStackIcon,
  PlusCircleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useTaskStore } from "@/providers/task-store-provider";
import { useTeamStore } from "@/providers/team-store-provider";
import { statusColors } from "@/lib/constants";

const quickActions = [
  { name: "Add new Task.", icon: PlusCircleIcon, shortcut: "N", url: "#" },
  {
    name: "Add new Team Member...",
    icon: UserPlusIcon,
    shortcut: "T",
    url: "#",
  },
];

export default function SearchPalette({ open, setOpen }: any) {
  const [selected, setSelected] = useState("");
  const [query, setQuery] = useState("");
  const tasks = useTaskStore((state) => state.tasks);
  const teamMembers = useTeamStore((state) => state.teamMembers);
  const router = useRouter();
  const pathname = usePathname();
  const projectID = pathname.split("/")[1];

  const statusClass = statusColors["started" as keyof typeof statusColors];

  const recent = tasks.slice(0, 3);

  const filteredProjects =
    query === ""
      ? []
      : tasks.filter((task) => {
          const lowerCaseQuery = query.toLowerCase();
          return (
            task.taskName.toLowerCase().includes(lowerCaseQuery) ||
            task.taskID.toLowerCase().includes(lowerCaseQuery)
          );
        });

  return (
    <Dialog
      className="relative z-10"
      open={open}
      onClose={() => {
        setOpen(false);
        setQuery("");
      }}
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500  bg-opacity-25 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
        <DialogPanel
          transition
          className="mx-auto max-w-2xl transform divide-y divide-gray-500 dark:divide-gray-100 dark:divide-opacity-20 divide-opacity-10 overflow-hidden rounded-xl bg-white dark:bg-gray-900 bg-opacity-80 shadow-2xl ring-1 ring-black ring-opacity-5 backdrop-blur backdrop-filter transition-all data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <Combobox
            onChange={(item: any) => {
              if (item) {
                setOpen(false);
                setQuery("");
                const params = new URLSearchParams(window.location.search);
                params.set("taskID", item.taskID);
                router.push(
                  `/${projectID}/dashboard/tasks?${params.toString()}`
                );
              }
            }}
          >
            <div className="relative">
              <MagnifyingGlassIcon
                className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-900 dark:text-gray-200 text-opacity-40"
                aria-hidden="true"
              />
              <ComboboxInput
                autoFocus
                className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 dark:text-gray-200 focus:ring-0 sm:text-sm"
                placeholder="Search..."
                onChange={(event) => setQuery(event.target.value)}
                onBlur={() => setQuery("")}
              />
            </div>

            {(query === "" || filteredProjects.length > 0) && (
              <ComboboxOptions
                static
                as="ul"
                className="max-h-80 scroll-py-2 divide-y divide-gray-500 dark:divide-gray-300 divide-opacity-10 dark:divide-opacity-10 overflow-y-auto"
              >
                <li className="p-2">
                  {query === "" && (
                    <h2 className="mb-2 mt-4 px-3 text-xs font-semibold text-gray-900 dark:text-gray-200">
                      Recent searches
                    </h2>
                  )}
                  <ul className="text-sm text-gray-700">
                    {(query === "" ? recent : filteredProjects).map((task) => (
                      <ComboboxOption
                        as="li"
                        key={task.taskID}
                        value={task}
                        className="group flex cursor-pointer select-none items-center rounded-md px-3 py-2 data-[focus]:bg-gray-900 data-[focus]:bg-opacity-5 data-[focus]:text-gray-900"
                      >
                        <div
                          className={`inline-flex items-center rounded-md px-1.5 py-1 text-xs font-medium ring-1 ring-inset ${statusClass}`}
                        >
                          <RectangleStackIcon className="size-4 2xl:size-5 mr-2 " />
                          <div className="font-mono text-xs 2xl:text-sm leading-6 text-gray-500 dark:text-gray-400 ">
                            {task.taskID}
                          </div>
                        </div>
                        <span className="ml-3 flex-auto truncate dark:text-gray-400">
                          {task.taskName}
                        </span>
                        <span className="ml-3 hidden flex-none text-gray-500 dark:text-gray-400 group-data-[focus]:inline">
                          Jump to...
                        </span>
                      </ComboboxOption>
                    ))}
                  </ul>
                </li>
                {query === "" && (
                  <li className="p-2">
                    <h2 className="sr-only">Quick actions</h2>
                    <ul className="text-sm text-gray-700 dark:text-gray-300">
                      {quickActions.map((action) => (
                        <ComboboxOption
                          as="li"
                          key={action.shortcut}
                          value={action}
                          className="group flex cursor-pointer select-none items-center rounded-md px-3 py-2 data-[focus]:bg-gray-900 data-[focus]:dark:bg-gray-700 data-[focus]:bg-opacity-5 data-[focus]:text-gray-900 data-[focus]:dark:text-gray-100"
                        >
                          <action.icon
                            className="size-5 flex-none text-gray-900 dark:text-gray-200 text-opacity-40 group-data-[focus]:text-opacity-100"
                            aria-hidden="true"
                          />
                          <span className="ml-3 flex-auto truncate">
                            {action.name}
                          </span>
                          <span className="ml-3 flex-none text-xs font-semibold text-gray-500">
                            <kbd className="font-sans">⌘</kbd>
                            <kbd className="font-sans">{action.shortcut}</kbd>
                          </span>
                        </ComboboxOption>
                      ))}
                    </ul>
                  </li>
                )}
              </ComboboxOptions>
            )}

            {query !== "" && filteredProjects.length === 0 && (
              <div className="px-6 py-14 text-center sm:px-14">
                <RectangleStackIcon
                  className="mx-auto h-6 w-6 text-gray-900 dark:text-gray-200 text-opacity-40"
                  aria-hidden="true"
                />
                <p className="mt-4 text-sm text-gray-900 dark:text-gray-200">
                  We couldn't find any tasks or team members with that term.
                  Please try again.
                </p>
              </div>
            )}
          </Combobox>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
