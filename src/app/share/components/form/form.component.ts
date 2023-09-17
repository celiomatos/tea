import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tea-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent {

  @Output() closeForm = new EventEmitter();
  @Output() editForm = new EventEmitter();

  close() {
    this.closeForm.emit();
  }

  edit() {
    this.editForm.emit();
  }

}
