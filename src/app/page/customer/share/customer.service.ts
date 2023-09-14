import { Injectable } from "@angular/core";
import { ApiService } from "src/app/core/api.service";
import { Customer } from "../../customer/share/customer";

@Injectable({ providedIn: 'root' })
export class CustomerService extends ApiService<Customer> {

    protected override entityPath(): string {
        return 'customer';
    }

}