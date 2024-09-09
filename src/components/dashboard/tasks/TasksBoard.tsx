import { Heading } from "@/components/catalyst/heading";
import { TaskBoardDropdown } from "./TaskBoardDropdown";
import { TaskBanner } from "./TaskBanner";

function TasksBoard({ children }: any) {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center">
        <div className=" top-4">
          <div className="flex w-full flex-wrap items-end justify-between gap-4 ">
            <Heading
              level={1}
              className="xl:text-2xl text-black dark:text-white"
            >
              Tasks
            </Heading>
            <TaskBoardDropdown />
          </div>
          <TaskBanner />
        </div>
        <div className="flex">{children}</div>
      </div>
    </>
  );
}

export default TasksBoard;
