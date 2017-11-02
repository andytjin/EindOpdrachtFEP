import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplaarOverzichtComponent } from './exemplaar-overzicht.component';

describe('ExemplaarOverzichtComponent', () => {
  let component: ExemplaarOverzichtComponent;
  let fixture: ComponentFixture<ExemplaarOverzichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemplaarOverzichtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemplaarOverzichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
