import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  hours = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
  minutes = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ScheduleFormComponent>,
    private readonly service: ScheduleService) {

    this.schedule = data.event;
    if (!data.id) {
      this.view = false;
    }
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: new FormControl({ value: this.schedule.id, disabled: true }),
      title: new FormControl({ value: this.schedule.title, disabled: this.view },
        [Validators.maxLength(100), Validators.required]),
      start: new FormControl({ value: this.schedule.start, disabled: this.view },
        [Validators.required]),
      hourStart: new FormControl({ value: this.schedule.start.getHours(), disabled: this.view },
        [Validators.required]),
      end: new FormControl({ value: this.schedule.end, disabled: this.view }),
    });
  }

  closeForm() {
    this.dialogRef.close();
  }

  editForm() {
    this.view = false;
    this.form.controls['title'].enable();
    this.form.controls['start'].enable();
    this.form.controls['end'].enable();
  }

  saveForm() {
    this.schedule.id ? this.update() : this.save();
  }

  save() {
    this.service.insert(this.schedule).subscribe({
      next: (data: Schedule) => {
        this.service.es.push(data);
        this.closeForm();
      },
      error: (err) => {
        window.alert(err);
      }
    })
  }

  update() {
    this.service.update(this.schedule.id, this.schedule).subscribe({
      next: (data: Schedule) => {
        const index = this.service.es.findIndex(e => e.id === this.schedule.id);
        this.service.es.splice(index, 1);
        this.service.es[index] = data;
        this.closeForm();
      },
      error: (err) => {
        window.alert(err);
      }
    });
  }

}
