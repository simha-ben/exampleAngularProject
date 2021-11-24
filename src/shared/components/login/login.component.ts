import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {
    this.name="";
   }
@Input()  declare f:string;
  ngOnInit(): void{
   
  } name:String;

}
