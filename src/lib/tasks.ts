import { taskList } from "./DEMODATA";

export const getTaskByID = (taskID: string) => {
  return taskList.find((task) => task.taskID === taskID) || null;
};
