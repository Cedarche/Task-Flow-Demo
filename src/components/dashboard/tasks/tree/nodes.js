export const initialNodes = [
  // Group Nodes for Sub-Flows
  {
    id: "S-1",
    type: "group",
    data: { label: "Stage 1" },
    position: { x: 0, y: 0 },
    style: { width: 500, height: 700, border: "1px solid gray", borderRadius: 8  },
  },
  {
    id: "S-2",
    type: "group",
    data: { label: "Stage 2" },
    position: { x: 600, y: 0 },
    style: { width: 500, height: 700, border: "1px solid gray", borderRadius: 8  },
  },
  {
    id: "S-3",
    type: "group",
    data: { label: "Stage 3" },
    position: { x: 1200, y: 0 },
    style: { width: 500, height: 700, border: "1px solid gray", borderRadius: 8  },
  },
  {
    id: "S-4",
    type: "group",
    data: { label: "Stage 4" },
    position: { x: 1800, y: 0 },
    style: { width: 500, height: 700, border: "1px solid gray", borderRadius: 8  },
  },

  //   ===================================================================
  // Nodes

  // Nodes for S-1
  {
    id: "S-1-1",
    sourcePosition: "right",
    type: "custom",
    data: { label: "S-1-1" },
    position: { x: 20, y: 20 }, // Position within Group 1
    parentId: "S-1",
    extent: "parent",
  },
  {
    id: "S-1-2",
    sourcePosition: "right",
    type: "custom",
    data: { label: "A Node" },
    position: { x: 20, y: 270 }, // Position within Group 1
    parentId: "S-1",
    extent: "parent",
  },

  // Nodes for S-2
  {
    id: "S-2-1",
    sourcePosition: "right",
    targetPosition: "left",
    type: "custom",
    data: { label: "Node 3" },
    position: { x: 20, y: 20 }, // Position within Group 1
    parentId: "S-2",
    extent: "parent",
  },
  {
    id: "S-2-2",
    sourcePosition: "right",
    targetPosition: "left",
    type: "custom",
    data: { label: "Node 3" },
    position: { x: 20, y: 270 }, // Position within Group 1
    parentId: "S-2",
    extent: "parent",
  },
  {
    id: "S-2-3",
    sourcePosition: "right",
    targetPosition: "left",
    type: "custom",
    data: { label: "Node 3" },
    position: { x: 20, y: 0 }, // Position within Group 1
    parentId: "S-2",
    extent: "parent",
  },

  // Nodes for S-3
  {
    id: "S-3-1",
    sourcePosition: "right",
    targetPosition: "left",
    type: "custom",
    data: { label: "Node 3" },
    position: { x: 20, y: 20 }, // Position within Group 1
    parentId: "S-3",
    extent: "parent",
  },
  {
    id: "S-3-2",
    sourcePosition: "right",
    targetPosition: "left",
    type: "custom",
    data: { label: "Node 3" },
    position: { x: 20, y: 270 }, // Position within Group 1
    parentId: "S-3",
    extent: "parent",
  },

  // Nodes for S-4
  {
    id: "S-4-1",
    sourcePosition: "right",
    targetPosition: "left",
    type: "custom",
    data: { label: "Node 3" },
    position: { x: 20, y: 20 }, // Position within Group 1
    parentId: "S-4",
    extent: "parent",
  },
  {
    id: "S-4-2",
    sourcePosition: "right",
    targetPosition: "left",
    type: "custom",
    data: { label: "Node 3" },
    position: { x: 20, y: 270 }, // Position within Group 1
    parentId: "S-4",
    extent: "parent",
  },
];
