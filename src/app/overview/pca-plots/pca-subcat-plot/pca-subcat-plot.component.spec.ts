import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcaSubcatPlotComponent } from './pca-subcat-plot.component';

describe('PcaSubcatPlotComponent', () => {
  let component: PcaSubcatPlotComponent;
  let fixture: ComponentFixture<PcaSubcatPlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcaSubcatPlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcaSubcatPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
