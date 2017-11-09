import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplaarToevoegenComponent } from './exemplaar-toevoegen.component';

describe('ExemplaarToevoegenComponent', () => {
  let component: ExemplaarToevoegenComponent;
  let fixture: ComponentFixture<ExemplaarToevoegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemplaarToevoegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemplaarToevoegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
