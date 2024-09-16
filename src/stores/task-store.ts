// src/stores/task-store.ts
import { createStore } from 'zustand/vanilla';
import { taskList } from '@/lib/DEMODATA';


export type Task = {
  taskID: string;
  stage: string;
  status: string;
  startDate: string;
  completionDate: string | null;
  started: boolean;
  completed: boolean;
  percentComplete: number;
  taskName: string;
  taskDescription: string;
  assignedUsers: string[];
  subTasks: SubTask[];
  childTasks?: string[] | any;
};

export type SubTask = {
  subTaskID: string;
  startDate: string;
  completionDate: string | null;
  started: boolean;
  completed: boolean;
  subTaskName: string;
  subTaskDescription: string;
  assignedUsers: string[];
};

export type TaskState = {
  tasks: Task[];
};

export type TaskActions = {
  addTask: (task: Task) => void;
  updateTask: (taskID: string, updatedTask: Partial<Task>) => void;
  removeTask: (taskID: string) => void;
};

export type TaskStore = TaskState & TaskActions;

export const defaultTaskState: TaskState = {
  tasks: taskList, // Initialize with an empty list or with the default task list.
};

export const createTaskStore = (initState: TaskState = defaultTaskState) => {
  return createStore<TaskStore>()((set) => ({
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
  }));
};
