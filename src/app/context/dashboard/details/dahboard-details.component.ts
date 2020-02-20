import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterableListItem } from 'src/app/common/filterable-list/model/FilterableListItem';

@Component({
  selector: 'cobiro-dashboard-details',
  templateUrl: 'dashboard-details.component.html',
  styleUrls: ['dashboard-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DashboardDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  itemDetails: FilterableListItem;

  ngOnInit() {
    this.itemDetails = this.route.snapshot.data.item as FilterableListItem;
  }
}
