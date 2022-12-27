import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FornecedorListComponent } from '../fornecedor-list/fornecedor-list.component';

const routes: Routes = [
  {
    path: '',
    component: FornecedorListComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]

})
export class FornecedorRoutingModule { }
