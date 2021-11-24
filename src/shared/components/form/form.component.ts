import { Component, OnInit } from '@angular/core';
import { User } from 'src/program/models/User';
import { DataService } from '../../services/data.service';
import { newUser } from 'src/program/models/newUser'; 

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private server:DataService) {
    this.OurUser = new User();
    this.listUsers=[];
    this.OurUser = {
      id: 0, name: { firstName: "", LastName: "" }, email: "", phone: "", address: "",
      password: { pwd: "", confirmPwd: "" }, gender: ""
    };
    this.newUser={name:""};
  }

  ngOnInit(): void {
  }
  OurUser: User;
  listUsers: User[];
newUser:newUser;
  save() {
    this.listUsers.push(this.OurUser)
    const ele = document.getElementById("123");
    //alert(this.listUsers[0].name);
    //ele && ele.innerText =this.listUsers[0].name.LastName+" "+this.listUsers[0].name.firstName+" ";
    this.newUser.name=this.OurUser.name.firstName;
    this.server.addNewClient(this.newUser);


  }



}
