import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { CalendarOptions, EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import { ScheduleFormComponent } from '../schedule-form/schedule-form.component';
import { Schedule } from '../share/schedule';
import { ScheduleService } from '../share/schedule.service';

@Component({
  selector: 'tea-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.sass']
})
export class ScheduleComponent implements OnInit {

  @ViewChild('calendar') fullCalendar: FullCalendarComponent;
  events: Schedule[] = [];
  colors = ['red', 'green', 'blue', 'black', 'purple', 'orange'];

  constructor(
    private readonly service: ScheduleService,
    private readonly dialog: MatDialog) { }


  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.service.getAll().subscribe({
      next: (data: Schedule[]) => {
        this.service.es = data;
        this.events = [...data];
        this.events.forEach(d => d.color = this.colors[Math.floor(Math.random() * 5)]);
        this.calendarOptions.events = this.events;
      },
      error: (erro) => { console.log(erro) }
    })
  }

  calendarOptions: CalendarOptions = {
    locale: 'pt-br',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'listDay,listWeek,timeGridDay,timeGridWeek,dayGridMonth'
    },
    buttonText: {
      today: 'Hoje',
      month: 'Mês',
      week: 'Sem',
      day: 'Dia',
      listDay: 'LD',
      listWeek: 'LS'
    },
    initialView: 'dayGridMonth',
    weekends: true,
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
    events: [],
    dateClick: this.handleDateClick.bind(this),
    eventClick: this.handleEventClick.bind(this),
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
  };

  handleDateClick(arg: DateClickArg) {
    let event = new Schedule();
    event.start = arg.date;
    event.end = arg.date;
    this.addEvent(event);
  }

  handleEventClick(info: EventClickArg) {
    let event = new Schedule();
    event.id = info.event.id;
    event.title = info.event.title;
    event.start = info.event.start ?? new Date();
    event.end = info.event.end ?? event.start;
    this.addEvent(event);
  }

  addEvent(event: Schedule) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: event.id,
      event: event,
    }

    const dialogRef = this.dialog.open(ScheduleFormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {
      this.init();
    });
  }

}
