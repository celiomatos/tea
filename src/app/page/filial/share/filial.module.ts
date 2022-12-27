import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShareModule } from 'src/app/share/share.module';
import { FilialFormComponent } from '../filial-form/filial-form.component';
import { FilialListComponent } from '../filial-list/filial-list.component';
import { FilialRoutingModule } from './filial-routing.module';



@NgModule({
  declarations: [FilialFormComponent, FilialListComponent],
  imports: [
    CommonModule,
    FilialRoutingModule,
    ShareModule
  ]
})
export class FilialModule { }
