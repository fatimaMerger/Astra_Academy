import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  teachersForm:FormGroup
  isUpdate:boolean = false;
  teacherId:any;
  constructor(private _fb:FormBuilder,private teacherService:TeacherService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.routerState);  
    this.route.params.subscribe(
      (params: Params) => {
        if(params['teacher_id']){
          this.teacherId = params['teacher_id'];
          console.log('from params :',this.teacherId)
          this.isUpdate = true;
          this.patchData();
        }  
      }
    );
    this.formInit(); 
    
  }
  patchData(){ 
    this.teacherService.getSingleTeacher(this.teacherId).subscribe((data)=>{
      this.teachersForm.patchValue(data)  
    })
  }
  
  formInit(){     
    this.teachersForm = this._fb.group({
      firstname: ['', Validators.required],
      lastname:['', Validators.required],
      email:['', Validators.required],
      designation:['', Validators.required],
      department:['', Validators.required],
    });
  }
  addteacher() 
  {
    console.log('called or not?')
    if(this.isUpdate){ //for update
      this.teacherService.updateTeacher(this.teachersForm.value,this.teacherId).subscribe((data)=>{
        console.log(data)
        alert('teacher updated successfully')
      });
  }else{  //for adding teacher.
    console.log('called or not? else') 
      this.teacherService.addTeacher(this.teachersForm.value).subscribe((data)=>{
        console.log(data)
        alert('teacher added successfully!')
  });
  }
  }


}
