import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/share/material.module';
import { ShareModule } from 'src/app/share/share.module';
import { CustomerFormComponent } from '../customer-form/customer-form.component';
import { CustomerListComponent } from '../customer-list/customer-list.component';
import { CustomerService } from './customer.service';

const routes: Routes = [
  {
    path: '',
    component: CustomerListComponent
  }
]

@NgModule({
  declarations: [CustomerFormComponent, CustomerListComponent],
  providers: [CustomerService],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    ShareModule
  ]
})
export class CustomerlModule { }
