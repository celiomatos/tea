import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Customer } from '../share/customer';

@Component({
  selector: 'tea-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.sass']
})
export class CustomerFormComponent implements OnInit {

  id: string;
  customer: Customer;

  constructor(@Inject(MAT_DIALOG_DATA) data: any, private dialogRef: MatDialogRef<CustomerFormComponent>) {
    this.id = data.id;
    if (this.id) {
      this.customer = data.customer;
    } else {
      this.customer = new Customer();
    }
  }

  ngOnInit(): void {
  }

  closeForm() {
    this.dialogRef.close();
  }

}
