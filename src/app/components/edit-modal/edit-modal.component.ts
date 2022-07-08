import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent {

  constructor(
    private modalRef: MatDialogRef<TodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      modifiedTitle: string
    }
  ) { }

}
