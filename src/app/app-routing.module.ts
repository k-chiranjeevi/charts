import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendsComponent } from './components/trends/trends.component';
import { DashboardsComponent } from './components/dashboards/dashboards.component';

const routes: Routes = [
  {path:'charts', component: TrendsComponent},
  {path: 'dashboards', component: DashboardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
