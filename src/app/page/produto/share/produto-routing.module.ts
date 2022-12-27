import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListComponent } from '../produto-list/produto-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProdutoListComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ProdutoRoutingModule { }
