import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tea-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent {

  @Output() closeForm = new EventEmitter();
  @Output() editForm = new EventEmitter();
  @Output() saveForm = new EventEmitter();
  @Input() formValid = true;

  close() {
    this.closeForm.emit();
  }

  edit() {
    this.editForm.emit();
  }

  save() {
    this.saveForm.emit();
  }

}
