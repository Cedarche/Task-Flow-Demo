"use client";
import React, { useEffect, useState } from "react";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  getOutgoers,
  Background,
  BackgroundVariant,
  Controls,
  getConnectedEdges,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import dagre from "@dagrejs/dagre";
import { useTheme } from "next-themes";
import GroupNode from "../tree/GroupNode";
import CustomNode from "./CustomNode";
import { useTaskStore } from "@/providers/task-store-provider";
import useWindowDimensions from "@/components/hooks/useWindowDimensions";
import { generateNodesFromTasks } from "./GenerateNodes";
import { Task } from "@/stores/task-store";

type groupTaskData = {
  label: string;
  stage: string;
};

type Node = {
  id: string;
  type: "group" | "custom";
  data: Task | groupTaskData;
  position: { x: number; y: number };
};

const nodeTypes = {
  custom: CustomNode,
  group: GroupNode,
};
// import "./index.css";

const DagreTreeChart = () => {
  const { theme } = useTheme();
  const { width } = useWindowDimensions();
  const tasks = useTaskStore((state) => state.tasks);

  const initialNodes = generateNodesFromTasks(tasks);

  // Dynamically create edges based on `childTasks`
  const initialEdges = initialNodes
    .flatMap((node) => {
      // Type guard to check if node.data is a Task before accessing childTasks
      if (node.type !== "group" && "childTasks" in node.data) {
        return (node.data as Task).childTasks?.map((childId: string) => ({
          id: `${node.id}->${childId}`,
          source: node.id,
          target: childId,
        }));
      }
      return [];
    })
    .filter((edge) => edge);

  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  const nodeWidth = width <= 1536 ? 300 : 480;
  const nodeHeight = width <= 1536 ? 140 : 210;

  // Define stage offsets for horizontal positioning
  const stageOffsets: Record<string, number> = {
    "1": width <= 1536 ? 0 : 0,
    "2": width <= 1536 ? 50 : 100,
    "3": width <= 1536 ? 100 : 200,
    "4": width <= 1536 ? 150 : 300,
  };

  const getLayoutedElements = (nodes: any, edges: any, direction = "LR") => {
    const isHorizontal = direction === "LR";
    dagreGraph.setGraph({ rankdir: direction });

    nodes.forEach((node: any) => {
      dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
    });

    edges.forEach((edge: any) => {
      dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    nodes.forEach((node: any) => {
      const nodeWithPosition = dagreGraph.node(node.id);
      node.targetPosition = isHorizontal ? "left" : "top";
      node.sourcePosition = isHorizontal ? "right" : "bottom";

      // Adjust horizontal position based on the stage
      if (node.type === "group") {
      } else {
        const stageOffset = stageOffsets[node.data.stage] || 0;
        node.position = {
          x: nodeWithPosition.x + stageOffset - nodeWidth / 2,
          y: nodeWithPosition.y - nodeHeight / 2,
        };
        node.style = {
          backgroundColor: "#ffffff0",
          borderRadius: 8,
        };
      }

      return node;
    });

    return { nodes, edges };
  };

  const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
    initialNodes,
    initialEdges
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);
  const [hidden, setHidden] = useState(true);

  const edgeOptions = {
    style: {
      stroke: theme === "dark" ? "#d5d5d5" : "#8f8f8f",
    },
  };

  const colorMode = theme === "dark" ? "dark" : "light";

  const recalculateNodePositions = () => {
    let hasChanges = false;

    const newWidth = width <= 1536 ? 320 : 500;
    const spacing = width <= 1536 ? 10 : 20;

    // Filter out hidden nodes
    const visibleNodes = nodes.filter((node) => !node.hidden);

    const updatedNodes = nodes.map((node: any) => {
      if (node.type === "group") {
        const stage = node.data.stage;

        const filteredNodes = visibleNodes.filter(
          (node: any) => node.data.stage === stage && node.type !== "group"
        );

        const xMin = Math.min(
          ...filteredNodes.map((node: any) => node.position.x)
        );

        const yMin = Math.min(
          ...filteredNodes.map((node: any) => node.position.y)
        );
        const yMax = Math.max(
          ...filteredNodes.map((node: any) => node.position.y)
        );

        // Calculate new position and size
        let newX = xMin - spacing;
        let newY = yMin - spacing;
        let newHeight = yMax - yMin + nodeHeight + spacing;

        if (
          node.style.width !== newWidth ||
          node.style.height !== newHeight ||
          node.position.x !== newX ||
          node.position.y !== newY
        ) {
          hasChanges = true;
          return {
            ...node,
            hidden: filteredNodes.length === 0 ? true : false,
            position: {
              x: newX,
              y: newY,
            },
            style: {
              height: newHeight,
              width: newWidth,
              borderRadius: 8,
              border: "1px solid gray",
              backgroundColor: "#3d3d4018",
            },
          };
        }
      }

      return node;
    });

    if (hasChanges) {
      setNodes(updatedNodes);
    }
  };

  useEffect(() => {
    recalculateNodePositions();
  }, [nodes, width]);

  const checkTarget = (edge: any, id: any) => {
    let edges = edge.filter((ed: any) => {
      return ed.target !== id;
    });
    return edges;
  };

  let stack = [];

  const nodeClick = (node: any) => {
    let currentNodeID = node.id;
    stack.push(node);
    let outgoers: any[] = [];
    let connectedEdges: any[] = [];

    while (stack.length > 0) {
      let lastNode = stack.pop();
      let childNodes = getOutgoers(lastNode, nodes, edges);
      let childEdges = checkTarget(
        getConnectedEdges([lastNode], edges),
        currentNodeID
      );
      childNodes.forEach((childNode) => stack.push(childNode));
      connectedEdges.push(...childEdges);
      outgoers.push(...childNodes);
    }

    let childNodeID = outgoers.map((node: any) => node.id);
    let childEdgeID = connectedEdges.map((edge: any) => edge.id);

    // Filter nodes and edges to hide those that are not visible
    const updatedNodes = nodes.map((node) => ({
      ...node,
      hidden: childNodeID.includes(node.id) ? !hidden : node.hidden,
    }));
    const updatedEdges = edges.map((edge) => ({
      ...edge,
      hidden: childEdgeID.includes(edge.id) ? !hidden : edge.hidden,
    }));

    setNodes(updatedNodes);
    setEdges(updatedEdges);
    setHidden(!hidden);
    recalculateNodePositions();
  };

  if (!initialNodes.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="border rounded-lg overflow-hidden border-zinc-300 dark:border-white/10 mt-3 h-flow-xl 2xl:h-flow-2xl">
      <ReactFlow
        colorMode={colorMode}
        nodes={nodes.map((node) => ({
          ...node,
          data: {
            ...node.data,
            toggleVisibility: () => nodeClick(node),
          },
        }))}
        edges={edges}
        fitView
        attributionPosition="bottom-right"
        nodeTypes={nodeTypes}
        defaultEdgeOptions={edgeOptions}
      >
        <Controls position="top-right" />
        <Background variant={BackgroundVariant.Dots} />
      </ReactFlow>
    </div>
  );
};

export default DagreTreeChart;

// draggable={false}
// nodesConnectable={false}
// nodesDraggable={true}
// zoomOnScroll={true}
// zoomOnPinch={true}
// zoomOnDoubleClick={false}
// preventScrolling={false}
// panOnDrag={false}
// panOnScroll={false}
