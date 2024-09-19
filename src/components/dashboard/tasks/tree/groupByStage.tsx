import { Task } from "@/stores/task-store";

type groupTaskData = {
  label: string;
};

type Node = {
  id: string;
  type: "group" | "custom";
  data: Task | groupTaskData;
  position: { x: number; y: number };
  style?: {
    width: number;
    height: number;
    border: string;
    borderRadius: number;
  };
  sourcePosition?: "right";
  parentId?: string;
  extent?: "parent";
};

type Edge = {
  id: string;
  source: string;
  target: string;
  animated?: boolean;
};

// Define a function that groups tasks by stage and returns nodes
export const groupTasksByStage = (
  tasks: Task[]
): { nodes: Node[]; edges: Edge[] } => {
  // Step 1: Group tasks by stage
  const groupedTasks: Record<string, Task[]> = tasks.reduce(
    (acc: Record<string, Task[]>, task) => {
      if (!acc[task.stage]) {
        acc[task.stage] = [];
      }
      acc[task.stage].push(task);
      return acc;
    },
    {}
  );

  // Step 2: Initialize nodes and edges arrays
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  // Step 3: Generate nodes and edges
  Object.entries(groupedTasks).forEach(([stage, stageTasks], stageIndex) => {
    const groupId = `S-${stage}`;
    nodes.push({
      id: groupId,
      type: "group",
      data: { label: `Stage ${stage}` },
      position: { x: stageIndex * 600, y: 0 },
      style: {
        width: 500,
        height: 70,
        border: "1px solid gray",
        borderRadius: 8,
      },
    });

    stageTasks.forEach((task, taskIndex) => {
      const taskNode: Node = {
        id: task.taskID,
        type: "custom",
        data: task,
        position: { x: 20, y: taskIndex * 200 },
        parentId: groupId,
        sourcePosition: "right",
        extent: "parent",
      };
      nodes.push(taskNode);

      // Generate edges only if the task is visible
      task.childTasks.forEach((childTaskId: string) => {
        const childTask = tasks.find(
          (t) => t.taskID === childTaskId && t.isVisible
        );
        if (childTask) {
          edges.push({
            id: `h-${task.taskID}-${childTask.taskID}`,
            source: task.taskID,
            target: childTask.taskID,
            animated: true,
          });
        }
      });
    });
  });

  return { nodes, edges };
};
