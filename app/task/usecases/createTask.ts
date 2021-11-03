import { fetchCreateTask } from "../adapters";
import { taskState } from "../entities";

export async function createTask() {
  const { error, task } = await fetchCreateTask(taskState.newTask);
  if (error) {
    taskState.setNewTask("");
    return;
  }
  taskState.addList(task);
  taskState.setNewTask("");
}
