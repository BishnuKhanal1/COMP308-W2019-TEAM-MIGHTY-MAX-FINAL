import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveySiteComponent } from './survey-site.component';

describe('SurveySiteComponent', () => {
  let component: SurveySiteComponent;
  let fixture: ComponentFixture<SurveySiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveySiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveySiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
