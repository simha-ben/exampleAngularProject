import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { HttpServerService } from './http-server.service';
import { book } from 'src/program/models/Book';
import { newUser } from 'src/program/models/newUser';

//import { pbkdf2Sync } from 'crypto';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private HttpClientService:HttpServerService) { 
this.allBook=[];
    var obs=this.HttpClientService.get("book");
    obs.subscribe((result)=>{
      console.log(result);
     // this.allBook=result;

      result.forEach((element: book)  => {
        this.allBook.push(element);
      });
    })

    //this.allBook=[{name:"isterak",auditor:"m.keinan",category :"children",publishingYear:2000,sumOfLending:5},
    //{name:"comixaba",auditor:"saba",category :"Comics",publishingYear:1990,sumOfLending:6},
    //{name:"shimchaLoShachchno",auditor:"m.keinan",category :"adult",publishingYear:2020,sumOfLending:2},
    //{name:"korimLi",auditor:"valder",category :"children",publishingYear:2010,sumOfLending:10}]
  }
  getBookByName(name:string){
    var obs1= this.HttpClientService.get("book?name="+name);
    return obs1;
    
    
  }
  getAllBookByAuditor(name:string){
    var obs2= this.HttpClientService.get("book?auditor="+name);
    obs2.subscribe((result)=>{
      return result;
    });
  }
  getList():book[]{
    return this.allBook;

  }
   allBook:book[];
  addNewBook(book:book){
    this.HttpClientService.post("book",book).subscribe(()=>
    {
      alert("הספר נוסף בהצלחה");
    },()=>{
      alert("הספר אינו נכנס למערכת");
    });
  }
  addNewClient(user:newUser){
    // this.allBook.push(book);
     this.HttpClientService.post("User",user).subscribe(()=>{
       alert("הלקוח נוסף בהצלחה");
     },()=>{
       alert("הלקוח אינו נמצא במערכת");
     });
     
   }



}
