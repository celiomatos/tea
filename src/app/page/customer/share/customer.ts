import { Address } from "src/app/share/components/model/address";
import { Contact } from "src/app/share/components/model/contact";

export class Customer {
    id: string;
    name: string;
    trade: string;
    document: string;
    registration: string;
    address: Address;
    contacts: Contact[];
}