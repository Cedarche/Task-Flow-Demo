import React from "react";
import { useRouter, usePathname} from "next/navigation";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import { Fragment } from "react";
import { SidebarItem, SidebarLabel } from "@/components/catalyst/sidebar";
import { ChevronDownIcon, RectangleStackIcon } from "@heroicons/react/16/solid";
import { Task } from "@/lib/types";

type AccordianItemProps = {
  stage: string;
  stageTasks: Task[];
  handleTaskClick: any;
};

const AccordianItem: React.FC<AccordianItemProps> = ({
  stage,
  stageTasks,
  handleTaskClick,
}) => {
  return (
    <Disclosure as="div" className="w-full max-w-md">
      {({ open }) => (
        <>
          <DisclosureButton className="w-full">
            <SidebarItem>
              <SidebarLabel>Stage {stage}</SidebarLabel>
              <ChevronDownIcon />
            </SidebarItem>
          </DisclosureButton>
          <div className="overflow-hidden">
            <AnimatePresence>
              {open && (
                <DisclosurePanel static as={Fragment}>
                  <motion.div
                    initial={{ opacity: 0, y: -24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.2, ease: easeOut }}
                    className="origin-top gap-y-1.5"
                  >
                    {stageTasks.map((task, i) => (
                      <div
                        key={i}
                        onClick={() => handleTaskClick(task.taskID)}
                        className="w-full px-3 py-1.5  hover:bg-gray-200 dark:hover:bg-white/5 cursor-pointer rounded-lg inline-flex items-center gap-x-2"
                      >
                        <RectangleStackIcon className="size-4  text-blue-400" />
                        <span className="font-mono text-xs leading-1 dark:text-gray-200">
                          {task.taskID}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </DisclosurePanel>
              )}
            </AnimatePresence>
          </div>
        </>
      )}
    </Disclosure>
  );
};

type SidebarTasksAccordianProps = {
  tasks: Task[];
};

const SidebarTasksAccordian: React.FC<SidebarTasksAccordianProps> = ({
  tasks,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const projectID = pathname.split("/")[1];

  const handleTaskClick = (taskID: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set("taskID", taskID);
    router.push(`/${projectID}/dashboard/tasks?${params.toString()}`);
  };

  const groupedTasks = tasks.reduce((acc: Record<string, Task[]>, task) => {
    const stage = task.stage;
    if (!acc[stage]) {
      acc[stage] = [];
    }
    acc[stage].push(task);
    return acc;
  }, {});

  return (
    <>
      {Object.keys(groupedTasks).map((stage, i) => (
        <AccordianItem
          key={i}
          stage={stage}
          stageTasks={groupedTasks[stage]}
          handleTaskClick={handleTaskClick}
        />
      ))}
    </>
  );
};

export default SidebarTasksAccordian;
