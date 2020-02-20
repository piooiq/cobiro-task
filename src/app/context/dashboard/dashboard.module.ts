import { NgModule } from '@angular/core';
import { DashboardHomeComponent } from './home/dashboard-home.component';
import { FilterableListModule } from 'src/app/common/filterable-list/filterable-list.module';
import { CommonModule } from '@angular/common';
import { DashboardDetailsComponent } from './details/dahboard-details.component';
import { DashboardHttpService } from './services/dashboard-http.service';

@NgModule({
  imports: [
    CommonModule,
    FilterableListModule
  ],
  exports: [
    DashboardHomeComponent,
    DashboardDetailsComponent
  ],
  declarations: [
    DashboardHomeComponent,
    DashboardDetailsComponent
  ],
  providers: [
    DashboardHttpService
  ],
})
export class DashboardModule { }
