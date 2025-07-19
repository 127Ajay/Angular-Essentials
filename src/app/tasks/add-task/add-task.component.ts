import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Output() cancelClicked = new EventEmitter<void>();
  @Output() taskCreated = new EventEmitter<NewTaskData>();
  enteredTitle = ''; //singnals : signal('');
  enteredSummary = '';
  enteredDueDate = '';

  onCreateTask() {
    const newTask: NewTaskData = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    };
    this.taskCreated.emit(newTask);
  }

  onCancel() {
    this.cancelClicked.emit();
  }
}
