"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon, RectangleGroupIcon } from "@heroicons/react/24/outline";
import {
  LinkIcon,
  PlusIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/20/solid";
import {
  Description,
  Field,
  FieldGroup,
  Fieldset,
  Label,
  Legend,
} from "@/components/catalyst/fieldset";
import { Input } from "@/components/catalyst/input";
import { Select } from "@/components/catalyst/select";
import { Text } from "@/components/catalyst/text";
import { Textarea } from "@/components/catalyst/textarea";
import { Divider } from "@/components/catalyst/divider";
import { Task, TeamMember } from "@/lib/types";
import { Radio, RadioField, RadioGroup } from "@/components/catalyst/radio";
import ExistingTaskDropdown from "./ExistingTasksDropdown";
import TeamDropdown from "./TeamDropdown";
import { useState } from "react";

interface DrawerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  tasks: Task[];
  updateTask: any;
  addTask: any;
  teamMembers: TeamMember[];
}

export default function NewTaskDrawer({
  open,
  setOpen,
  tasks,
  teamMembers,
  updateTask,
  addTask,
}: DrawerProps) {
  const [stage, setStage] = useState("Stage 1");
  const [selectedTasks, setSelectedTasks] = useState<Task[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<TeamMember[]>([]);
  const [taskName, setTaskName] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");

  const handleSubmit = () => {
    let stageNumber = stage.slice(-1);
    const stageTaskIDs = tasks
      .filter((task: Task) => {
        return task.stage === stageNumber;
      })
      .map((task) => Number(task.taskID));

    // Should be of the form S1-0023 and always needs 4 digits after the "-"
    const nextID = String(Math.max(...stageTaskIDs) + 1).padStart(4, "0");
    const newTaskID = stageNumber + "-" + nextID;

    const assignedUsers = selectedTeam.map((teamMember) => teamMember.userID);

    const parentTaskIDs = selectedTasks.map((task) => task.taskID);

    if (parentTaskIDs.length > 0) {
      parentTaskIDs.forEach((parentID) => {
        const parentTask = tasks.find((task) => task.taskID === parentID);
        const updatedChildTasks = parentTask?.childTasks
          ? [...parentTask.childTasks, newTaskID]
          : [newTaskID];

        // Call updateTask to update each parent task
        updateTask(parentID, { childTasks: updatedChildTasks });
      });
    }

    const newTask: Task = {
      taskID: newTaskID,
      stage: stageNumber,
      status: "notStarted",
      createdAt: new Date().toISOString(),
      startDate: "",
      completionDate: null,
      percentComplete: 1,
      taskName,
      taskDescription,
      assignedUsers,
      subTasks: [],
      childTasks: [],
      isVisible: true,
    };

    addTask(newTask);
    console.log("New Task: ", newTask);
    setStage("Stage 1");
    setSelectedTasks([]);
    setSelectedTeam([]);
    setTaskName("");
    setTaskDescription("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <div className="fixed inset-0 bg-black bg-opacity-30" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700 "
            >
              <div className="flex h-full flex-col divide-y divide-gray-200 bg-slate-50 dark:lg:bg-zinc-800 shadow-xl">
                <div className="h-0 flex-1 overflow-y-auto no-scrollbar">
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="divide-y divide-gray-200 dark:divide-gray-700 px-4 sm:px-6">
                      <div className="space-y-6 pb-5 pt-6">
                        <Fieldset>
                          <div className="w-full flex flex-row items-center justify-between py-2.5">
                            <div className="flex flex-row">
                              <RectangleGroupIcon className="h-6 w-6 mr-2 text-indigo-400" />

                              <Legend className="sm:text-xl">
                                Create a new Task
                              </Legend>
                            </div>
                            <XMarkIcon
                              className="h-6 w-6 mr-2 text-gray-400 cursor-pointer"
                              onClick={() => setOpen(false)}
                            />
                          </div>
                          <Text>
                            Get started by filling in the information below to
                            create a new task.
                          </Text>
                          <FieldGroup>
                            <Field>
                              <Label>Task Name</Label>
                              <Input
                                name="taskName"
                                value={taskName}
                                onChange={(e) => setTaskName(e.target.value)}
                              />
                            </Field>
                            <Field>
                              <Label>Task Description</Label>
                              <Textarea
                                maxLength={200}
                                name="taskDescription"
                                value={taskDescription}
                                onChange={(e) =>
                                  setTaskDescription(e.target.value)
                                }
                              />
                              <Description>
                                {taskDescription?.length}/200 Characters
                              </Description>
                            </Field>
                            <Field>
                              <Label>Stage</Label>
                              <Select
                                name="Stage"
                                value={stage}
                                onChange={(e) => setStage(e.target.value)}
                              >
                                <option>Stage 1</option>
                                <option>Stage 2</option>
                                <option>Stage 3</option>
                                <option>Stage 4</option>
                                <option>Stage 5</option>
                              </Select>
                              <Description>
                                Select which stage of the project this task
                                belongs to.
                              </Description>
                            </Field>
                            {stage !== "Stage 1" && (
                              <Field>
                                <ExistingTaskDropdown
                                  tasks={tasks}
                                  selectedTasks={selectedTasks}
                                  setSelectedTasks={setSelectedTasks}
                                  stage={stage}
                                />
                                <Description>
                                  Start typing to select any prerequisite or
                                  parent tasks.
                                </Description>
                              </Field>
                            )}
                          </FieldGroup>
                          <Divider className="my-3" />

                          <Field>
                            <TeamDropdown
                              teamMembers={teamMembers}
                              selectedTeam={selectedTeam}
                              setSelectedTeam={setSelectedTeam}
                            />
                          </Field>
                          <Divider className="mt-5" />

                          <Legend className="sm:text-[16px] mt-3">
                            Restrictions
                          </Legend>
                          <Text>Change who can edit the task</Text>
                          <RadioGroup name="resale" defaultValue="permit">
                            <RadioField>
                              <Radio value="permit" />
                              <Label>Anyone can edit</Label>
                              <Description>
                                Anyone with access the task can update it's
                                status and dependencies.
                              </Description>
                            </RadioField>
                            <RadioField>
                              <Radio value="forbid" />
                              <Label>Admin only</Label>
                              <Description>
                                Only the project admin is able to edit this
                                task.
                              </Description>
                            </RadioField>
                          </RadioGroup>
                        </Fieldset>
                      </div>
                      <div className="pb-6 pt-4">
                        <div className="flex text-sm">
                          <a
                            href="#"
                            className="group inline-flex items-center font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300"
                          >
                            <LinkIcon
                              aria-hidden="true"
                              className="h-5 w-5 text-indigo-500 dark:text-indigo-400 group-hover:text-indigo-400 dark:group-hover:text-indigo-300"
                            />
                            <span className="ml-2">Copy link</span>
                          </a>
                        </div>
                        <div className="mt-4 flex text-sm">
                          <a
                            href="#"
                            className="group inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
                          >
                            <QuestionMarkCircleIcon
                              aria-hidden="true"
                              className="h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-300"
                            />
                            <span className="ml-2">
                              Learn more about sharing
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-shrink-0 justify-end px-4 py-4">
                  <button
                    type="button"
                    className="relative mr-4 inline-flex justify-center rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:ring-offset-2 dark:focus:ring-offset-2"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="relative inline-flex justify-center rounded-md bg-indigo-600 dark:bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 dark:hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:ring-offset-2 dark:focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
