import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() user!: { id: string; avatar: string; name: string };
  @Output() select = new EventEmitter<string>();

  get imagePath(): string {
    return `assets/users/${this.user.avatar}`;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
