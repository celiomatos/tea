import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProdutoFormComponent } from '../produto-form/produto-form.component';
import { ProdutoListComponent } from '../produto-list/produto-list.component';
import { ProdutoRoutingModule } from './produto-routing.module';



@NgModule({
  declarations: [ProdutoFormComponent, ProdutoListComponent],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ]
})
export class ProdutoModule { }
