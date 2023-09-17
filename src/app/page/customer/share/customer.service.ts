import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "src/app/core/api.service";
import { Customer } from "../../customer/share/customer";

@Injectable({ providedIn: 'root' })
export class CustomerService extends ApiService<Customer> {

    customers: Customer[] = [];

    protected override entityPath(): string {
        return 'customer';
    }

    protected override isListEmpty(): boolean {
        return 0 === this.customers.length;
    }
    protected override getList(): Observable<Customer[]> {
        return new Observable((observer) => { observer.next(this.customers) });
    }


}