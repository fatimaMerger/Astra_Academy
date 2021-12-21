import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.css']
})
export class DetailStudentComponent implements OnInit {
  @Output() isShown = new EventEmitter();
  @Input() detailInfo
  constructor() { }

  ngOnInit(): void {
    console.log('data passed from the parent',this.detailInfo)
  }
  onBackPress(){
    this.isShown.emit(false);  
    console.log('emit event fired')
  } 
}
