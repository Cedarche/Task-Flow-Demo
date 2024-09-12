// src/components/TeamTable.tsx
"use client";
import { useState } from "react";
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
import { Text } from "@/components/catalyst/text";
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from "@/components/catalyst/dropdown";
import { EllipsisHorizontalIcon } from "@heroicons/react/16/solid";
import { Subheading } from "@/components/catalyst/heading";
import { Button } from "@/components/catalyst/button";
import { useTeamStore } from "@/providers/team-store-provider";
import { AddTeamMember } from "./AddTeamMember";
import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from "@/components/catalyst/pagination";

export function TeamTable() {
  // Access team members from the Zustand store using the custom hook
  const teamMembers = useTeamStore((state) => state.teamMembers);
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AddTeamMember isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="mt-2">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto px-8">
            <Subheading className="text-base">Users</Subheading>

            <Text>
              A list of all the users in your account including their name,
              title, email and role.
            </Text>
          </div>

          <Button
            color="light"
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
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
                  <TableHeader>Title</TableHeader>
                  <TableHeader>Role</TableHeader>
                  <TableHeader>Current Task</TableHeader>
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
                      {teamMember.title}
                    </TableCell>
                    <TableCell className="text-zinc-500">
                      {teamMember.role}
                    </TableCell>
                    <TableCell>
                      <Badge color="lime">
                        <span className="font-mono">
                          {teamMember.task} - {teamMember.subTask}
                        </span>
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="-mx-3 -my-1.5 sm:-mx-2.5 ">
                        <Dropdown>
                          <DropdownButton
                            plain
                            aria-label="More options"
                            className="cursor-pointer"
                          >
                            <EllipsisHorizontalIcon />
                          </DropdownButton>
                          <DropdownMenu anchor="bottom end">
                            <DropdownItem>View</DropdownItem>
                            <DropdownItem>Edit</DropdownItem>
                            <DropdownItem>Message</DropdownItem>
                            <DropdownItem>Delete</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Pagination className="mt-6">
              <PaginationPrevious href="?page=1" />
              <PaginationList>
                <PaginationPage href="?page=1" current>
                  1
                </PaginationPage>
                <PaginationPage href="?page=2">2</PaginationPage>
                <PaginationPage href="?page=3">3</PaginationPage>
              </PaginationList>
              <PaginationNext href="?page=3" />
            </Pagination>
          </div>
        </div>
      </div>
    </>
  );
}
