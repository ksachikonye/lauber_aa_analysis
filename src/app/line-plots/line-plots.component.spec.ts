import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinePlotsComponent } from './line-plots.component';

describe('LinePlotsComponent', () => {
  let component: LinePlotsComponent;
  let fixture: ComponentFixture<LinePlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinePlotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinePlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
