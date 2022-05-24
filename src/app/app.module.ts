import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OverviewComponent } from './overview/overview.component';
import { LinePlotsComponent } from './line-plots/line-plots.component';
import { HeatmapComponent } from './heatmap/heatmap.component';
import { HomeComponent } from './home/home.component';
import { PcaPlotsComponent } from './overview/pca-plots/pca-plots.component';
import { SunburstPlotsComponent } from './overview/sunburst-plots/sunburst-plots.component';
import { PcaScalePlotComponent } from './overview/pca-plots/pca-scale-plot/pca-scale-plot.component';
import { PcaSubcatPlotComponent } from './overview/pca-plots/pca-subcat-plot/pca-subcat-plot.component';
import { PcaSubcatWlPlotComponent } from './overview/pca-plots/pca-subcat-wl-plot/pca-subcat-wl-plot.component';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    LinePlotsComponent,
    HeatmapComponent,
    HomeComponent,
    PcaPlotsComponent,
    SunburstPlotsComponent,
    PcaScalePlotComponent,
    PcaSubcatPlotComponent,
    PcaSubcatWlPlotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlotlyModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
