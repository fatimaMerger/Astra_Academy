import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedStudentComponent } from './assigned-students.component';

describe('StudentListComponent', () => {
  let component: AssignedStudentComponent;
  let fixture: ComponentFixture<AssignedStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
