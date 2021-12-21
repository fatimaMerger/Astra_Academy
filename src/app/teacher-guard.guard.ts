import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './service/auth-service.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TeacherGuardGuard implements CanActivate {
  constructor(private router:Router, private auth:AuthServiceService){
  }
  canActivate(
    ){

    const isTeacher = this.auth.isTeacherLoggedIn();
    if(isTeacher){
      return true;
    }else{
      this.router.navigate(['/login'])
      return false;
    }
  }
  
}
