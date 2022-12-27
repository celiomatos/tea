import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FornecedorFormComponent } from '../fornecedor-form/fornecedor-form.component';
import { FornecedorListComponent } from '../fornecedor-list/fornecedor-list.component';
import { FornecedorRoutingModule } from './fornecedor-routing.module';



@NgModule({
  declarations: [FornecedorFormComponent, FornecedorListComponent],
  imports: [
    CommonModule,
    FornecedorRoutingModule
  ]
})
export class FornecedorModule { }
