import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Customer } from '../share/customer';

@Component({
  selector: 'tea-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.sass']
})
export class CustomerFormComponent implements OnInit {

  form: FormGroup;

  customer: Customer;
  view = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef: MatDialogRef<CustomerFormComponent>) {
    if (data.id) {
      this.customer = data.customer;
    } else {
      this.customer = new Customer();
      this.view = false;
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl({ value: this.customer.name, disabled: this.view },
        [Validators.required,
        Validators.maxLength(50)]),
      trade: new FormControl({ value: this.customer.trade, disabled: this.view },
        [Validators.required,
        Validators.maxLength(50)])
    });
  }

  closeForm() {
    this.dialogRef.close();
  }

  editForm() {
    this.form.controls['name'].enable();
    this.form.controls['trade'].enable();
  }

}
