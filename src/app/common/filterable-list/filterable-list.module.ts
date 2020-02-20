import { NgModule } from '@angular/core';
import { FilterComponent } from './filter/filter.component';
import { ListComponent } from './list/list.component';
import { FilterableListComponent } from './filterable-list.component';
import { CommonModule } from '@angular/common';
import { OrderPipe } from './pipe/order.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FilterableListComponent
  ],
  declarations: [
    FilterComponent,
    ListComponent,
    FilterableListComponent,
    OrderPipe
  ],
  providers: [],
})
export class FilterableListModule { }
