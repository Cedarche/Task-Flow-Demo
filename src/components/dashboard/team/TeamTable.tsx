// src/components/TeamTable.tsx
"use client";

import { Avatar } from "@/components/catalyst/avatar";
import { Badge } from "@/components/catalyst/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/catalyst/table";
import { PlusIcon } from "@heroicons/react/16/solid";
import { Strong, Text, TextLink } from "@/components/catalyst/text";
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from "@/components/catalyst/dropdown";
import { EllipsisHorizontalIcon } from "@heroicons/react/16/solid";

import { Heading, Subheading } from "@/components/catalyst/heading";
import { Button } from "@/components/catalyst/button";
import { useTeamStore } from "@/providers/team-store-provider"; // Import the custom hook to access the store

export function TeamTable() {
  // Access team members from the Zustand store using the custom hook
  const teamMembers = useTeamStore((state) => state.teamMembers);

  return (
    <div className="mt-2">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto px-8">
          <Subheading className="text-base">Users</Subheading>

          <Text>
            A list of all the users in your account including their name, title,
            email and role.
          </Text>
        </div>

        <Button color="light" className="cursor-pointer">
          <PlusIcon />
          Add user
        </Button>
      </div>
      <div className="mt-4 px-6  ">
        <div className="inline-block  min-w-full py-2 px-2 align-middle ">
          <Table
            bleed
            className="[--gutter:theme(spacing.8)] overflow-hidden shadow ring-1 ring-black dark:ring-gray-700 ring-opacity-5 sm:rounded-lg sm:[--gutter:theme(spacing.8)]"
          >
            <TableHead className="bg-zinc-100 dark:bg-zinc-700/10">
              <TableRow>
                <TableHeader>Name</TableHeader>
                <TableHeader>Role</TableHeader>
                <TableHeader>Status</TableHeader>
                <TableHeader className="relative w-0">
                  <span className="sr-only">Actions</span>
                </TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {teamMembers.map((teamMember) => (
                <TableRow key={teamMember.userID} className="px-6">
                  <TableCell>
                    <div className="flex items-center gap-4">
                      <Avatar src={teamMember.imageUrl} className="size-12" />
                      <div>
                        <div className="font-medium">{teamMember.name}</div>
                        <div className="text-zinc-500">
                          <a
                            href={`mailto:${teamMember.email}`}
                            className="hover:text-zinc-700"
                          >
                            {teamMember.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-zinc-500">
                    {teamMember.role}
                  </TableCell>
                  <TableCell>
                    {teamMember.completedTasks?.length ? (
                      <Badge color="lime">Active</Badge>
                    ) : (
                      <Badge color="zinc">Inactive</Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="-mx-3 -my-1.5 sm:-mx-2.5">
                      <Dropdown>
                        <DropdownButton plain aria-label="More options">
                          <EllipsisHorizontalIcon />
                        </DropdownButton>
                        <DropdownMenu anchor="bottom end">
                          <DropdownItem>View</DropdownItem>
                          <DropdownItem>Edit</DropdownItem>
                          <DropdownItem>Delete</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
