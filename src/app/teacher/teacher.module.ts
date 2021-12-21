import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';

import { TeacherService } from '../service/teacher.service';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AssignedStudentComponent } from './assigned-students/assigned-students.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
// import { DetailStudentComponent } from '../student/detail-student/detail-student.component';
import { StudentModule } from '../student/student.module';


@NgModule({
  declarations: [
      AssignedStudentComponent,
      // DetailStudentComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FormsModule,ReactiveFormsModule,
    NgxPaginationModule,
    SharedModuleModule,
    StudentModule
    
  ],
  providers:[TeacherService]    
})
export class TeacherModule { }
