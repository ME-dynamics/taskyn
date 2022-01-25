import { request } from "../../../library";

export async function fetchRemoveTask(taskId: string, customerId: string | undefined) {
  const { success } = await request({
    endpoint: `/tasks/${taskId}/${customerId}`,
    body: {},
    method: "DELETE",
  });
  return success;
}
