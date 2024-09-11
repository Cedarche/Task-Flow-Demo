// src/providers/task-store-provider.tsx
'use client';

import { createContext, useContext, useRef, ReactNode } from 'react';
import { useStore } from 'zustand';
import { createTaskStore, TaskStore } from '@/stores/task-store';

export type TaskStoreApi = ReturnType<typeof createTaskStore>;

export const TaskStoreContext = createContext<TaskStoreApi | undefined>(
  undefined
);

export interface TaskStoreProviderProps {
  children: ReactNode;
}

export const TaskStoreProvider = ({ children }: TaskStoreProviderProps) => {
  const storeRef = useRef<TaskStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createTaskStore();
  }

  return (
    <TaskStoreContext.Provider value={storeRef.current}>
      {children}
    </TaskStoreContext.Provider>
  );
};

export const useTaskStore = <T,>(selector: (store: TaskStore) => T): T => {
  const taskStoreContext = useContext(TaskStoreContext);

  if (!taskStoreContext) {
    throw new Error(`useTaskStore must be used within TaskStoreProvider`);
  }

  return useStore(taskStoreContext, selector);
};
