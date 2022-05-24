import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunburstPlotsComponent } from './sunburst-plots.component';

describe('SunburstPlotsComponent', () => {
  let component: SunburstPlotsComponent;
  let fixture: ComponentFixture<SunburstPlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunburstPlotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SunburstPlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
