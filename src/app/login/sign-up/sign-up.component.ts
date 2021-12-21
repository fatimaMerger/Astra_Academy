import { Component, OnInit } from '@angular/core';
import {  FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/service/signup.service';
import { TeacherService } from 'src/app/service/teacher.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm:FormGroup
  SignUpUser:any;
  userFound:boolean=false;
  constructor( private _fb:FormBuilder, private signupUserService:SignupService , private router:Router, private teacherService:TeacherService) { }

  ngOnInit(): void {
   this.formInit()
   this.getUsers()
  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
 
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  formInit(){     
    this. signUpForm = this._fb.group({  
       firstname: ['', Validators.compose([Validators.required,Validators.minLength(2), Validators.maxLength(20)])],
       lastname: ['', Validators.compose([Validators.required,Validators.minLength(3), Validators.maxLength(20)])],
       role: ['', Validators.compose([Validators.required,Validators.minLength(3), Validators.maxLength(20)])],
       email: ['', Validators.compose([Validators.required,Validators.email])],
      password:['', Validators.required],
      phoneNo: ['', [ Validators.required,
        Validators.pattern("^[0-9]*$"),
     Validators.maxLength(11)]],
      confpassword:['', Validators.required],
      acceptTerms:[false, Validators.requiredTrue] 
    }
    
    );
  }
  getUsers() {
    this.signupUserService.getUsers().subscribe((data: any[]) => {
      this.SignUpUser = data;
      console.log('user here:', this.SignUpUser)
    })
  }
 addUser(data)
 {
  this.signupUserService.addUser(data).subscribe((data2)=>{
    console.log('response',data2)
    localStorage.setItem('role',this.signUpForm.value.role)
  });
  if(this.signUpForm.value.role =='teacher'){
    // later we will have to assign students to the teacher. 
    // that's why I am adding the person to teachers as well.
    //  becuase the adduser call only adds him/her to the users. 
    // not the teachers. 
    this.teacherService.addTeacher(data).subscribe((teacher)=>{    
      console.log('added to teachers as well',teacher)
      alert('user Created')
      this.router.navigateByUrl('/login') 
    })
  }else if(this.signUpForm.value.role =='admin'){
    alert('admin created successfully!')
    this.router.navigateByUrl('/login') 

  }else if(this.signUpForm.value.role =='student'){
    alert('student created successfully!')
    this.router.navigateByUrl('/login') 
  }
  }
  
  signUp(){ 
    if(this.signUpForm.valid){ 
      console.log('form is valid')

      if(this.signUpForm.value.password == this.signUpForm.value.confpassword){
        const user:any = this.SignUpUser.filter((x)=>{
          if(x.email === this.signUpForm.value.email && x.password === this.signUpForm.value.password && x.role === this.signUpForm.value.role){
            console.log('user found',x)
            alert('Your Account Already Exists. Please Login') 
            this.userFound = true;
          }
        })
        if(this.userFound){
          this.router.navigateByUrl('/login') 
     
        }else{
          
          //  console.log('add the user here')
          let data = {
            firstname:this.signUpForm.value.firstname,
            lastname:this.signUpForm.value.lastname,
            role:this.signUpForm.value.role,
            email:this.signUpForm.value.email,
            password:this.signUpForm.value.password,
            phoneNo:this.signUpForm.value.phoneNo,
          }
             this.addUser(data)
        }

      }else{
        alert("passwords don't match !")
        // this.signUpForm.reset();
      }
    }else{
      console.log('form is not valid',this.signUpForm)
      alert("form is not valid")
     
    }
  }

 
 
}
