import { ITask } from "./entities";
export interface IFetchTasksPayload {
  error: string;
  tasks: ITask[];
}

export interface IFetchCreateTaskPayload {
  error: string;
  task: ITask;
}
