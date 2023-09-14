import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Column } from 'src/app/share/components/table/column';
import { Customer } from '../../customer/share/customer';
import { CustomerFormComponent } from '../customer-form/customer-form.component';
import { CustomerService } from '../share/customer.service';

@Component({
  selector: 'tea-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.sass']
})
export class CustomerListComponent implements OnInit {

  columns = [
    new Column<Customer>('id', 'ID', item => item.id, '15%'),
    new Column<Customer>('name', 'Nome', item => item.name, '45%'),
    new Column<Customer>('trade', 'Fantasia', item => item.trade, '25%'),
    new Column<Customer>('address.street', 'Logradouro', item => item.address?.street, '25%')
  ];

  dataSource = new MatTableDataSource<Customer>();

  constructor(public dialog: MatDialog, private readonly service: CustomerService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (data: Customer[]) => { this.dataSource.data = data },
      error: (erro) => { console.log(erro) }
    });
  }

  openForm(id?: number) {
    const dialogRef = this.dialog.open(CustomerFormComponent, {
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(() => {
    });
  }

}
