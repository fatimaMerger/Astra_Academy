import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/service/student.service';


@Component({
  selector: 'app-assigned-students',
  templateUrl: './assigned-students.component.html',
  styleUrls: ['./assigned-students.component.css']
})
export class AssignedStudentComponent implements OnInit {
    studentListArray:any
    teacherListArray:any;
    newArray = [];
    p: any = 1;
    data:any;
    isShown: boolean =false;
  constructor(private studentService:StudentService,private router:Router) { }
  ngOnInit(): void {
    this.isShown = false;
    this.getStudentList()
  }
	getStudentList(){
    this.studentService.getStudentList().subscribe((data: any[])=>{
      console.log('hello',data); 
      this. studentListArray = data;
      this.getTeacherInfo();
  })
  }
  routeToUpdate(i){   
    console.log('id being passed',i)
    this.router.navigateByUrl(`/add-student/${i}`)
  }

  
  ChangePage(e) {
    this.p = e;
  }

  getAbsoluteIndex(p, i) {
    if (this.p > 1) {
      return (10 * (this.p - 1) + i);
    } else {
      return (i)
    }
  }
  displaydetails(dataToBePassed:any)
  {
    this.data = dataToBePassed;
    // this.data=JSON.parse(this.data)
    console.log("agaya", this.data)
    this.isShown = !this.isShown;
    console.log('isShownnnnnnnnnnnnnn',this.isShown)

  }

  doSomething(isShow: boolean):void {
    console.log('Go back ', isShow);
    this.isShown = isShow;
}

getTeacherInfo(){
  console.log('got info here')
  const teacher:any = JSON.parse(localStorage.getItem('user'))
  // console.log('teacher is:',teacher.firstname, teacher.lastname)
  //  to get assigned students for a teacher.
  console.log('data in the array:',this.studentListArray)

  const studentsArray = this.studentListArray.filter((x)=>{
    if(x.teachername == teacher.firstname){
      this.newArray.push(x)
      console.log('matched :',x.teachername , 'with : ',teacher.firstname)
    }
  })
  console.log('newArray inside assing students:   ',this.newArray)

}
}