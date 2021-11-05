import { request } from "../../../library";

export async function fetchRemoveTask(taskId: string) {
  const { success } = await request({
    endpoint: `/tasks/${taskId}/`,
    body: {},
    method: "DELETE",
    token: "",
  });
  return success;
}
