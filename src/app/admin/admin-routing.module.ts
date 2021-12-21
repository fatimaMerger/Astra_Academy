import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {AddTeacherComponent} from './add-teacher/add-teacher.component'
import { StudentListComponent } from './student-list/student-list.component';
import { ListTeacherComponent } from './list-teacher/list-teacher.component';

const routes: Routes = [
  {
    path:'',       
    component:AdminDashboardComponent
  },
  {
    path:'add-student',    
    component:AddStudentComponent
  },
  {
    path:'update-student/:student_id',
    component:AddStudentComponent
  },
  {
    path:'students',
    component:StudentListComponent
  },
  {
    path:'teachers',
    component:ListTeacherComponent
  },
  {
    path:'update-teacher/:teacher_id',
    component:AddTeacherComponent
  },
  {
    path:'add-teacher',
    component:AddTeacherComponent
  },
  {
    path:'students',
    component:StudentListComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
