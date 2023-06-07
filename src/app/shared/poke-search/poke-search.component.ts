import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit{
  @Output() emitSearch: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public search(value: string) {
    this.emitSearch.emit(value);
  }
}
