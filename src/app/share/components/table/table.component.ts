import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Column } from './column';

@Component({
  selector: 'tea-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Input() columns: Column<any>[];
  @Input() dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [];
  columnWidths: string[] = [];

  panelOpenState = false;

  @Output() sendId = new EventEmitter();


  ngOnInit(): void {
    this.columns.forEach(c => { this.displayedColumns.push(c.field) })
    this.columns.forEach(c => { this.columnWidths.push(c.width) })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  openForm(id: number) {
    this.sendId.emit(id);
  }
}

