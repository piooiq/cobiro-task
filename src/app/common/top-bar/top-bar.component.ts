import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cobiro-top-bar',
  templateUrl: 'top-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TopBarComponent implements OnInit {
  @Output() mobileToggle: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  ngOnInit() { }
}
