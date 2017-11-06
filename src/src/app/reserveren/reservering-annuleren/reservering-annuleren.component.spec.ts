import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveringAnnulerenComponent } from './reservering-annuleren.component';

describe('ReserveringAnnulerenComponent', () => {
  let component: ReserveringAnnulerenComponent;
  let fixture: ComponentFixture<ReserveringAnnulerenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveringAnnulerenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveringAnnulerenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
