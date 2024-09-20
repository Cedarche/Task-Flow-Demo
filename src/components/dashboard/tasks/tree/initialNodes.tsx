const position = { x: 0, y: 0 };
const groupNodeWidth = 1000;
export const initialNodes = [
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
  {
    id: "1",
    data: { label: "one", stage: "1", childTasks: ["3"] },
    position,
    type: "custom",
  },
  {
    id: "2",
    data: { label: "two", stage: "1", childTasks: ["4", "5", "6"] },
    position,
    type: "custom",
  },
  {
    id: "3",
    data: { label: "three", stage: "2", childTasks: ["7", "8"] },
    position,
    type: "custom",
  },
  {
    id: "4",
    data: { label: "four", stage: "2", childTasks: [] },
    position,
    type: "custom",
  },
  {
    id: "5",
    data: { label: "five", stage: "2", childTasks: [] },
    position,
    type: "custom",
  },
  {
    id: "6",
    data: { label: "six", stage: "2", childTasks: ["10", "11"] },
    position,
    type: "custom",
  },

  {
    id: "7",
    data: { label: "seven", stage: "3", childTasks: [] },
    position,
    type: "custom",
  },
  {
    id: "8",
    data: { label: "eight", stage: "3", childTasks: ["9"] },
    position,
    type: "custom",
  },
  {
    id: "9",
    data: { label: "nine", stage: "4", childTasks: [] },
    position,
    type: "custom",
  },
  {
    id: "10",
    data: { label: "ten", stage: "3", childTasks: [] },
    position,
    type: "custom",
  },
  {
    id: "11",
    data: { label: "eleven", stage: "3", childTasks: ["12", "13"] },
    position,
    type: "custom",
  },
  {
    id: "12",
    data: { label: "twelve", stage: "4", childTasks: [] },
    position,
    type: "custom",
  },
  {
    id: "13",
    data: { label: "thirteen", stage: "4", childTasks: [] },
    position,
    type: "custom",
  },
];
