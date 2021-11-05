import { action, makeObservable, observable, computed } from "mobx";
import { ITask } from "../types";
export class TaskState {
  constructor() {
    makeObservable(this, {
      tasks: observable,
      newTask: observable,
      taskValidation: observable,
      setTaskValidation: action,
      setNewTask: action,
      setTasks: action,
      addTask: action,
      updateTask: action,
      removeTask: action,
      setTaskDone: action,
      taskList: computed,
    });
  }
  newTask: string = "";
  taskValidation: string[] = [];
  tasks: ITask[] = [];
  setNewTask(content: string) {
    this.newTask = content;
  }
  setTaskValidation(validations: string[]) {
    this.taskValidation = validations;
  }
  setTasks(list: ITask[]) {
    this.tasks = list;
  }
  addTask(task: ITask) {
    this.tasks.unshift(task);
  }
  updateTask(task: ITask) {
    for (let index = 0; index < this.tasks.length; index++) {
      const id = this.tasks[index].id;
      if (id === task.id) {
        this.tasks[index] = task;
        break;
      }
    }
  }
  removeTask(taskId: string) {
    const result: ITask[] = [];
    for (let index = 0; index < this.tasks.length; index++) {
      const task = this.tasks[index];
      if (task.id === taskId) {
        continue;
      }
      result.push(task);
    }
    this.tasks = result;
  }
  setTaskDone(taskId: string) {
    for (let index = 0; index < this.tasks.length; index++) {
      const id = this.tasks[index].id;
      if (id === taskId) {
        this.tasks[index].done = true;
        break;
      }
    }
  }
  get taskList() {
    const done: ITask[] = [];
    const undone: ITask[] = [];
    const len = this.tasks.length;
    for (let index = 0; index < len; index++) {
      const task = this.tasks[index];
      if (task.done) {
        done.push(task);
      } else {
        undone.push(task);
      }
    }
    // TODO: this line can be optimized further
    return done.concat(undone);
  }
}
