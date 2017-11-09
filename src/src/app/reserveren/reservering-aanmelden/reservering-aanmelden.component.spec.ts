import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveringAanmeldenComponent } from './reservering-aanmelden.component';

describe('ReserveringAanmeldenComponent', () => {
  let component: ReserveringAanmeldenComponent;
  let fixture: ComponentFixture<ReserveringAanmeldenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveringAanmeldenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveringAanmeldenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
