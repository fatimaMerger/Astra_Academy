import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/service/student.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
    studentListArray:any
    teacherListArray:any;
    p: any = 1;
    data:any;
    isShown: boolean;
  constructor(private studentService:StudentService,private router:Router,) { }

  ngOnInit(): void {
    this.isShown = false;
    this.getStudentList()
  }
	getStudentList(){
   
    this.studentService.getStudentList().subscribe((data: any[])=>{
      console.log('hello',data); 
      this. studentListArray = data;
   
  })

  }
  routeToUpdate(i){   
    console.log('id being passed',i)
    this.router.navigateByUrl(`/admin/update-student/${i}`)
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
    this.isShown = !this.isShown;
  }

  doSomething(isShow: boolean):void {
    console.log('Go back ', isShow);
    this.isShown = isShow;
}
}