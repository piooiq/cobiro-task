import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FilterableListItem } from './model/FilterableListItem';

@Component({
  selector: 'cobiro-filterable-list',
  templateUrl: 'filterable-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FilterableListComponent implements OnInit {
  @Input() data: Array<FilterableListItem>

  constructor() { }

  private filterPhrase = '';

  get filteredData(): Array<FilterableListItem> {
    return this.data ?
          this.data.filter(item => {
            return item.title.toUpperCase().includes(this.filterPhrase.toUpperCase())
          }) :
          []
  }

  ngOnInit() { }

  handleFilter(value: string): void {
    this.filterPhrase = value;
  }
}
