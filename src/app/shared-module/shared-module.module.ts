import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import {UserProfileComponent} from './user-profile/user-profile.component'
import { AuthServiceService } from '../service/auth-service.service';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    UserProfileComponent,
    SidebarComponent
  ],
  imports: [
    SharedRoutingModule,
    CommonModule
  ],
  providers:[
    AuthServiceService
  ],
  exports:[SidebarComponent]
})
export class SharedModuleModule { }
