import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { SearchComponent } from './components/search/search.component';
import { TableComponent } from './components/table/table.component';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    TableComponent,
    FormComponent,
    SearchComponent],

  exports: [
    TableComponent,
    SearchComponent,
    FormComponent],

  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ShareModule { }
