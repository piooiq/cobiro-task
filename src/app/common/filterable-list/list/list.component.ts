import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges, ChangeDetectorRef, } from '@angular/core';
import { ListItemIndented } from '../model/ListItemIndented';

@Component({
  selector: 'cobiro-list',
  templateUrl: 'list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ListComponent implements OnInit, OnChanges {
  @Input() data: Array<ListItemIndented>;
  @Output() selectItem: EventEmitter<string> = new EventEmitter<string>();

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.detectChanges(this.changeDetector);
  }

  trackByFn(index: number, item: ListItemIndented): number {
    return item.id;
  }

  private detectChanges(detector: ChangeDetectorRef): void {
    if (!detector['destroyed']) {
      detector.detectChanges();
    }
  }

}
