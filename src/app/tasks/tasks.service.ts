import { Injectable } from '@angular/core';
import { DUMMYTASKS } from '../dummy-tasks';
import { type NewTaskData } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = DUMMYTASKS;

  constructor() {
    const tasksfromLocalStorage = localStorage.getItem('tasks');
    if (tasksfromLocalStorage) {
      this.tasks = JSON.parse(tasksfromLocalStorage);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(newTask: NewTaskData, userId: string) {
    const taskId = Math.random().toString(36).substring(2, 15); // Generate a random ID for the new task
    this.tasks.unshift({
      id: taskId,
      userId: userId,
      ...newTask,
    });
    this.saveTasksToLocalStorage();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasksToLocalStorage();
  }

  private saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
