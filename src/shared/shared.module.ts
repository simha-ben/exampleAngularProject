import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';


import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/login/login.component';

import { CamelPipe } from './pipes/camel.pipe';
import { FilterPipe } from './pipes/filter.pipe';

import { CorectPhoneDirective } from './directives/corect-phone.directive';
import { OnlyTextDirective } from './directives/only-text.directive';


import { DataService } from './services/data.service';
import { HttpServerService } from './services/http-server.service';




@NgModule({
  declarations: [
    FormComponent,
    LoginComponent,
    CorectPhoneDirective,
    OnlyTextDirective,
    CamelPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [DataService, HttpServerService],
  exports:[
    FormComponent,
    LoginComponent,
    CorectPhoneDirective,
    OnlyTextDirective,
    CamelPipe,
    FilterPipe
  ]
})
export class SharedModule { }
