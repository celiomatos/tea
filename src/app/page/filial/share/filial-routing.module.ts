import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilialListComponent } from '../filial-list/filial-list.component';

const routes: Routes = [
  {
    path: '',
    component: FilialListComponent
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

export class FilialRoutingModule { }
