import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent implements OnInit {
  teacherListArray: any
  isShown: boolean;

  constructor(private teacherService: TeacherService, private router: Router) { }

  p: any = 1;
  indexOfArr: any;
  data:any;
  ngOnInit(): void {
   this.isShown = false;
  
    this.getTeacherlist();
  }
  getTeacherlist() {
    this.teacherService.getTeacherList().subscribe((data: any[]) => {
      this.teacherListArray = data;
      console.log('teacherrr:', this.teacherListArray)

    })
  }
  routeToUpdate(i:any) {
    console.log('teacher ',i)
    this.router.navigateByUrl(`/admin/update-teacher/${i}`)
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
