import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cobiro-filter',
  templateUrl: 'filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FilterComponent implements OnInit {
  @Output() filter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }
}
