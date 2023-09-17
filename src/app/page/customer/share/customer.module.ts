import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/share/material.module';
import { ShareModule } from 'src/app/share/share.module';
import { CustomerFormComponent } from '../customer-form/customer-form.component';
import { CustomerListComponent } from '../customer-list/customer-list.component';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
  declarations: [CustomerFormComponent, CustomerListComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    ShareModule
  ]
})
export class CustomerlModule { }
