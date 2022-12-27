import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PrincipalComponent } from '../principal/principal.component';


@NgModule({
  declarations: [PrincipalComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCheckboxModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule
  ]
})
export class PrincipalModule { }
