"use client";

import { useState } from "react";
import { Dialog, DialogPanel, Field, Label, Switch } from "@headlessui/react";
import {
  BellIcon,
  CreditCardIcon,
  CubeIcon,
  FingerPrintIcon,
  UserCircleIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { Button } from "@/components/catalyst/button";
import { Heading, Subheading } from "@/components/catalyst/heading";
import { Text } from "@/components/catalyst/text";

const secondaryNavigation = [
  { name: "General", href: "#", icon: UserCircleIcon, current: true },
  { name: "Security", href: "#", icon: FingerPrintIcon, current: false },
  { name: "Notifications", href: "#", icon: BellIcon, current: false },
  { name: "Plan", href: "#", icon: CubeIcon, current: false },
  { name: "Billing", href: "#", icon: CreditCardIcon, current: false },
  { name: "Team members", href: "#", icon: UsersIcon, current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function ProjectSettings() {
  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] =
    useState(true);

  return (
    <>
      <div className="mx-auto max-w-7xl  lg:flex lg:gap-x-16 lg:px-8">
        <h1 className="sr-only">General Settings</h1>

        <aside className="flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0 ">
          <nav className="flex-none px-4 sm:px-6 lg:px-0">
            <ul
              role="list"
              className="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col"
            >
              {secondaryNavigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-50 dark:bg-zinc-300/20 text-indigo-600 dark:text-white"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 hover:dark:bg-zinc-800 hover:text-indigo-600 hover:dark:text-indigo-400",
                      "group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm font-semibold leading-6"
                    )}
                  >
                    <item.icon
                      aria-hidden="true"
                      className={classNames(
                        item.current
                          ? "text-indigo-600 dark:text-white"
                          : "text-gray-400 group-hover:text-indigo-600 group-hover:dark:text-indigo-400",
                        "h-6 w-6 shrink-0"
                      )}
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="px-4  sm:px-6 lg:flex-auto lg:px-0 py-4">
          <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
            <div>
              <Heading>Project Details</Heading>
              <Text className="mt-2">
                This information will be displayed publicly so be careful what
                you share.
              </Text>
              <dl className="mt-6 space-y-6 divide-y divide-zinc-300 dark:divide-zinc-100/20 border-t border-gray-200 dark:border-white/50 text-sm leading-6">
                <div className="pt-6 sm:flex">
                  <dt className=" sm:w-64 sm:flex-none sm:pr-6">
                    <Subheading>Project Name</Subheading>
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <Text>Snap Park</Text>
                    <button
                      type="button"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Update
                    </button>
                  </dd>
                </div>
                <div className="pt-6 sm:flex">
                  <dt className=" sm:w-64 sm:flex-none sm:pr-6">
                    <Subheading>Primary Contact</Subheading>
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <Text>Tom Carruthers</Text>{" "}
                    <button
                      type="button"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Update
                    </button>
                  </dd>
                </div>
                <div className="pt-6 sm:flex">
                  <dt className=" sm:w-64 sm:flex-none sm:pr-6">
                    <Subheading>Email Address</Subheading>
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <Text>tomcarruthers96@gmail.com</Text>
                    <button
                      type="button"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Update
                    </button>
                  </dd>
                </div>
                <div className="pt-6 sm:flex">
                  <dt className=" sm:w-64 sm:flex-none sm:pr-6">
                    <Subheading>Title</Subheading>
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <Text>Owner</Text>
                    <button
                      type="button"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Update
                    </button>
                  </dd>
                </div>
              </dl>
            </div>

            <div>
              <Heading>Integrations</Heading>
              <Text className="mt-2">
                Connect applications to your project.
              </Text>
              <ul
                role="list"
                className="mt-6 divide-y divide-zinc-300 dark:divide-zinc-100/20 border-t border-gray-200 dark:border-white/50 text-sm leading-6"
              >
                <li className="flex justify-between gap-x-6 py-6">
                  <Subheading>Stripe</Subheading>
                  <button
                    type="button"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Update
                  </button>
                </li>
                <li className="flex justify-between gap-x-6 py-6">
                  <div className="font-medium text-gray-900">
                    <Subheading>Xero</Subheading>
                  </div>
                  <button
                    type="button"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Update
                  </button>
                </li>
                <li className="flex justify-between gap-x-6 py-6">
                  <div className="font-medium text-gray-900">
                    <Subheading>Microsoft Teams</Subheading>
                  </div>
                  <button
                    type="button"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Update
                  </button>
                </li>
              </ul>

              <div className="flex border-t border-gray-200 dark:border-white/50 pt-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  <span aria-hidden="true">+</span> Add another application
                </button>
              </div>
            </div>

            <div>
              <Heading>Languages and Dates</Heading>
              <Text className="mt-2">
                Choose what language and date format to use throughout your
                account.
              </Text>
              <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                <div className="pt-6 sm:flex">
                  <dt className=" sm:w-64 sm:flex-none sm:pr-6">
                    <Subheading>Language</Subheading>
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <Text>English</Text>
                    <button
                      type="button"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Update
                    </button>
                  </dd>
                </div>
                <div className="pt-6 sm:flex">
                  <dt className=" sm:w-64 sm:flex-none sm:pr-6">
                    <Subheading>Date Format</Subheading>
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <Text>DD-MM-YYYY</Text>
                    <button
                      type="button"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Update
                    </button>
                  </dd>
                </div>
                <Field className="flex pt-6">
                  <Label as="dt" passive className="flex-none pr-6  sm:w-64">
                    <Subheading>Automatic timezone</Subheading>
                  </Label>
                  <dd className="flex flex-auto items-center justify-end">
                    <Switch
                      checked={automaticTimezoneEnabled}
                      onChange={setAutomaticTimezoneEnabled}
                      className="group flex w-8 cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
                    >
                      <span
                        aria-hidden="true"
                        className="h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                      />
                    </Switch>
                  </dd>
                </Field>
              </dl>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
