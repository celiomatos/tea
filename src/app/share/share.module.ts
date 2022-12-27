import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [
    TableComponent,
    FormComponent],

  exports: [TableComponent],

  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class ShareModule { }
