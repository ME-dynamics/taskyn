import { fetchRemoveTask } from "../adapters";
import { taskState } from "../entities";

export async function removeTask(taskId: string) {
  const removed = await fetchRemoveTask(taskId);
  if (!removed) {
    // show error
    return;
  }
  taskState.removeTask(taskId);
}
