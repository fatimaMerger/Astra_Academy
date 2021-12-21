import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { StudentService } from 'src/app/service/student.service';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  adminStudentsForm: FormGroup
  teachersArray:any;
  newArray = [];
  teacherSelected:any;
  isClicked:boolean = false;
  isUpdate:boolean = false;
  studentId:any;
  constructor(private router: Router, private _fb:FormBuilder, private studentService: StudentService , private teacherService:TeacherService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        if(params['student_id']){
          this.studentId = params['student_id'];
          console.log('from params :',this.studentId)
          this.isUpdate = true;
          this.patchData();
        }  
      }
    );
    this.formInit();
    this.getTeachers();
    // console.log(this.teachersArray)
  }

  patchData(){
    this.studentService.getSingleStudent(this.studentId).subscribe((data)=>{
      console.log('got the student: ',data)
      this.adminStudentsForm.patchValue(data)
    })
  }

  formInit(){       // Initialize the form, this the first step for creating a form.
    this.adminStudentsForm = this._fb.group({
      firstname: ['', Validators.required],
      lastname:['', Validators.required],
      teachername:['', Validators.required],
      class:['', Validators.required],
      section:['', Validators.required],
      department:['', Validators.required],
    });
  }
  addStudent(){
    if(this.isUpdate){
        this.studentService.updateStudent(this.adminStudentsForm.value,this.studentId).subscribe((data)=>{
          console.log(data)
          alert('student upated successfully!')
        });
    }
    else{
      if(this.adminStudentsForm.valid){
        let data  = {
          firstname: this.adminStudentsForm.value.firstname,
          lastname:this.adminStudentsForm.value.lastname,
          teacherID: this.teacherSelected.teacherID,
          class:this.adminStudentsForm.value.class,
          section: this.adminStudentsForm.value.section,
          department: this.adminStudentsForm.value.department
        }
            this.studentService.addStudent(data).subscribe((data)=>{
              console.log(data)
              alert('student added successful!')
              this.adminStudentsForm.reset();
        });
      }else{
        alert('Please enter all fields! ')
      }
    }
  }


  getTeachers(){
    this.teacherService.getTeacherList().subscribe((teacher)=>{
      this.teachersArray = teacher;
      // console.log(this.teachersArray)
    })
  }

  autocomplete(e){
   
    this.isClicked = true; 
    this.newArray = [];   // initialization.
    const el = this.teachersArray.filter((x) => {        
      let item = x.firstname.startsWith(e.target.value) ? x : '';    
      this.newArray.push(item); 
      this.newArray = this.newArray.filter((x) => {
        if (x.firstname != '') {
         
          return x; 
        }
      });  
      return item; 
      // 1. admin can add teaachers.
    });
    console.log('teachers after the operation',this.newArray)
  }
  selectedTeacher(teacher){
    this.isClicked = false;
    this.teacherSelected = teacher;   
    this.adminStudentsForm.controls.teachername.setValue(this.teacherSelected.firstname)   
    console.log(teacher)
  }

}
