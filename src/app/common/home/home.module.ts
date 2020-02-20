import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SideBarModule } from '../side-bar/side-bar.module';
import { TopBarModule } from '../top-bar/top-bar.module';
import { HomeRoutingModule } from './home-routing.module';
import { DashboardDetailsResolver } from 'src/app/context/dashboard/services/dashboard-details.resolver';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SideBarModule,
    TopBarModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    DashboardDetailsResolver
  ]
})
export class HomeModule { }
