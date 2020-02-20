import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { DashboardHomeComponent } from 'src/app/context/dashboard/home/dashboard-home.component';
import { DashboardDetailsComponent } from 'src/app/context/dashboard/details/dahboard-details.component';
import { DashboardModule } from 'src/app/context/dashboard/dashboard.module';
import { DashboardDetailsResolver } from 'src/app/context/dashboard/services/dashboard-details.resolver';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
    {path: 'dashboard', component: DashboardHomeComponent},
    {path: 'details/:id', component: DashboardDetailsComponent, resolve: {
      item: DashboardDetailsResolver
    }}
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes), DashboardModule],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
