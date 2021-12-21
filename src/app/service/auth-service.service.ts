import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isAdmin:boolean = false;
  isTeacher:boolean = false;
  isStudent:boolean = false;
  IsloggedIn:boolean=false

  constructor() { }

  isLoggedIn(bool)
  {
   if(bool)
   {
     this.IsloggedIn=bool
     return true;
   }
   else
   {
    this.IsloggedIn=bool
     return false
   }
  }


  getUserRole(){
    return localStorage.getItem('role')
   
  }

  getCurrentUser(){
    return localStorage.getItem('user')
  }
  removeUser(){
    localStorage.removeItem("token")
    localStorage.removeItem('user')
    localStorage.removeItem('role')
  }

  isAdminLoggedIn(){
    if(localStorage.getItem('role') == 'admin'){
      this.isAdmin = true;
      return true;
    }
  }

  isTeacherLoggedIn(){
    if(localStorage.getItem('role') == 'teacher'){
      this.isTeacher = true;
      return true;
    }
  }
  isStudentLoggedIn(){
    if(localStorage.getItem('role') == 'student'){
      this.isStudent = true;
      return true;
    }
  }
}
