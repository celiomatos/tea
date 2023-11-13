import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tea-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent {

  @Output() open = new EventEmitter();
  @Output() filter = new EventEmitter();

  openForm() {
    this.open.emit();
  }

  applyFilter(event: Event) {
    this.filter.emit(event);
  }

}
