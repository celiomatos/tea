import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PedidoFormComponent } from '../pedido-form/pedido-form.component';
import { PedidoListComponent } from '../pedido-list/pedido-list.component';
import { PedidoRoutingModule } from './pedido-routing.module';



@NgModule({
  declarations: [PedidoFormComponent, PedidoListComponent],
  imports: [
    CommonModule,
    PedidoRoutingModule
  ]
})
export class PedidoModule { }
