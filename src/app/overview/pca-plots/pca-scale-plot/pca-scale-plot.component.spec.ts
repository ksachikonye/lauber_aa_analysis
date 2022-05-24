import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcaScalePlotComponent } from './pca-scale-plot.component';

describe('PcaScalePlotComponent', () => {
  let component: PcaScalePlotComponent;
  let fixture: ComponentFixture<PcaScalePlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcaScalePlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcaScalePlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
