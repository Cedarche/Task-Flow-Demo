"use client";
import { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DraggableProvided,
  DraggableStateSnapshot,
} from "@hello-pangea/dnd";
import { Button } from "@/components/catalyst/button";
import {
  getItems,
  reorder,
  move,
  getItemStyle,
  getListStyle,
} from "./GridFunctions";
import { PlusIcon } from "@heroicons/react/16/solid";
import TaskDrawer from "../../navigation/TaskDrawer";
import { taskList } from "@/lib/DEMODATA";
import DraggableItem from "./DraggableTask"; // Import the new DraggableItem component

const groupTasksByStage = (tasks: typeof taskList) => {
  return tasks.reduce((acc: Record<string, any[]>, task) => {
    if (!acc[task.stage]) {
      acc[task.stage] = [];
    }
    acc[task.stage].push(task);
    return acc;
  }, {});
};

function TaskGrid() {
  const groupedTasks = groupTasksByStage(taskList);
  const initialState = Object.values(groupedTasks);
  const [state, setState] = useState(initialState);
  const [addTask, setAddTask] = useState(false);

  function onDragEnd(result: DropResult) {
    const { source, destination } = result;

    if (!destination) return;

    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(state[sInd], source.index, destination.index);
      const newState = [...state];
      newState[sInd] = items;
      setState(newState);
    } else {
      const result = move(state[sInd], state[dInd], source, destination);
      const newState = [...state];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];

      setState(newState.filter((group) => group.length));
    }
  }

  return (
    <>
      <TaskDrawer open={addTask} setOpen={setAddTask} />
      <div className="w-full flex py-4">
        <DragDropContext onDragEnd={onDragEnd}>
          {state.map((el, ind) => (
            <div key={ind}>
              <div className="my-2 pl-4 flex font-bold">Stage {ind + 1}</div>
              <Droppable key={ind} droppableId={`${ind}`}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                    {...provided.droppableProps}
                    className="border mr-6"
                  >
                    {el.map((item, index) => (
                      <DraggableItem
                        key={item.taskID}
                        task={item}
                        index={index}
                        state={state}
                        setState={setState}
                        ind={ind}
                      />
                    ))}
                    {provided.placeholder}
                    <div className="w-full flex items-center justify-end">
                      <Button color="light" className="cursor-pointer" onClick={() => setAddTask(!addTask)}>
                        <PlusIcon />
                        Add Task
                      </Button>
                    </div>
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </DragDropContext>
      </div>
    </>
  );
}

export default TaskGrid;
