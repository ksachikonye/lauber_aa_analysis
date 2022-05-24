import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OverviewComponent} from "./overview/overview.component";
import {HeatmapComponent} from "./heatmap/heatmap.component";
import {LinePlotsComponent} from "./line-plots/line-plots.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: 'overview',
    component: OverviewComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'line-plots',
    component: LinePlotsComponent,
  },
  {
    path: 'heatmap',
    component: HeatmapComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
