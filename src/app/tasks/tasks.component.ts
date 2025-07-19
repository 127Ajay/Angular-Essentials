import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMYTASKS } from '../dummy-tasks';
import { AddTaskComponent } from './add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  isAddingTask: boolean = false;
  tasks = DUMMYTASKS;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    // Here you would typically handle the task completion logic, e.g., updating the task status.
  }

  onAddTask() {
    // Logic to add a new task would go here.
    // This could involve opening a modal or navigating to an add task page.
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
    // Logic to reset the form or close the add task dialog would go here.
  }
}
