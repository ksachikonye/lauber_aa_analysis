import { Component, OnInit } from '@angular/core';
import {PcaSubcatService} from "../../_services/pca-subcat.service";

@Component({
  selector: 'app-pca-subcat-plot',
  templateUrl: './pca-subcat-plot.component.html',
  styleUrls: ['./pca-subcat-plot.component.css']
})
export class PcaSubcatPlotComponent implements OnInit {
  pcaSubcatData: any;

  public graph: any = {
    data: [],
    layout: {width: 600, height: 400, title: 'PCA Scale Plot'}
  };

  constructor(private subctservice : PcaSubcatService) {
    this.pcaSubcatData = [];
  }

  ngOnInit(): void {
    this.getData();
  }

  public async getData(): Promise<void> {
    this.pcaSubcatData = await this.subctservice.getPcaSubCut();


  }
}
