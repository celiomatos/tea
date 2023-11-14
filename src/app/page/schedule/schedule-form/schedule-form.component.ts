import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Schedule } from '../share/schedule';
import { ScheduleService } from '../share/schedule.service';

@Component({
  selector: 'tea-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.sass'],
})
export class ScheduleFormComponent implements OnInit {

  form: FormGroup;
  schedule: Schedule;
  view = true;
  week = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  hours = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11',
    '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
  minutes = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef: MatDialogRef<ScheduleFormComponent>,
    private service: ScheduleService) {

    this.schedule = data.event;
    this.schedule.date = new Date(data.event.date);
    if (!data.event.id) {
      this.view = false;
    }
  }

  ngOnInit(): void {
    this.createForm();
    this.dateChange();
  }

  createForm() {
    this.form = new FormGroup({
      id: new FormControl({ value: this.schedule.id, disabled: true }),
      title: new FormControl({ value: this.schedule.title, disabled: this.view },
        [Validators.maxLength(100), Validators.required]),
      date: new FormControl({ value: this.schedule.date, disabled: this.view },
        [Validators.required]),
      hour: new FormControl({ value: this.getHours(this.schedule.date), disabled: this.view },
        [Validators.required]),
      min: new FormControl({ value: this.getMinutes(this.schedule.date), disabled: this.view },
        [Validators.required]),
      repeat: new FormControl({ value: this.schedule.repeat ?? 'N', disabled: this.view }),
      sun: new FormControl({ value: this.schedule.days?.includes('dom'), disabled: this.view }),
      mon: new FormControl({ value: this.schedule.days?.includes('seg'), disabled: this.view }),
      tue: new FormControl({ value: this.schedule.days?.includes('ter'), disabled: this.view }),
      wed: new FormControl({ value: this.schedule.days?.includes('qua'), disabled: this.view }),
      thu: new FormControl({ value: this.schedule.days?.includes('qui'), disabled: this.view }),
      fri: new FormControl({ value: this.schedule.days?.includes('sex'), disabled: this.view }),
      sat: new FormControl({ value: this.schedule.days?.includes('sab'), disabled: this.view })
    });
  }

  get date() {
    return this.form.get('date') as FormControl;
  }

  dateChange() {
    this.checkDayWeek(this.schedule.date, false);
    this.date.valueChanges.subscribe((value: Date) => {
      this.checkDayWeek(value);
    })
  }

  checkDayWeek(value: Date, change: boolean = true) {
    this.week.forEach((day, index) => {
      if (index === value.getDay()) {
        this.form.controls[day].setValue(true);
        this.form.controls[day].disable();
      } else if (change) {
        this.form.controls[day].enable();
      }
    })
  }

  getHours(date: Date): string {
    return date.getHours() > 9 ? date.getHours().toString() : '0' + date.getHours();
  }

  getMinutes(date: Date): string {
    return date.getMinutes() > 9 ? date.getMinutes().toString() : '0' + date.getMinutes();
  }

  closeForm(altered: string = '') {
    this.dialogRef.close({ event: altered });
  }

  editForm() {
    this.view = false;
    this.form.controls['title'].enable();
    this.form.controls['date'].enable();
    this.form.controls['hour'].enable();
    this.form.controls['min'].enable();
    this.form.controls['sun'].enable();
    this.form.controls['mon'].enable();
    this.form.controls['tue'].enable();
    this.form.controls['wed'].enable();
    this.form.controls['thu'].enable();
    this.form.controls['fri'].enable();
    this.form.controls['sat'].enable();
    this.form.controls['repeat'].enable();
  }

  saveForm() {
    this.schedule.title = this.form.controls['title']?.value;
    this.schedule.date = this.form.controls['date']?.value;
    this.schedule.date.setHours(this.form.controls['hour'].value, this.form.controls['min'].value);
    this.schedule.repeat = this.form.controls['repeat']?.value;
    this.schedule.days = [];
    if (this.form.controls['mon'].value) this.schedule.days.push('seg');
    if (this.form.controls['tue'].value) this.schedule.days.push('ter');
    if (this.form.controls['wed'].value) this.schedule.days.push('qua');
    if (this.form.controls['thu'].value) this.schedule.days.push('qui');
    if (this.form.controls['fri'].value) this.schedule.days.push('sex');
    if (this.form.controls['sat'].value) this.schedule.days.push('sab');
    if (this.form.controls['sun'].value) this.schedule.days.push('dom');

    this.schedule.id ? this.update() : this.save();
  }

  save() {
    this.service.insert(this.schedule).subscribe({
      next: () => {
        this.closeForm('altered');
      },
    })
  }

  update() {
    this.service.update(this.schedule.id, this.schedule).subscribe({
      next: () => {
        this.closeForm('altered');
      },
    });
  }

}
