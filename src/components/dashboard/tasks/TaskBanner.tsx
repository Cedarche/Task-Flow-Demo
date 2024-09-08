import {
  PlusIcon,
  AdjustmentsHorizontalIcon,
  Squares2X2Icon,
  ShareIcon,
} from "@heroicons/react/16/solid";
import { Field, Label } from "@/components/catalyst/fieldset";

import {
  Listbox,
  ListboxLabel,
  ListboxOption,
} from "@/components/catalyst/listbox";
import { Button } from "@/components/catalyst/button";

export function TaskBanner({ addTask, setAddTask }: any) {
  return (
    <div className="flex rounded-lg flex-col items-start justify-between gap-x-8 gap-y-4 bg-gray-100/60 dark:bg-gray-700/10 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8 border border-zinc-300 dark:border-white/10 mt-3">
      <div>
        <div className="flex items-center gap-x-3">
          <div className="flex-none rounded-full text-green-400 bg-green-400/30 p-1 dark:bg-green-400/10 dark:text-green-400">
            <div className="h-2 w-2 rounded-full bg-current" />
          </div>
          <h1 className="flex gap-x-3 text-base leading-7">
            <span className="font-semibold text-black dark:text-white">
              Milestone
            </span>
            <span className="text-gray-400 dark:text-gray-600">-</span>
          </h1>
          <StageDropdown />
        </div>
      </div>
      <div className="flex flex-row gap-x-3 items-center">
        <Button color="light">
          <AdjustmentsHorizontalIcon />
          Filter
        </Button>
        <ViewDropdown />
        <Button
          color="light"
          className="cursor-pointer"
          onClick={() => setAddTask(true)}
        >
          <PlusIcon />
          Add Task
        </Button>
        <div className="order-first flex-none rounded-full bg-green-100 text-green-600 px-2 py-1 text-xs font-medium ring-1 ring-inset ring-green-200 dark:bg-green-400/10 dark:text-green-400 dark:ring-green-400/30 sm:order-none">
          On schedule
        </div>
      </div>
    </div>
  );
}

function StageDropdown() {
  return (
    <Listbox name="status" defaultValue="All Stages" className="w-28">
      <ListboxOption value="All Stages">
        <ListboxLabel>All Stages</ListboxLabel>
      </ListboxOption>
      <ListboxOption value="Stage 1">
        <ListboxLabel>Stage 1</ListboxLabel>
      </ListboxOption>
      <ListboxOption value="Stage 2">
        <ListboxLabel>Stage 2</ListboxLabel>
      </ListboxOption>
      <ListboxOption value="Stage 3">
        <ListboxLabel>Stage 3</ListboxLabel>
      </ListboxOption>
      <ListboxOption value="Stage 4">
        <ListboxLabel>Stage 4</ListboxLabel>
      </ListboxOption>
    </Listbox>
  );
}

function ViewDropdown() {
  return (
    <Field>
      <Listbox name="Grid" defaultValue="Grid">
        <ListboxOption value="Grid">
          <Squares2X2Icon />
          <ListboxLabel>Grid</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="Tree">
          <ShareIcon />
          <ListboxLabel>Tree</ListboxLabel>
        </ListboxOption>
      </Listbox>
    </Field>
  );
}
