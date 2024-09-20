import { Task } from "@/stores/task-store";

const position = { x: 0, y: 0 };
const groupNodeWidth = 1000;

export const generateNodesFromTasks = (tasks: Task[]) => {
  // Static group nodes
  const groupNodes = [
    {
      id: "S1",
      data: { label: "Stage 1", stage: "1" },
      type: "group",
      position,
      style: {
        width: groupNodeWidth,
        height: 1,
        border: "1px solid gray",
        borderRadius: 8,
      },
    },
    {
      id: "S2",
      data: { label: "Stage 2", stage: "2" },
      type: "group",
      position,
      style: {
        width: groupNodeWidth,
        height: 1,
        border: "1px solid gray",
        borderRadius: 8,
      },
    },
    {
      id: "S3",
      data: { label: "Stage 3", stage: "3" },
      type: "group",
      position,
      style: {
        width: groupNodeWidth,
        height: 1,
        border: "1px solid gray",
        borderRadius: 8,
      },
    },
    {
      id: "S4",
      data: { label: "Stage 4", stage: "4" },
      type: "group",
      position,
      style: {
        width: groupNodeWidth,
        height: 1,
        border: "1px solid gray",
        borderRadius: 8,
      },
    },
  ];

  // Map tasks to nodes
  const taskNodes = tasks.map((task) => ({
    id: task.taskID,
    data: task,
    type: "custom",
    position,
  }));

  // Combine group nodes and task nodes
  return [...groupNodes, ...taskNodes];
};
