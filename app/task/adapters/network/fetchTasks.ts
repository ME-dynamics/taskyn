import { toJalaaliDate } from "../utils";
import { request } from "../../../library";
import { IFetchTasksPayload, ITask } from "../../types";

export async function fetchTasks(): Promise<IFetchTasksPayload> {
  const { error, httpStatus, payload, success } = await request({
    body: undefined,
    endpoint: "/tasks/",
    method: "GET",
  });
  if (!success) {
    return {
      error: String(error),
      tasks: [],
    };
  }
  if (Array.isArray(payload)) {
    const result: ITask[] = [];
    for (let index = 0; index < payload.length; index++) {
      const task = payload[index];

      const createdAt =
        Date.parse(task?.createdAt) !== NaN
          ? toJalaaliDate(new Date(task?.createdAt))
          : "";
      const modifiedAt =
        Date.parse(task?.modifiedAt) !== NaN
          ? toJalaaliDate(new Date(task?.modifiedAt))
          : "";
      result.push({
        userId: String(task?.userId),
        id: String(task?.id),
        content: String(task?.content),
        done: Boolean(task?.done),
        createdAt,
        modifiedAt,
      });
    }
    return {
      error: "",
      tasks: result,
    };
  }
  return {
    error: "must be array",
    tasks: [],
  };
}
