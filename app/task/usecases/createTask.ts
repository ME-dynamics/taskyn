import { fetchCreateTask } from "../adapters";
import { taskState } from "../entities";

export async function createTask(emptyId: string, content: string) {
  // if (taskState.newTask.length < 3) {
  //   taskState.setTaskValidation(["تسک خود رو به طور کامل تعریف کنید."]);
  //   return;
  // }
  const { error, task } = await fetchCreateTask(content);
  if (error) {
    // taskState.setNewTask("");
    return;
  }
  taskState.updateEmptyTask(task, emptyId);
  // console.log(taskState.tasks);
  // taskState.setNewTask("");
}
