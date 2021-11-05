import { taskState } from "../entities";

export function onNewTaskChange(text: string) {
  if (taskState.taskValidation.length > 0) {
    if (text.length > 3) {
      taskState.setTaskValidation([]);
    }
  }
  taskState.setNewTask(text);
}
