import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

import { book } from 'src/program/models/Book';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
@Output() num2=new EventEmitter<book>();
  constructor() { 
   
  }

  ngOnInit() {
  }
 
 newbook=new book();
addnewbook(){
  this.num2.emit(this.newbook)
}

}
