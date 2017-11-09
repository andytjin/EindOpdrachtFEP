import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareOverzichtComponent } from './hardware-overzicht.component';

describe('HardwareOverzichtComponent', () => {
  let component: HardwareOverzichtComponent;
  let fixture: ComponentFixture<HardwareOverzichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardwareOverzichtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwareOverzichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
