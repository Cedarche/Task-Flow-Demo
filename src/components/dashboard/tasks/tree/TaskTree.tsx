"use client";
import { useCallback, useEffect, useState } from "react";
import {
  ReactFlow,
  addEdge,
  SelectionMode,
  useEdgesState,
  useNodesState,
  Controls,
  Background,
  BackgroundVariant,
  Node,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useTheme } from "next-themes";
import useWindowDimensions from "@/components/hooks/useWindowDimensions";
import { useTaskStore } from "@/providers/task-store-provider";
import { Task } from "@/stores/task-store";

import { initialNodes } from "./nodes.js";
import { initialEdges } from "./edges.js";
import CustomNode from "./CustomNode";
import GroupNode from "./GroupNode";

import { groupTasksByStage } from "./groupByStage";

const nodeTypes = {
  custom: CustomNode,
  group: GroupNode,
};

const panOnDrag = [1, 2];

function TaskTree() {
  const { theme } = useTheme();
  const tasks = useTaskStore((state) => state.tasks);

  // const [nodes, setNodes, onNodesChange] = useNodesState<any>(initialNodes);
  const [nodes, setNodes, onNodesChange] = useNodesState<any>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<any>([]);

  const { width } = useWindowDimensions();

  const onConnect = useCallback(
    (params: any) => setEdges((els) => addEdge(params, els)),
    [setEdges]
  );

  const colorMode = theme === "dark" ? "dark" : "light";

  // Define edge style based on the current theme
  const edgeOptions = {
    style: {
      stroke: theme === "dark" ? "#d5d5d5" : "#8f8f8f", // White in dark mode, black in light mode
    },
  };

  const getAllDescendants = (taskId: string, nodes: any[]): string[] => {
    const descendants: string[] = [];

    const findDescendants = (id: string) => {
      const childNodes = nodes.filter((node) => node.parentId === id);

      childNodes.forEach((child) => {
        if (!descendants.includes(child.id)) {
          descendants.push(child.id);
          findDescendants(child.id); // Recursively find descendants
        }
      });
    };

    findDescendants(taskId);
    return descendants;
  };

  // Toggle the visibility of a task's child tasks
  const toggleChildVisibility = (taskId: string) => {
    // Find the selected task node
    let taskData = nodes.find((e) => e.id === taskId);
    // Get the array of child task IDs from the selected task node
    const childArray = taskData?.data.childTasks || [];
    // Find the nodes that match the child tasks in the current nodes array
    let childTasksArray = nodes.filter((node) =>
      childArray.includes(node.data.taskID)
    );

    let allDescendantsArray = [...childTasksArray];

    childTasksArray.forEach((e) => {
      if (e.data.childTasks.length > 0) {
        let subChildrenArray = nodes.filter((node) =>
          e.data.childTasks.includes(node.data.taskID)
        );
        subChildrenArray.forEach((s) => {
          allDescendantsArray.push(s);
          let subSubChildrenArray = nodes.filter((node) =>
            s.data.childTasks.includes(node.data.taskID)
          );
          subSubChildrenArray.forEach((x) => {
            allDescendantsArray.push(x);
          });
        });
      }
    });



    // Update the visibility of the child task nodes
    setNodes((prevNodes) => {
      const updatedNodes = prevNodes.map((node) => {
        // Check if the node is one of the child nodes and toggle its visibility
        if (allDescendantsArray.some((childNode) => childNode.id === node.id)) {
          return {
            ...node,
            hidden: !node.hidden,
          };
        }
        return node;
      });

      return updatedNodes;
    });
    // Hide the edges connected to the child tasks
    setEdges((prevEdges) => {
      // Find the IDs of child tasks to hide
      const childIds = allDescendantsArray.map((task) => task.id);

      // Filter edges to hide those connecting to the child tasks
      const updatedEdges = prevEdges.map((edge) => {
        if (childIds.includes(edge.target)) {
          return {
            ...edge,
            hidden: !edge.hidden, // Set to false to visually hide the edge or use a different strategy if needed
          };
        }
        return edge;
      });

      return updatedEdges;
    });

    recalculateNodePositions();
  };

  const recalculateNodePositions = () => {
    let hasChanges = false; // Flag to track if any changes were made

    // Calculate the x offset based on screen width
    const xOffset = width <= 1536 ? 425 : 600; // Use 425px for smaller screens, 600px for larger screens
    const newWidth = width <= 1536 ? 340 : 500; // Adjusted group width for smaller screens

    // Create a stage order map to reliably track group node positions
    const stageOrder: Record<string, number> = {
      "Stage 1": 0,
      "Stage 2": 1,
      "Stage 3": 2,
      "Stage 4": 3,
      // Add more stages if necessary
    };

    const updatedNodes = nodes.map((node) => {
      if (node.type === "group") {
        const stageLabel = node.data.label; // Assuming label like "Stage 1"
        const stageIndex = stageOrder[stageLabel] || 0; // Get stage index from map

        const childNodes = nodes.filter((n) => n.parentId === node.id);

        // Set the spacing and initial y-position
        const nodeHeight = 200; // Fixed height for each node
        const spacing = 20; // Space between nodes

        const visibleChildNodes = childNodes.filter((n) => !n.hidden);

        const newHeight = visibleChildNodes.length * (nodeHeight + spacing); // Calculate group height

        // Calculate the new x position based on the stage index and xOffset
        const newX = stageIndex * xOffset;

        // Dynamically set the y position for each child node
        visibleChildNodes.forEach((childNode, childIndex) => {
          const newY = childIndex * (nodeHeight + spacing) + spacing;
          childNode.position = { ...childNode.position, y: newY };
        });

        // Check if either width, height, or position.x has changed
        if (
          node.style.width !== newWidth ||
          node.style.height !== newHeight ||
          node.position.x !== newX
        ) {
          hasChanges = true; // Mark that changes have been detected
          return {
            ...node,
            position: {
              ...node.position,
              x: newX, // Update the x position based on stage index
            },
            style: {
              ...node.style,
              width: newWidth,
              height: newHeight,
            },
            draggable: false, // Disable dragging for group nodes
          };
        }
      }

      return node;
    });

    // Only update state if changes were detected
    if (hasChanges) {
      console.log("Nodes have changed!");
      setNodes(updatedNodes); // Update nodes
    }
  };

  useEffect(() => {
    recalculateNodePositions();
  }, [nodes, width]);

  useEffect(() => {
    const { nodes: groupedNodes, edges: generatedEdges } =
      groupTasksByStage(tasks); // Create nodes and edges
    setNodes(groupedNodes); // Set the new nodes
    setEdges(generatedEdges); // Set the new edges
  }, [tasks, setNodes, setEdges]);

  return (
    <div className="border rounded-lg overflow-hidden border-zinc-300 dark:border-white/10 mt-3 h-flow-xl 2xl:h-flow-2xl">
      <ReactFlow
        colorMode={colorMode}
        nodes={nodes.map((node) => ({
          ...node,
          data: {
            ...node.data,
            toggleVisibility: () => toggleChildVisibility(node.id),
            hidden: node.hidden,
          },
        }))}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        attributionPosition="bottom-right"
        nodesDraggable={false}
        defaultEdgeOptions={edgeOptions}
      >
        <Controls position="top-right" />
        <Background variant={BackgroundVariant.Dots} />
      </ReactFlow>
    </div>
  );
}

export default TaskTree;

// panOnScroll
// selectionOnDrag
// panOnDrag={panOnDrag}
// selectionMode={SelectionMode.Partial}
