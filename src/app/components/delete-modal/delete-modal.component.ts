import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent {

  constructor(
    private modalRef: MatDialogRef<TodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      isRemove: boolean,
      title: string
    }
  ) { }

  close() {
    this.modalRef.close();
  }

}
