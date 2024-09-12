import { Button } from "@/components/catalyst/button";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "@/components/catalyst/dialog";
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
import { useState } from "react";

export function AddTeamMember({ isOpen, setIsOpen }: any) {
  return (
    <>
      <Dialog open={isOpen} onClose={setIsOpen}>
        <DialogTitle>Add Team Member</DialogTitle>
        <DialogDescription>
          Add a new user to this project, or send them a request to join.
        </DialogDescription>
        <DialogBody>
          <Fieldset>
            <FieldGroup className="gap-y-2">
              <div className="flex flex-row items-center p-3 rounded-lg border border-zinc-300 dark:border-white/10  hover:bg-gray-500/10 dark:hover:bg-gray-400/10 cursor-pointer">
                <button
                  type="button"
                  className="relative inline-flex size-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-dashed border-gray-200 bg-white dark:bg-gray-800/10 text-gray-400 dark:text-gray-500 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:ring-offset-2 dark:focus:ring-offset-2"
                >
                  <span className="absolute -inset-2" />
                  <span className="sr-only">Add team member</span>
                  <PlusIcon aria-hidden="true" className="size-5" />
                </button>
                <Text className="ml-3 ">
                  Drag and drop profile image or click to add{" "}
                </Text>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-4">
                <Field>
                  <Label>First name</Label>
                  <Input name="first_name" />
                </Field>
                <Field>
                  <Label>Last name</Label>
                  <Input name="last_name" />
                </Field>
              </div>
              <Field>
                <Label>Email</Label>
                <Input name="Email" />
              </Field>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-4">
                <Field className="sm:col-span-2">
                  <Label>Title</Label>
                  <Select name="country">
                    <option>Software Engineer</option>
                    <option>Senior Project Manager</option>
                    <option>Project Manager</option>
                    <option>Front-end Developer</option>
                    <option>Back-end Developer</option>
                    <option>UI/UX Developer</option>
                  </Select>
                </Field>
                <Field>
                  <Label>Role</Label>
                  <Select name="country">
                    <option>Member</option>
                    <option>Owner</option>
                    <option>Admin</option>
                  </Select>
                </Field>
              </div>
            </FieldGroup>
          </Fieldset>
        </DialogBody>
        <DialogActions>
          <Button
            plain
            onClick={() => setIsOpen(false)}
            className="cursor-pointer"
          >
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)} className="cursor-pointer">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
