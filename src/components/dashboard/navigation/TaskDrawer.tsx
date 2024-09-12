"use client";

import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import {
  XMarkIcon,
  RectangleGroupIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
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

import { Radio, RadioField, RadioGroup } from "@/components/catalyst/radio";

const team = [
  {
    name: "Tom Cook",
    email: "tom.cook@example.com",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Whitney Francis",
    email: "whitney.francis@example.com",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leonard Krasner",
    email: "leonard.krasner@example.com",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Floyd Miles",
    email: "floyd.miles@example.com",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Emily Selman",
    email: "emily.selman@example.com",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function TaskDrawer({ open, setOpen }: any) {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <div className="fixed inset-0 bg-black bg-opacity-30" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <form className="flex h-full flex-col divide-y divide-gray-200 bg-slate-50 dark:lg:bg-zinc-800 shadow-xl">
                <div className="h-0 flex-1 overflow-y-auto">
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
                              <Input name="street_address" />
                            </Field>
                            <Field>
                              <Label>Task Description</Label>
                              <Textarea name="notes" />
                              <Description>0/250 Characters</Description>
                            </Field>
                            <Field>
                              <Label>Stage</Label>
                              <Select name="country">
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
                          </FieldGroup>
                          <Divider className="mt-3" />
                          <div className="mt-3">
                            <h3 className="text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                              Team Members
                            </h3>
                            <div className="mt-2">
                              <div className="flex space-x-2">
                                {/* {team.map((person) => (
                                <a
                                  key={person.email}
                                  href={person.href}
                                  className="relative rounded-full hover:opacity-75"
                                >
                                  <img
                                    alt={person.name}
                                    src={person.imageUrl}
                                    className="inline-block h-8 w-8 rounded-full"
                                  />
                                </a>
                              ))} */}

                                <button
                                  type="button"
                                  className="relative inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-dashed border-gray-200 bg-white dark:bg-gray-800 text-gray-400 dark:text-gray-500 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:ring-offset-2 dark:focus:ring-offset-2"
                                >
                                  <span className="absolute -inset-2" />
                                  <span className="sr-only">
                                    Add team member
                                  </span>
                                  <PlusIcon
                                    aria-hidden="true"
                                    className="h-5 w-5"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
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
                    type="submit"
                    className="relative inline-flex justify-center rounded-md bg-indigo-600 dark:bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 dark:hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:ring-offset-2 dark:focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
