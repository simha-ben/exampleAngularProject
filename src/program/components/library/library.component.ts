
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { DataService } from '../../../shared/services/data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { book } from 'src/program/models/Book';
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit 
{
  declare userName:string;
  constructor(private server:DataService,route:ActivatedRoute) {
    route.params.subscribe((user:Params)=>{
    this.userName=user["userName"];
    });
    this.allBook=this.server.getList();
    for (let index = 0; index < this.allBook.length; index++) {
      this.sumlendings+=this.allBook[index].sumOfLending;
      this.flag=false;
      this.age=0;
    }
   }
   book1=new book();
  
   getBook(bookName:string){
   
    var b=this.server.getBookByName(bookName);
    b.subscribe((result:book)=>{
    //  document.getElementById("book").innerHTML=`${result.auditor}`;
    this.book1=result;
    })

     console.log(b);
     
   }
  sumlendings:number=0;
  declare age:number;
  ngOnInit() {
  }
  allBook:book[];
  AddBook(b:book){ 
    for (let index = 0; index < this.allBook.length; index++) {
      if(  this.allBook[index].name==b.name)
      {
      this.allBook[index].sumOfLending++;
      this.sumlendings++;}
     //num= this.allBook[index].sumOfLending
    } 
   
  } 
 
  declare flag:boolean;
  addnewbook2(b1:book){
    this.allBook.push(b1);
    this.server.addNewBook(b1);
    
      this.flag=false;
    }
 
}
