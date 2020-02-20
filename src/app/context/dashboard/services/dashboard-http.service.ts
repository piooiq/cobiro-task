import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { FilterableListItem } from 'src/app/common/filterable-list/model/FilterableListItem';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DashboardHttpService {

  constructor(private readonly http: HttpClient) {}

  public getItems(): Observable<Array<FilterableListItem>> {
    return this.http.get<Array<FilterableListItem>>('http://localhost:3000/items');
  }
  public getItemById(id: number): Observable<FilterableListItem> {
    return this.http.get<FilterableListItem>(`http://localhost:3000/items/${id}`);
  }

}
