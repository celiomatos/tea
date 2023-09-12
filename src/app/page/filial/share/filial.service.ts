import { Injectable } from "@angular/core";
import { ApiService } from "src/app/core/api.service";
import { Filial } from "./filial";

@Injectable({ providedIn: 'root' })
export class FilialService extends ApiService<Filial> {

    protected override entityPath(): string {
        return 'customer';
    }

}