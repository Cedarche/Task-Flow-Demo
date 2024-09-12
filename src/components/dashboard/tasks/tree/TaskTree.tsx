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
  Node
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { initialNodes } from "./nodes.js";
import { initialEdges } from "./edges.js";
import CustomNode from "./CustomNode";
import GroupNode from "./GroupNode";

const nodeTypes = {
  custom: CustomNode,
  group: GroupNode,
};

// type CustomNodeType = Node & {
//   parentId?: string;
//   extent?: string;
// };

const panOnDrag = [1, 2];

function TaskTree() {
  const [nodes, setNodes, onNodesChange] = useNodesState<any>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((els) => addEdge(params, els)),
    [setEdges]
  );

  // Calculate new height for each group and dynamically position nodes within the group
  useEffect(() => {
    const updatedNodes = nodes.map((node) => {
      if (node.type === "group") {
        const childNodes = nodes.filter((n) => n.parentId === node.id);

        // Set the spacing and initial y-position
        const nodeHeight = 250; // Fixed height for each node
        const spacing = 20; // Space between nodes
        const newHeight = childNodes.length * (nodeHeight + spacing); // Calculate group height

        // Dynamically set the y position for each child node
        childNodes.forEach((childNode, index) => {
          const newY = index * (nodeHeight + spacing) + spacing;
          childNode.position = { ...childNode.position, y: newY };
        });

        // Update group node height if it has changed
        if (node.style.height !== newHeight) {
          return {
            ...node,
            style: {
              ...node.style,
              height: newHeight,
            },
            draggable: false, // Disable dragging for group nodes
          };
        }
      }

      // Disable dragging for individual nodes
      return {
        ...node,
        draggable: false, // Disable dragging for child nodes
      };
    });

    // Check if nodes have changed before setting state
    if (JSON.stringify(nodes) !== JSON.stringify(updatedNodes)) {
      setNodes([...updatedNodes]); // Ensure state update with a new array reference
    }
  }, [nodes, setNodes]);

  return (
    <div className="border rounded-lg border-zinc-300 dark:border-white/10 mt-3 h-flow-xl 2xl:h-flow-2xl">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        panOnScroll
        selectionOnDrag
        panOnDrag={panOnDrag}
        selectionMode={SelectionMode.Partial}
        fitView
        attributionPosition="bottom-right"
        nodesDraggable={false} // Disable dragging globally
      >
        <Controls position="top-right" />
        <Background color="#acacac" variant={BackgroundVariant.Dots} />
      </ReactFlow>
    </div>
  );
}

export default TaskTree;
