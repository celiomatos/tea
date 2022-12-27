import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoListComponent } from '../pedido-list/pedido-list.component';

const routes: Routes = [
  {
    path: '',
    component: PedidoListComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class PedidoRoutingModule { }
