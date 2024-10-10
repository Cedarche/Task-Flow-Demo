// src/stores/task-store.ts
import { createStore } from "zustand/vanilla";
import { taskList } from "@/lib/DEMODATA";
import { Task } from "@/lib/types";


export type TaskState = {
  tasks: Task[];
};

export type TaskActions = {
  addTask: (task: Task) => void;
  updateTask: (taskID: string, updatedTask: Partial<Task>) => void;
  removeTask: (taskID: string) => void;
  getTaskByID: (taskID: string) => void;
};

export type TaskStore = TaskState & TaskActions;

export const defaultTaskState: TaskState = {
  tasks: taskList, 
};

export const createTaskStore = (initState: TaskState = defaultTaskState) => {
  return createStore<TaskStore>()((set, get) => ({
    ...initState,
    addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
    updateTask: (taskID, updatedTask) =>
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.taskID === taskID ? { ...task, ...updatedTask } : task
        ),
      })),
    removeTask: (taskID) =>
      set((state) => ({
        tasks: state.tasks.filter((task) => task.taskID !== taskID),
      })),
    getTaskByID: (taskID) => {
      const state = get();
      return state.tasks.find((task) => task.taskID === taskID);
    },
  }));
};
