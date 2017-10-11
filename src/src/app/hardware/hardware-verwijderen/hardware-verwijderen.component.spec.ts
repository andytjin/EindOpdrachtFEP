import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareVerwijderenComponent } from './hardware-verwijderen.component';

describe('HardwareVerwijderenComponent', () => {
  let component: HardwareVerwijderenComponent;
  let fixture: ComponentFixture<HardwareVerwijderenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardwareVerwijderenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwareVerwijderenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
