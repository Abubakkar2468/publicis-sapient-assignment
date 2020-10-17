import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SpacexLandingComponent } from './component/spacex-landing/spacex-landing.component';


@NgModule({
  declarations: [SpacexLandingComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
