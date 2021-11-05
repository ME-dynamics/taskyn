import { fetchCreateTask } from "../adapters";
import { taskState } from "../entities";

export async function createTask() {
  if (taskState.newTask.length < 3) {
    taskState.setTaskValidation(["تسک خود رو به طور کامل تعریف کنید."]);
    return;
  }
  const { error, task } = await fetchCreateTask(taskState.newTask);
  if (error) {
    taskState.setNewTask("");
    return;
  }
  taskState.addTask(task);
  taskState.setNewTask("");
}
