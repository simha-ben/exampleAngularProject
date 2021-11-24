import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { programModule } from 'src/program/program.module';
import { ProgramRoutingModule } from 'src/program/program-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    programModule,
    ProgramRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
