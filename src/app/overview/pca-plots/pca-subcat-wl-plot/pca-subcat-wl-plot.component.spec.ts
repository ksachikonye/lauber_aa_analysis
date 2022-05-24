import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcaSubcatWlPlotComponent } from './pca-subcat-wl-plot.component';

describe('PcaSubcatWlPlotComponent', () => {
  let component: PcaSubcatWlPlotComponent;
  let fixture: ComponentFixture<PcaSubcatWlPlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcaSubcatWlPlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcaSubcatWlPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
