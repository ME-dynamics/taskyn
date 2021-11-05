import { fetchTaskDone } from "../adapters";
import { taskState } from "../entities";

export async function taskDone(taskId: string) {
  const done = await fetchTaskDone(taskId);
  if (done) {
    taskState.setTaskDone(taskId);
  } else {
    console.log({ taskId, done });
  }
}
