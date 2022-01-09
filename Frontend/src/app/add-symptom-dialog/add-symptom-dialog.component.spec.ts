import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSymptomDialogComponent } from './add-symptom-dialog.component';

describe('AddSymptomDialogComponent', () => {
  let component: AddSymptomDialogComponent;
  let fixture: ComponentFixture<AddSymptomDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSymptomDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSymptomDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
