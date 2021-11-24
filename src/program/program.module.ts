import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AboutComponent } from './components/about/about.component';
import { LibraryComponent } from './components/library/library.component';
import { BookComponent } from './components/book/book.component';
import { NewBookComponent } from './components/new-book/new-book.component';

import {HttpClientModule} from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import{ProgramRoutingModule} from './program-routing.module'
import{RouterModule, Route}from '@angular/router';
//import { count } from 'console';




@NgModule({
  declarations: [
    AboutComponent,
    BookComponent,
    LibraryComponent,
    NewBookComponent
  ],
  imports: [
    BrowserModule,
    ProgramRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  exports:[
    AboutComponent,
    BookComponent,
    LibraryComponent,
    NewBookComponent
  ],
 
})
export class programModule { }
