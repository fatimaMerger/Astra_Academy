import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-detail-teacher',
  templateUrl: './detail-teacher.component.html',
  styleUrls: ['./detail-teacher.component.css']
})
export class DetailTeacherComponent implements OnInit {
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
