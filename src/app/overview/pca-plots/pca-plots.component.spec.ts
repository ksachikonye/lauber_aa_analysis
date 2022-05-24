import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcaPlotsComponent } from './pca-plots.component';

describe('PcaPlotsComponent', () => {
  let component: PcaPlotsComponent;
  let fixture: ComponentFixture<PcaPlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcaPlotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcaPlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
