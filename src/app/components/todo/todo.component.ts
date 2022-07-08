import { Component, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ITodo } from '../../model/todo';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  // receive this field from edit-modal
  modifiedTitle = '';

  @Input()
  todo: ITodo = {
    id: 0,
    title: ''
  };

  constructor(
    private todoService: TodoService,
    private dialog: MatDialog
  ) {}

  openEditDialog() {
    const dialogRef = this.dialog.open(EditModalComponent, {
      width: '400px',
      height: '300px',
      data: {
        modifiedTitle: this.modifiedTitle
      }
    });
    dialogRef.afterClosed().subscribe(title => {
      this.modifiedTitle = title;
      this.edit();
    });
  }

  // TODO: finish delete modal
  openDeleteDialog() {
    this.dialog.open(DeleteModalComponent);
  }

  edit() {
    if(this.modifiedTitle) {
      const newTodo: ITodo = {
        id: this.todo.id,
        title: this.modifiedTitle
      };
      this.todoService.editTodo(newTodo);
    }
  }

  // TODO: finish delete method
  delete() {}

}
