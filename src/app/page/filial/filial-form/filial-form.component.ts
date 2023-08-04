import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'tea-filial-form',
  templateUrl: './filial-form.component.html',
  styleUrls: ['./filial-form.component.sass']
})
export class FilialFormComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<FilialFormComponent>) { }

  ngOnInit(): void {
  }

  closeForm() {
    this.dialogRef.close();
  }

}
