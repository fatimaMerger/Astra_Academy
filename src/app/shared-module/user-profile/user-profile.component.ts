import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user:any;
  constructor(private auth: AuthServiceService) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo(){
    this.user = this.auth.getCurrentUser();
    console.log('user is:',JSON.parse(this.user))   
     
    this.user=JSON.parse(this.user)
  }

}
