import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './home/principal/principal.component';
import { authGuard } from './security/guard/auth-guard';
import { LoginComponent } from './security/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: PrincipalComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'customer',
        loadChildren: () => import('./page/customer/share/customer.module').then(m => m.CustomerlModule)
      },
      {
        path: 'schedule',
        loadChildren: () => import('./page/schedule/share/schedule.module').then(m => m.ScheduleModule)
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
