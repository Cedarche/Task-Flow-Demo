"use client";

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Label,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

import clsx from "clsx";
import { useState } from "react";
import { TeamMember } from "@/lib/types";

interface TaskDropdownProps {
  teamMembers: TeamMember[];
  selectedTeam: TeamMember[];
  setSelectedTeam: React.Dispatch<React.SetStateAction<TeamMember[]>>;
}

export default function TeamDropdown({
  teamMembers,
  selectedTeam,
  setSelectedTeam,
}: TaskDropdownProps) {
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? teamMembers
      : teamMembers.filter((teamMember: TeamMember) => {
          const lowerCaseQuery = query.toLowerCase();
          return teamMember.name.toLowerCase().includes(lowerCaseQuery);
        });

  const removeTeamMember = (userID: string) => {
    let newSelectedTeam = selectedTeam.filter(function (
      teamMember: TeamMember
    ) {
      return teamMember.userID !== userID;
    });
    setSelectedTeam(newSelectedTeam);
  };

  return (
    <Combobox
      as="div"
      multiple
      value={selectedTeam}
      onChange={(teamMember) => {
        setQuery("");
        setSelectedTeam(teamMember);
      }}
    >
      <Label className="block text-sm mt-2 font-medium leading-6 text-gray-900 dark:text-white">
        Select Team
      </Label>
      {selectedTeam.length > 0 && (
        <div className="w-full my-1 border border-gray-300 dark:border-gray-600 rounded-lg p-1 inline-flex items-center">
          {selectedTeam.map((teamMember: TeamMember, i: any) => (
            <img
              onClick={() => removeTeamMember(teamMember.userID)}
              key={teamMember.userID}
              alt={teamMember.name}
              src={teamMember.imageUrl}
              className={clsx([
                "size-7 2xl:size-10 border-2 border-indigo-400 dark:border-green-400/20 rounded-full object-cover bg-gray-200 dark:bg-gray-800 cursor-pointer",
                i === 0 ? "" : "-ml-2",
              ])}
            />
          ))}
        </div>
      )}

      <div className="relative my-2">
        <ComboboxInput
          className="w-full rounded-lg border-0 bg-white dark:bg-white/5 dark:*:bg-zinc-800 py-1.5 pl-3 pr-12  shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6 text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white dark:*:text-white"
          onChange={(event) => setQuery(event.target.value)}
          onBlur={() => setQuery("")}
          displayValue={(teamMember: TeamMember) => teamMember?.name}
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

        {filteredPeople.length > 0 && (
          <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white dark:bg-zinc-900 py-1 no-scrollbar text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm dark:text-white dark:*:text-white">
            {filteredPeople.map((teamMember: TeamMember) => (
              <ComboboxOption
                key={teamMember.userID}
                value={teamMember}
                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600/10 data-[focus]:dark:bg-indigo-600/20 data-[focus]:text-white"
              >
                <div className="inline-flex gap-x-2 items-center">
                  <div className="flex items-center">
                    <img
                      src={teamMember.imageUrl}
                      alt=""
                      className="h-6 w-6 flex-shrink-0 rounded-full"
                    />
                    <span className="ml-3 flex-auto truncate text-gray-700 dark:text-gray-200">
                      {teamMember.name}
                    </span>
                  </div>
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
