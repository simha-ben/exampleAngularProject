import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProgramVM } from 'src/program/models/Program';
import { DataService } from 'src/shared/services/data.service';

@Component({
  selector: 'app-all-programs',
  templateUrl: './all-programs.component.html',
  styleUrls: ['./all-programs.component.css']
})
export class AllProgramsComponent implements OnInit {

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.allPrograms = this.ds.getAllPrograms()
    //.subscribe(res=> this.allPrograms = res);
    //debugger;
  }
  allPrograms!: Observable<any>;
  onProgramAdded(p: ProgramVM) {
    this.allPrograms = this.ds.getAllPrograms()
  }
}
