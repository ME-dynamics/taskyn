import { request } from "../../../library";

export async function fetchTaskDone(taskId: string) {
  const { success, error, httpStatus, payload } = await request({
    body: {
      taskId,
    },
    endpoint: "/tasks/done",
    method: "PATCH",
    token: "",
  });
  return success;
}
