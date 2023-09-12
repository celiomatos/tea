import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilialFormComponent } from '../filial-form/filial-form.component';
import { Filial } from '../share/filial';
import { FilialService } from '../share/filial.service';

@Component({
  selector: 'tea-filial-list',
  templateUrl: './filial-list.component.html',
  styleUrls: ['./filial-list.component.sass']
})
export class FilialListComponent implements OnInit {

  constructor(public dialog: MatDialog, private readonly service: FilialService) {

  }

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (data: Filial[]) => { data.forEach(x => console.log(x.name)) },
      error: (erro) => { console.log(erro) }
    });
  }

  openForm(id?: number) {
    console.log(' em filial id ===== ' + id)
    const dialogRef = this.dialog.open(FilialFormComponent, {
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(() => {
    });
  }

}
