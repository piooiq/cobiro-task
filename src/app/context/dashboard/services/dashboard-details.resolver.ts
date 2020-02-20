import { Injectable } from "@angular/core";
import { FilterableListItem } from 'src/app/common/filterable-list/model/FilterableListItem';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DashboardHttpService } from './dashboard-http.service';

@Injectable()
export class DashboardDetailsResolver implements Resolve<FilterableListItem> {

  constructor(private readonly dashboardHttpService: DashboardHttpService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FilterableListItem> {
    const id = route.params['id'];
    return this.dashboardHttpService.getItemById(id);
  }
}
