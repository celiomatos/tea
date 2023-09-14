import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'tea-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.sass']
})
export class CustomerFormComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CustomerFormComponent>) { }

  ngOnInit(): void {
  }

  closeForm() {
    this.dialogRef.close();
  }

}
