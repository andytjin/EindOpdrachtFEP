import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareWijzigenComponent } from './hardware-wijzigen.component';

describe('HardwareWijzigenComponent', () => {
  let component: HardwareWijzigenComponent;
  let fixture: ComponentFixture<HardwareWijzigenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardwareWijzigenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwareWijzigenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
