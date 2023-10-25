import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { RouterModule, Routes } from "@angular/router";
import { FullCalendarModule } from "@fullcalendar/angular";
import { MaterialModule } from "src/app/share/material.module";
import { ShareModule } from "src/app/share/share.module";
import { ScheduleFormComponent } from "../schedule-form/schedule-form.component";
import { ScheduleComponent } from "../schedule/schedule.component";
import { ScheduleService } from "./schedule.service";

const routes: Routes = [
    {
        path: '',
        component: ScheduleComponent
    }
]

@NgModule({
    declarations: [ScheduleComponent, ScheduleFormComponent],
    providers: [ScheduleService, { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }],
    imports: [
        RouterModule.forChild(routes),
        FullCalendarModule,
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        ShareModule
    ]
})
export class ScheduleModule {

}