import { DragDropContext, Droppable, Draggable, DropResult, DraggableProvided, DraggableStateSnapshot } from "@hello-pangea/dnd";

// Define an interface for the item type
interface Item {
  id: string;
  content: string;
}

// Function to generate items
export const getItems = (count: number, offset: number = 0): Item[] =>
  Array.from({ length: count }, (_, k) => k).map((k) => ({
    id: `item-${k + offset}-${new Date().getTime()}`,
    content: `item ${k + offset}`,
  }));

// Function to reorder items within the same list
export const reorder = (list: Item[], startIndex: number, endIndex: number): Item[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

// Function to move items between lists
export const move = (
  source: Item[],
  destination: Item[],
  droppableSource: { index: number; droppableId: string },
  droppableDestination: { index: number; droppableId: string }
): { [key: string]: Item[] } => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result: { [key: string]: Item[] } = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const grid = 16;

// Function to get item styles for draggable items
export const getItemStyle = (
  isDragging: boolean,
  draggableStyle: DraggableProvided['draggableProps']['style']
): React.CSSProperties => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 1.5,
  margin: `0 0 ${grid}px 0`,
  borderRadius: 8,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
});

// Function to get list styles for droppable lists
export const getListStyle = (isDraggingOver: boolean): React.CSSProperties => ({
  background: isDraggingOver ? "#bebebe7e" : "#bebebe39",
  padding: grid,

  borderRadius: 8
});
