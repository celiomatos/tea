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
  @Output() deleteForm = new EventEmitter();

  @Input() formValid = true;
  @Input() btDeleteDisable = true;

  btEditDisable = false;

  close() {
    this.closeForm.emit();
  }

  edit() {
    this.btEditDisable = true;
    this.editForm.emit();
  }

  save() {
    this.saveForm.emit();
  }

  delete() {
    this.deleteForm.emit();
  }

}
