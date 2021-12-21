import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './service/auth-service.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private auth:AuthServiceService,private router:Router){

  }
  title = 'astra';
  isAdmin:boolean =false;
  isTeacher:boolean = false;
  isStudent:boolean = false;
  role:any;
 
  ngOnInit(): void {
    

  }

  
  

}









 



 

