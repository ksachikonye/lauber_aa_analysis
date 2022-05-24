import { Component, OnInit } from '@angular/core';
import {PCAScaleService} from "../../_services/pca-scale.service";

@Component({
  selector: 'app-pca-scale-plot',
  templateUrl: './pca-scale-plot.component.html',
  styleUrls: ['./pca-scale-plot.component.css']
})
export class PcaScalePlotComponent implements OnInit {
  pcaScaleData: any;

  public graph: any = {
    data: [],
    layout: {width: 1000, height: 400, title: 'PCA Scale Plot'}
  };

  constructor(private pcaservice : PCAScaleService) {
    this.pcaScaleData = [];
  }

  ngOnInit(): void {
    this.getData();
  }

  public async getData(): Promise<void> {
    this.pcaScaleData = await this.pcaservice.getPCAscale();


  }

}
