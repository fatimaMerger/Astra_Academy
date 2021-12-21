import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  logInForm:FormGroup
  userFound:boolean=false
  users:any;
  constructor( private _fb:FormBuilder , private router:Router, private logInService:LoginService, private auth:AuthServiceService) { }
 
  ngOnInit(): void {
    this.formInit()
    this.getUsers();
  }


  formInit(){     
    this.logInForm = this._fb.group({  
      username: ['', Validators.compose([Validators.required,Validators.minLength(6), Validators.maxLength(20)])],
      password:['', Validators.required],
   
    }
    
    );
  }
  logIn()
  {
    if(this.logInForm.valid){   
      // console.log('log in',this.logInForm.value);
      let firstname = this.logInForm.value.username.split(' ')[0];
      let lastname = this.logInForm.value.username.split(' ')[1];
      let data = { 
        firstname:firstname,  
        lastname:lastname,  
        password:this.logInForm.value.password 
      }

      const userExists = this.users.filter((x)=>{      
        if(x.firstname == data.firstname && x.lastname == data.lastname && x.password == data.password){  
      
          this.userFound = true;  
          console.log('the user matched with the form: ',x)
          localStorage.setItem('token','userToken')        
       
          localStorage.setItem('role',x.role)    
          localStorage.setItem('user',JSON.stringify(x)) 
          alert(`${x.role}'s account logged in successfully!`)
          if(x.role=='admin'){    
            // this.auth.isLoggedIn(true)       
            this.router.navigate(['/admin'])
          }else if(x.role=='teacher'){
            // this.auth.isLoggedIn(true)      
            this.router.navigate(['/assigned-students'])  

          }
          else if(x.role=='student'){
            // this.auth.isLoggedIn(true)       
            this.router.navigate(['/studentlist'])
          }
     
        }
      })
      if(this.userFound){
        // console.log('user Found . login successful',this.userFound)
      }else{
        alert("User Doesn't Exist. Please Sign Up")
      }
    }else{
      console.log('invalid submission');
    }
  }

  getUsers(){
    this.logInService.getUsers().subscribe(
      (res)=>{
        this.users = res;
      })
  }
}
