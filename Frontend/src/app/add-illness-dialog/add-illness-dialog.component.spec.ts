import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIllnessDialogComponent } from './add-illness-dialog.component';

describe('AddIllnessDialogComponent', () => {
  let component: AddIllnessDialogComponent;
  let fixture: ComponentFixture<AddIllnessDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIllnessDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIllnessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
