"use client";
import { useCallback, useEffect } from "react";
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

  useEffect(() => {
    const { nodes: groupedNodes, edges: generatedEdges } = groupTasksByStage(tasks); // Create nodes and edges
    setNodes(groupedNodes); // Set the new nodes
    setEdges(generatedEdges); // Set the new edges
  }, [tasks, setNodes, setEdges]);

  useEffect(() => {
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
        const newHeight = childNodes.length * (nodeHeight + spacing); // Calculate group height

        // Calculate the new x position based on the stage index and xOffset
        const newX = stageIndex * xOffset;

        // Dynamically set the y position for each child node
        childNodes.forEach((childNode, childIndex) => {
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
  }, [width, nodes, setNodes]);

  return (
    <div className="border rounded-lg overflow-hidden border-zinc-300 dark:border-white/10 mt-3 h-flow-xl 2xl:h-flow-2xl">
      <ReactFlow
        colorMode={colorMode}
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        // panOnScroll
        // selectionOnDrag
        // panOnDrag={panOnDrag}
        // selectionMode={SelectionMode.Partial}
        fitView
        attributionPosition="bottom-right"
        nodesDraggable={false}
        defaultEdgeOptions={edgeOptions} // Set edge options
      >
        <Controls position="top-right" />
        <Background  variant={BackgroundVariant.Dots} />
      </ReactFlow>
    </div>
  );
}

export default TaskTree;
