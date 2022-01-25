import { fetchCreateTask } from "../adapters";
import { taskState } from "../entities";

export async function createTask(
  emptyId: string,
  content: string,
  userId: string | undefined
) {
  // if (taskState.newTask.length < 3) {
  //   taskState.setTaskValidation(["تسک خود رو به طور کامل تعریف کنید."]);
  //   return;
  // }
  const { error, task } = await fetchCreateTask(content, userId);
  if (error) {
    // taskState.setNewTask("");
    console.log({ createTaskError: error });
    return false;
  }
  console.log({ taskResult: task });
  taskState.updateEmptyTask(task, emptyId);
  // console.log(taskState.tasks);
  return true;
}
