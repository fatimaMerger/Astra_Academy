import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LogInComponent } from './login/log-in/log-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { DetailStudentComponent } from './student/detail-student/detail-student.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { AdminGuardGuard } from './admin-guard.guard';
import { TeacherGuardGuard } from './teacher-guard.guard';
import { AssignedStudentComponent } from './teacher/assigned-students/assigned-students.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { StudentGuardGuard } from './student-guard.guard';
import { AuthGuardGuard } from './auth-guard.guard';

const routes: Routes = [ 
  {path:'',component:LogInComponent},
  {path:"login", component:LogInComponent},
  {path:"signup", component:SignUpComponent},
  {path:"studentlist", component:StudentListComponent,canActivate:[StudentGuardGuard]},
  {path:"details-student",component:DetailStudentComponent}, 
  {path:"assigned-students", component:AssignedStudentComponent,canActivate:[TeacherGuardGuard]},
  {path:'admin', loadChildren: () =>     
  import('./admin/admin.module').then((m) => m.AdminModule),canActivate:[AdminGuardGuard]},
  
  {path:'profile', loadChildren: () =>     
  import('./shared-module/shared-module.module').then((m) => m.SharedModuleModule ), canActivate:[AuthGuardGuard]},
   {path:'**',component:NotfoundComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
