import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpacexLandingComponent } from './component/spacex-landing/spacex-landing.component';


const routes: Routes = [
  {
    path: '',
    component: SpacexLandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
