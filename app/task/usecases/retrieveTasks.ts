import { taskState } from "../entities";
import { fetchTasks } from "../adapters";

export async function retrieveTasks() {
  const { error, tasks } = await fetchTasks();
  if (error) {
    // TODO: do something with error
    return;
  }
  taskState.setTasks(tasks);
}
