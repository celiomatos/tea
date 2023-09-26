import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTabGroup } from '@angular/material/tabs';
import { Address } from 'src/app/share/components/model/address';
import { Contact } from 'src/app/share/components/model/contact';
import { States } from 'src/app/share/components/model/estado';
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
  states = States;

  @ViewChild('tabGroup', { static: false }) tab: MatTabGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CustomerFormComponent>) {

    if (data.id) {
      this.customer = data.customer;
    } else {
      this.customer = new Customer();
      this.view = false;
    }
  }

  ngOnInit(): void {

    this.form = this.fb.group({
      id: new FormControl({ value: this.customer.id, disabled: true }),
      name: new FormControl({ value: this.customer.name, disabled: this.view },
        [Validators.maxLength(50), Validators.required]),
      trade: new FormControl({ value: this.customer.trade, disabled: this.view },
        [Validators.maxLength(50)]),
      document: new FormControl({ value: this.customer.document, disabled: this.view },
        [Validators.maxLength(13)]),
      registration: new FormControl({ value: this.customer.registration, disabled: this.view },
        [Validators.maxLength(13)]),
      cep: new FormControl({ value: this.customer.address?.cep, disabled: this.view },
        [Validators.maxLength(13)]),
      country: new FormControl({ value: this.customer.address?.country, disabled: this.view },
        [Validators.maxLength(13)]),
      state: new FormControl({ value: this.customer.address?.state, disabled: this.view },
        [Validators.maxLength(13)]),
      city: new FormControl({ value: this.customer.address?.city, disabled: this.view },
        [Validators.maxLength(13)]),
      neighborhood: new FormControl({ value: this.customer.address?.neighborhood, disabled: this.view },
        [Validators.maxLength(13)]),
      street: new FormControl({ value: this.customer.address?.street, disabled: this.view },
        [Validators.maxLength(13)]),
      number: new FormControl({ value: this.customer.address?.number, disabled: this.view },
        [Validators.maxLength(13)]),
      contacts: this.fb.array([])
    });

    this.customer.contacts?.forEach(contact => {
      this.contacts.push(this.addContact(contact));
    });
    if (!this.view) {
      this.addNewContact();
    }
  }

  get contacts(): FormArray {
    return this.form.get('contacts') as FormArray;
  }

  addNewContact() {
    this.contacts.push(this.addContact());
    this.tab.selectedIndex = this.contacts.length - 1;
  }

  addContact(contact?: Contact): FormGroup {
    return this.fb.group({
      name: new FormControl({ value: contact?.name, disabled: this.view }),
      email: new FormControl({ value: contact?.email, disabled: this.view }),
      phone: new FormControl({ value: contact?.phone, disabled: this.view })
    })
  }

  delContact(index: number) {
    this.contacts.removeAt(index);
  }

  closeForm() {
    this.dialogRef.close();
  }

  editForm() {
    this.form.controls['name'].enable();
    this.form.controls['trade'].enable();
    this.form.controls['state'].enable();
  }

  saveForm() {
    this.customer.name = this.form.controls['name']?.value;
    this.customer.trade = this.form.controls['trade']?.value;
    this.customer.document = this.form.controls['document']?.value;
    this.customer.registration = this.form.controls['registration']?.value;

    this.customer.address = new Address();
    this.customer.address.cep = this.form.controls['cep']?.value;
    this.customer.address.country = this.form.controls['country']?.value;
    this.customer.address.state = this.form.controls['state']?.value;
    this.customer.address.city = this.form.controls['city']?.value;
    this.customer.address.neighborhood = this.form.controls['neighborhood']?.value;
    this.customer.address.street = this.form.controls['street']?.value;
    this.customer.address.number = this.form.controls['number']?.value;

    this.customer.contacts = [];

    for (let i = 0; i < this.contacts.length; i++) {
      const element = this.contacts.at(i) as FormGroup;
      const contact = new Contact();
      contact.name = element.controls['name']?.value;
      contact.email = element.controls['email']?.value;
      contact.phone = element.controls['phone']?.value;
      this.customer.contacts.push(contact);
    }
    console.log(this.customer);
  }
}
