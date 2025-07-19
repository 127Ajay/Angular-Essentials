import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Output() cancelClicked = new EventEmitter<void>();
  onCancel() {
    this.cancelClicked.emit();
  }
}
