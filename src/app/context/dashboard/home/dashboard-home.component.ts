import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterableListItem } from 'src/app/common/filterable-list/model/FilterableListItem';
import { DashboardHttpService } from '../services/dashboard-http.service';

@Component({
  selector: 'cobiro-dashboard-home',
  templateUrl: 'dashboard-home.component.html',
  styleUrls: ['dashboard-home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DashboardHomeComponent implements OnInit {
  constructor(private readonly dashboardHttpService: DashboardHttpService) { }

  items$: Observable<Array<FilterableListItem>>;

  ngOnInit() {
    this.items$ = this.dashboardHttpService.getItems();
  }
}
