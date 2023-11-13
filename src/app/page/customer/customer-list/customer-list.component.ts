import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    new Column<Customer>('name', 'Nome', item => item.name, '25%'),
    new Column<Customer>('trade', 'Fantasia', item => item.trade, '25%'),
    new Column<Customer>('address.neighborhood', 'Bairro', item => item.address?.neighborhood, '20%'),
    new Column<Customer>('address.street', 'Logradouro', item => item.address?.street, '25%'),
    new Column<Customer>('id', 'ID', item => item.id, '5%')
  ];

  dataSource = new MatTableDataSource<Customer>();

  constructor(
    public dialog: MatDialog,
    private readonly service: CustomerService,
    private readonly snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (data: Customer[]) => {
        this.dataSource.data = data;
        this.service.es = data
      },
    });
  }

  openForm(id?: string) {
    let customer;
    if (id) {
      let customers = this.dataSource.data.filter(r => r.id === id);
      customer = customers[0];
    }

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: id,
      customer: customer
    }

    const dialogRef = this.dialog.open(CustomerFormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {
      this.dataSource.data = this.service.es;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue?.trim().toLowerCase();
  }

}
