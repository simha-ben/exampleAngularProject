import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { book } from 'src/program/models/Book';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Output() addLending=new EventEmitter<book>();
  constructor() {
this.age=0;
this.f=false;
  }
  ngOnInit() {
  }
 /*age:number;*/
 f:boolean;
 @Input() declare b:book;
 @Input() age:number;
  
   newlanding(){
   if(this.age<15 &&this.b.category=="adult")
      this.f=true;
    else this.addLending.emit(this.b);
 }
}

