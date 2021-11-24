import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProgramVM } from 'src/program/models/Program';
import { DataService } from 'src/shared/services/data.service';

@Component({
  selector: 'app-new-program',
  templateUrl: './new-program.component.html',
  styleUrls: ['./new-program.component.css']
})
export class NewProgramComponent implements OnInit {

  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }
  newProgram :ProgramVM=new ProgramVM();
  @Output() programAdded:EventEmitter<ProgramVM> = new EventEmitter<ProgramVM>()
  send(){
    this.ds.addNewProgram(this.newProgram);
    this.programAdded.emit(this.newProgram);
  }

}
