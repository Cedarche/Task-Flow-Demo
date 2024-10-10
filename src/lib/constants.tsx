
import { Task } from "./types";

export const statusColors: Record<Task["status"], string> = {
  notStarted:
    "bg-gray-50 text-gray-600 ring-gray-500/10 dark:text-gray-400 dark:ring-gray-400/20 dark:bg-gray-400/10",
  started:
    "bg-blue-50 text-blue-700 ring-blue-700/10 dark:text-blue-400 dark:ring-blue-400/30 dark:bg-blue-400/10",
  issues:
    "bg-red-50 text-red-700 ring-red-600/10 dark:text-red-400 dark:ring-red-400/20 dark:bg-red-400/10",
  complete:
    "bg-green-50 text-green-700 ring-green-600/20 dark:text-green-400 dark:ring-green-500/20 dark:bg-green-500/10",
};


export const gradientColors = {
  from: '#d6fffe',
  via: '#9da0ff',
  to: '#8c00ff'
}