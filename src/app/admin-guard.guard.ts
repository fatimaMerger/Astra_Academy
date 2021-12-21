import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './service/auth-service.service';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})


export class AdminGuardGuard implements CanActivate {
  isAdmin:boolean = false;
  constructor(private router:Router, private auth:AuthServiceService){
  }
  canActivate() {
    const isAdmin = this.auth.isAdminLoggedIn();
    if(isAdmin){
      return true;
    }else{
      this.router.navigate(['/login'])
      return false;
    }
  }

}
