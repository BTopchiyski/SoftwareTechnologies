import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorHumanBodyComponent } from './doctor-human-body.component';

describe('DoctorHumanBodyComponent', () => {
  let component: DoctorHumanBodyComponent;
  let fixture: ComponentFixture<DoctorHumanBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorHumanBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorHumanBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
