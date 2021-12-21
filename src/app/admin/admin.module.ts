import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentService } from '../service/student.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeacherService } from 'src/app/service/teacher.service';
import {AddTeacherComponent} from './add-teacher/add-teacher.component'
import { StudentListComponent } from './student-list/student-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {ListTeacherComponent} from  './list-teacher/list-teacher.component';
import { DetailTeacherComponent } from './detail-teacher/detail-teacher.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
@NgModule({
  declarations: [  
    AdminDashboardComponent,
    AddStudentComponent,
    AddTeacherComponent,
    StudentListComponent,
    ListTeacherComponent,
    DetailTeacherComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModuleModule
  ],
  providers: [StudentService,TeacherService]
})
export class AdminModule { }
