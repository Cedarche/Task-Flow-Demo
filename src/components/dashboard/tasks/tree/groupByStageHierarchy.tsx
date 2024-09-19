import { hierarchy, HierarchyNode } from "d3-hierarchy";
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

export const groupTasksByStageHierarchy = (
  tasks: Task[]
): { nodes: Node[]; edges: Edge[] } => {
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

  const nodes: Node[] = [];
  const edges: Edge[] = [];

  // For each stage, generate hierarchy for tasks and children
  Object.entries(groupedTasks).forEach(([stage, stageTasks], stageIndex) => {
    const groupId = `S-${stage}`;
    nodes.push({
      id: groupId,
      type: "group",
      data: { label: `Stage ${stage}` },
      position: { x: stageIndex * 600, y: 0 },
      style: {
        width: 500,
        height: 740,
        border: "1px solid gray",
        borderRadius: 8,
      },
    });

    // Create the hierarchy
    const rootTask = hierarchy<Task>(
      { children: stageTasks } as unknown as Task, // Cast to Task temporarily
      (task) =>
        task.childTasks?.length // Ensure childTasks exists and has elements
          ? (task.childTasks
              .map((childTaskId: string) =>
                tasks.find((t) => t.taskID === childTaskId && t.isVisible)
              )
              .filter(Boolean) as Task[]) // Ensure only visible children are included
          : [] // If no childTasks, return an empty array
    );

    // Assign positions and add nodes
    rootTask.each((d, taskIndex) => {
      console.log('Task: ', d)
      if (d.data.taskID) {
        // Ensure we are dealing with valid task data
        const taskNode: Node = {
          id: d.data.taskID,
          type: "custom",
          data: d.data,
          position: { x: 20, y: taskIndex * 200 },
          parentId: groupId,
          sourcePosition: "right",
          extent: "parent",
        };
        nodes.push(taskNode);

        // Add edges for child tasks
        if (d.parent && d.parent.data.taskID) {
          edges.push({
            id: `h-${d.parent.data.taskID}-${d.data.taskID}`,
            source: d.parent.data.taskID,
            target: d.data.taskID,
            animated: true,
          });
        }
      }
    });
  });

  return { nodes, edges };
};
