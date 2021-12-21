import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { StudentService } from 'src/app/service/student.service';
import { TeacherService } from 'src/app/service/teacher.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [
    StudentListComponent,
    DetailStudentComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,ReactiveFormsModule,
    NgxPaginationModule,
    SharedModuleModule
  ],
  providers:[StudentService,TeacherService]    
})
export class StudentModule { }
