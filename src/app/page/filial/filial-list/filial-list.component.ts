import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilialFormComponent } from '../filial-form/filial-form.component';

@Component({
  selector: 'tea-filial-list',
  templateUrl: './filial-list.component.html',
  styleUrls: ['./filial-list.component.sass']
})
export class FilialListComponent implements OnInit {

  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {
  }

  openForm(id: number) {
    console.log(' em filial id ===== ' + id)
    const dialogRef = this.dialog.open(FilialFormComponent, {
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(() => {
    });
  }

}
