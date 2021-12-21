import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  isLoggedIn:boolean = false;
  user:any;
  constructor(private router:Router, private auth:AuthServiceService){
  }
  canActivate()
   {
this.getUser()
    if(this.isLoggedIn){
      return true;
    }else{
      return false;
    }
  }
  getUser()
  {
   
    this.user = this.auth.getCurrentUser();
    console.log('im here',this.user)
    this.user = JSON.parse(this.user)
    if(this.user.firstname && this.user.lastname)
    {
      this.isLoggedIn = true;
    }else{
      this.isLoggedIn = false;
    }
  }
  
}
