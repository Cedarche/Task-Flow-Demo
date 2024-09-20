"use client"
import {
  PlusIcon,
  AdjustmentsHorizontalIcon,
  Squares2X2Icon,
  ShareIcon,
} from "@heroicons/react/16/solid";
import { Field } from "@/components/catalyst/fieldset";
import { usePathname, useRouter } from "next/navigation";
import {
  Listbox,
  ListboxLabel,
  ListboxOption,
} from "@/components/catalyst/listbox";
import { Button } from "@/components/catalyst/button";

export function TaskBanner({ setAddTask }: any) {
  return (
    <>
      <div className="flex rounded-lg items-start justify-between   bg-gray-100/60 dark:bg-gray-700/10 p-2 2xl:px-3 sm:flex-row sm:items-center sm:px-6 lg:px-8 border border-zinc-300 dark:border-white/10 mt-3">
        <div>
          <div className="flex items-center gap-x-3">
            <div className="hidden sm:flex-none rounded-full text-green-400 bg-green-400/30 p-1 dark:bg-green-400/10 dark:text-green-400">
              <div className="h-2 w-2 rounded-full bg-current" />
            </div>
            <h1 className=" hidden sm:flex gap-x-3 text-base leading-7">
              <span className=" font-semibold text-black dark:text-white">
                Milestone
              </span>
              <span className=" text-gray-400 dark:text-gray-600">-</span>
            </h1>
            <StageDropdown />
          </div>
        </div>
        <div className="flex flex-row gap-x-3 items-center">
          <Button color="light">
            <AdjustmentsHorizontalIcon />
            <span className="hidden sm:block">Filter</span>
          </Button>
          <ViewDropdown />
          <Button
            color="light"
            className="cursor-pointer"
            onClick={() => setAddTask(true)}
          >
            <PlusIcon />
            <span className="hidden sm:block">Add Task</span>
          </Button>
          <div className="hidden sm:block order-first flex-none rounded-full bg-green-100 text-green-600 px-2 py-1 text-xs font-medium ring-1 ring-inset ring-green-200 dark:bg-green-400/10 dark:text-green-400 dark:ring-green-400/30 sm:order-none">
            On schedule
          </div>
        </div>
      </div>
    </>
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

// Inside ViewDropdown component
function ViewDropdown() {
  const router = useRouter();
  const pathname = usePathname();
  const projectID = pathname.split("/")[1];
  const searchParams = new URLSearchParams(window.location.search);
  const currentView = searchParams.get("view") || "Tree";

  const handleViewChange = (value: string) => {
    const params = new URLSearchParams();
    params.set("view", value); // set the view query param
    router.push(`/${projectID}/dashboard/tasks?${params.toString()}`);
  };

  return (
    <Field>
      <Listbox defaultValue={currentView} onChange={handleViewChange}>
        <ListboxOption value="Grid">
          <Squares2X2Icon />
          <ListboxLabel className="hidden sm:block">Grid</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="Tree">
          <ShareIcon />
          <ListboxLabel className="hidden sm:block">Tree</ListboxLabel>
        </ListboxOption>
      </Listbox>
    </Field>
  );
}
