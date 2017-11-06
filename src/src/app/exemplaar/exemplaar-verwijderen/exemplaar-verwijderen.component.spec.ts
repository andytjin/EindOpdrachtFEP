import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplaarVerwijderenComponent } from './exemplaar-verwijderen.component';

describe('ExemplaarVerwijderenComponent', () => {
  let component: ExemplaarVerwijderenComponent;
  let fixture: ComponentFixture<ExemplaarVerwijderenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemplaarVerwijderenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemplaarVerwijderenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
