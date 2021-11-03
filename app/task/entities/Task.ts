import { action, makeObservable, observable, computed } from "mobx";
import { ITask } from "../types";
export class TaskState {
  constructor() {
    makeObservable(this, {
      list: observable,
      newTask: observable,
      setNewTask: action,
      setList: action,
      addList: action,
      doneList: computed,
      undoneList: computed,
    });
  }
  newTask: string = "";
  list: ITask[] = [];
  setNewTask(content: string) {
    this.newTask = content;
  }
  setList(list: ITask[]) {
    this.list = list;
  }
  addList(task: ITask) {
    this.list.unshift(task);
  }
  get doneList() {
    const done: ITask[] = [];
    const len = this.list.length;
    for (let index = 0; index < len; index++) {
      const task = this.list[index];
      if (task.done) {
        done.push(task);
      }
    }
    return done;
  }
  get undoneList() {
    const undone: ITask[] = [];
    const len = this.list.length;
    for (let index = 0; index < len; index++) {
      const task = this.list[index];
      if (!task.done) {
        undone.push(task);
      }
    }
    return undone;
  }
}