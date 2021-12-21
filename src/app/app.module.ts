import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthServiceService } from './service/auth-service.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { SharedModuleModule } from './shared-module/shared-module.module';


@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    LoginModule,
    AdminModule,
    StudentModule,
    TeacherModule,
    HttpClientModule,
    SharedModuleModule
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent],
})
export class AppModule { }
