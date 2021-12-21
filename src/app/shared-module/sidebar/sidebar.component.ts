import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private auth:AuthServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    location.reload(); 
    this.auth.removeUser();
    this.router.navigate(['/login']) 
  }
  
  routeToProfile(){ 
    console.log('pressed')
    this.router.navigate(['/profile']) 
  } 
}
