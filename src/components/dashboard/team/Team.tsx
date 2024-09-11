import React from "react";
import { Heading } from "@/components/catalyst/heading";
import { TeamDropdown } from "./TeamDropdown";
import { TeamTable } from "./TeamTable";

const secondaryNavigation = [
  { name: "Overview", href: "#", current: true },
  { name: "Activity", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];

export default function Team() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-7xl">
        <div className="flex w-full flex-wrap items-end justify-between gap-4 border-b border-zinc-300 pb-6 dark:border-white/10">
          <Heading
            level={1}
            className="xl:text-2xl  md:ml-8 text-black dark:text-white"
          >
            Team
          </Heading>
          <TeamDropdown />
        </div>
        <main>
          <header>
            {/* Secondary navigation */}
            <nav className="flex overflow-x-auto  border-gray-200  dark:border-white/10">
              <ul
                role="list"
                className="flex min-w-full flex-none gap-x-6 px-4 text-sm font-semibold leading-6 text-gray-700 dark:text-gray-400 sm:px-6 lg:px-8"
              >
                {secondaryNavigation.map((item) => (
                  <li
                    key={item.name}
                    className={
                      item.current
                        ? "py-2.5 text-indigo-700 dark:text-indigo-400 border-t border-indigo-400"
                        : "py-2.5 text-gray-700 dark:text-gray-400"
                    }
                  >
                    <a
                      href={item.href}
                      className={
                        item.current
                          ? "text-indigo-700 dark:text-indigo-400 "
                          : "text-gray-700 dark:text-gray-400"
                      }
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            {/* Stats Section */}
            {/* <Stats stats={stats} classNames={classNames} teamList={teamList} /> */}
          </header>
          <TeamTable/>
        </main>
      </div>
    </div>
  );
}
