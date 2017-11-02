import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplaarWijzigenComponent } from './exemplaar-wijzigen.component';

describe('ExemplaarWijzigenComponent', () => {
  let component: ExemplaarWijzigenComponent;
  let fixture: ComponentFixture<ExemplaarWijzigenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemplaarWijzigenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemplaarWijzigenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
