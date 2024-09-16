import { Task } from "@/stores/task-store";

type groupTaskData = {
  label: string;
};

// Define the type for a node
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
export const groupTasksByStage = (tasks: Task[]): { nodes: Node[], edges: Edge[] } => {
    // Step 1: Group tasks by stage
    const groupedTasks: Record<string, Task[]> = tasks.reduce((acc: Record<string, Task[]>, task) => {
      if (!acc[task.stage]) {
        acc[task.stage] = [];
      }
      acc[task.stage].push(task);
      return acc;
    }, {});
  
    // Step 2: Initialize nodes and edges arrays
    const nodes: Node[] = [];
    const edges: Edge[] = [];
  
    // Step 3: Generate nodes and edges
    Object.entries(groupedTasks).forEach(([stage, stageTasks], stageIndex) => {
      const groupId = `S-${stage}`; // Example: S-1, S-2, etc.
  
      // Create a group node for each stage
      const groupNode: Node = {
        id: groupId,
        type: "group",
        data: { label: `Stage ${stage}` },
        position: { x: stageIndex * 600, y: 0 }, // Dynamic x position based on index
        style: {
          width: 500,
          height: 700,
          border: "1px solid gray",
          borderRadius: 8,
        },
      };
  
      nodes.push(groupNode); // Add group node to the nodes array
  
      // Create individual task nodes within the group
      stageTasks.forEach((task, taskIndex) => {
        const taskId = `${groupId}-${taskIndex + 1}`; // Unique task ID (e.g., S-1-1)
        console.log(`Generating node for task: ${task.taskName} with ID: ${taskId}`);
  
        const taskNode: Node = {
          id: taskId,
          type: "custom",
          data: task, // Task data as node's data
          position: { x: 20, y: taskIndex * 250 + 20 }, // Position nodes vertically within the group
          parentId: groupId,
          sourcePosition: "right",
          extent: "parent",
        };
  
        nodes.push(taskNode); // Add task node to the nodes array
  
        // Generate edges between the task and its child tasks
        task.childTasks.forEach((childTaskId: string) => {
          console.log(`Looking for child task ID: ${childTaskId} for parent task ID: ${task.taskID}`);
          // Search for the child task across the entire tasks array
          const childTask = tasks.find((t) => t.taskID === childTaskId);
  
          if (childTask) {
            console.log(`Found child task: ${childTask.taskName} with ID: ${childTask.taskID}`);
            const childStage = childTask.stage; // Get the stage of the child task
            const childGroupId = `S-${childStage}`; // Get the group ID for the child task
  
            // Find the child task index by searching for its position within its stage
            const childTaskIndex = groupedTasks[childStage]?.findIndex(t => t.taskID === childTaskId);
            if (childTaskIndex === -1 || childTaskIndex === undefined) {
              console.error(`Child task not found in its stage: ${childTaskId}`);
              return;
            }
  
            const childNodeId = `${childGroupId}-${childTaskIndex + 1}`; // Unique child node ID
            console.log(`Creating edge from ${taskId} to child node ${childNodeId}`);
  
            const edge: Edge = {
              id: `h-${taskId}-${childNodeId}`,
              source: taskId,
              target: childNodeId,
              animated: true, // Optional: animate the edge
            };
  
            edges.push(edge); // Add the edge to the edges array
          } else {
            console.error(`Child task with ID ${childTaskId} not found!`);
          }
        });
      });
    });
  
    return { nodes, edges };
  };
  