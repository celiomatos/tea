import { Injectable } from "@angular/core";
import { ApiService } from "src/app/core/api.service";
import { Schedule } from "./schedule";

@Injectable()
export class ScheduleService extends ApiService<Schedule> {

    protected override entityPath(): string {
        return 'scheduler';
    }

}