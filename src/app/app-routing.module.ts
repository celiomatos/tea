import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './home/principal/principal.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
    children: [
      {
        path: 'filial',
        loadChildren: () => import('./page/filial/share/filial.module').then(m => m.FilialModule)
      },
      {
        path: 'fornecedor',
        loadChildren: () => import('./page/fornecedor/share/fornecedor.module').then(m => m.FornecedorModule)
      },
      {
        path: 'pedido',
        loadChildren: () => import('./page/pedido/share/pedido.module').then(m => m.PedidoModule)
      },
      {
        path: 'produto',
        loadChildren: () => import('./page/produto/share/produto.module').then(m => m.ProdutoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
