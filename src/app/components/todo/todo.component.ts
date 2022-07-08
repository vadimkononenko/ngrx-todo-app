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

  // from edit-modal
  modifiedTitle: string = '';

  // from delete-modal
  isRemove: boolean = false;

  @Input()
  todo: ITodo = {
    id: 0,
    title: ''
  };

  constructor(
    private todoService: TodoService,
    private modal: MatDialog
  ) {}

  openEditModal() {
    const modalEditRef = this.modal.open(EditModalComponent, {
      width: '400px',
      height: '400px',
      data: {
        modifiedTitle: this.modifiedTitle
      }
    });
    modalEditRef.afterClosed().subscribe(title => {
      this.modifiedTitle = title;
      this.updateTodo();
    });
  }

  openRemoveModal() {
    const modalDeleteRef = this.modal.open(DeleteModalComponent, {
      width: '400px',
      height: '400px',
      data: {
        isRemove: this.isRemove,
        title: this.todo.title
      }
    });
    modalDeleteRef.afterClosed().subscribe(result => {
      this.isRemove = result;
      this.removeTodo();
    })
  }

  updateTodo() {
    if(this.modifiedTitle) {
      const newTodo: ITodo = {
        id: this.todo.id,
        title: this.modifiedTitle
      };
      this.todoService.editTodo(newTodo);
    }
  }

  removeTodo() {
    if(this.isRemove) {
      this.todoService.removeTodo(this.todo);
    }
  }

}
