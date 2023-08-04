import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'tea-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'menu'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  panelOpenState = false;

  @Output() sendId = new EventEmitter();


  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  openForm(id: number) {
    console.log('id ===== ' + id)
    this.sendId.emit(id);
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  menu: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', menu: 1 },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', menu: 2 },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', menu: 3 },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', menu: 4 },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', menu: 6 },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', menu: 6 }
];
