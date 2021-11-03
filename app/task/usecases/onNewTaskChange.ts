import { taskState } from "../entities";

export function onNewTaskChange(text: string) {
  taskState.setNewTask(text);
}
