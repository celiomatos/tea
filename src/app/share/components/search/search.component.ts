import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tea-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent {

  @Output() open = new EventEmitter();

  openForm() {
    this.open.emit();
  }

}
