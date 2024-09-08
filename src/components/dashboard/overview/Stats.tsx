import React from "react";
import Image from 'next/image'

interface Stat {
  name: string;
  value: string;
}

interface StatsProps {
  stats: Stat[];
  classNames: (...classes: (string | false | undefined)[]) => string;
  teamList: any[];
}

export function Stats({ stats, classNames, teamList }: StatsProps) {
  return (
    <div className="rounded-lg overflow-hidden border">
      {/* Heading */}
      <div className="flex flex-col items-start justify-between gap-x-8 gap-y-4 bg-gray-100/60 dark:bg-gray-700/10 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
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
              <span className="font-semibold text-black dark:text-white">
                Stage 4: Native Application
              </span>
            </h1>
          </div>
          <p className="mt-2 text-xs leading-6 text-gray-500 dark:text-gray-400">
            Deploy production ready app to App Store and Google Play Store
          </p>
        </div>
        <div className="order-first flex-none rounded-full bg-green-100 text-green-600 px-2 py-1 text-xs font-medium ring-1 ring-inset ring-green-200 dark:bg-green-400/10 dark:text-green-400 dark:ring-green-400/30 sm:order-none">
          On schedule
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 bg-gray-100/60   rounded-bl-sm dark:bg-gray-700/10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, statIdx) => (
          <div
            key={stat.name}
            className={classNames(
              statIdx % 2 === 1
                ? "sm:border-l border-gray-300 dark:border-gray-700"
                : statIdx === 2
                ? "lg:border-l border-gray-300 dark:border-gray-700"
                : " border-gray-300 dark:border-gray-700",
              "px-4 py-6 sm:px-6 lg:px-8 border-t"
            )}
          >
            <p className="text-sm font-medium leading-6 text-gray-700 dark:text-gray-400">
              {stat.name}
            </p>
            <span className="mt-2 flex items-baseline gap-x-2">
              <span className="text-4xl font-semibold tracking-tight text-black dark:text-white">
                {stat.name === "Team" ? (
                  <div className="flex flex-row pl-2">
                    {teamList.map((user) => (
                      <Image
                        key={user.imageUrl}
                        alt=""
                        src={user.imageUrl}
                        className="h-9 w-9 -ml-2 border-2 border-indigo-400 dark:border-green-400/20 rounded-full object-cover bg-gray-200 dark:bg-gray-800 "
                      />
                    ))}
                  </div>
                ) : (
                  stat.value
                )}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
