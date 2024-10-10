import { Task } from "@/lib/types";

// Function to reorder items within the same list
export const reorder = (
  list: Task[],
  startIndex: number,
  endIndex: number
): Task[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

// Function to move items between lists
export const move = (
  source: Task[],
  destination: Task[],
  droppableSource: { index: number; droppableId: string },
  droppableDestination: { index: number; droppableId: string }
): { [key: string]: Task[] } => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result: { [key: string]: Task[] } = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

export const groupTasksByStatus = (tasks: Task[]) => {
  const statuses = ["notStarted", "started", "issues", "complete"];
  return statuses.reduce((acc: Record<string, Task[]>, status) => {
    acc[status] = tasks.filter((task) => task.status === status);
    return acc;
  }, {});
};