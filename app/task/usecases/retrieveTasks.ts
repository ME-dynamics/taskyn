import { taskState } from "../entities";
import { fetchTasks } from "../adapters";

export async function retrieveTasks(customerId: string | undefined) {
  const { error, tasks } = await fetchTasks(customerId);
  if (error) {
    // TODO: do something with error
    return;
  }
  taskState.setTasks(tasks);
}
