import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tea-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  @Output() closeForm = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.closeForm.emit();
  }

}
