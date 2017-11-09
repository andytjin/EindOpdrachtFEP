import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveringOverzichtComponent } from './reservering-overzicht.component';

describe('ReserveringOverzichtComponent', () => {
  let component: ReserveringOverzichtComponent;
  let fixture: ComponentFixture<ReserveringOverzichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveringOverzichtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveringOverzichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
