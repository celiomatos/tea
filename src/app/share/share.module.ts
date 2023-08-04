import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FormComponent } from './components/form/form.component';
import { SearchComponent } from './components/search/search.component';
import { TableComponent } from './components/table/table.component';


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
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class ShareModule { }
