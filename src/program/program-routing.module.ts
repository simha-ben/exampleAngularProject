import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from 'src/shared/components/form/form.component';
import { LoginComponent } from 'src/shared/components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { AllProgramsComponent } from './components/all-programs/all-programs.component';
import { LibraryComponent } from './components/library/library.component';
import { NewBookComponent } from './components/new-book/new-book.component';
import { NewProgramComponent } from './components/new-program/new-program.component';



const routes: Routes = [
  {path:"Library/:userName",component:LibraryComponent },
  {path:"NewBook",component:NewBookComponent},
  {path:"Form",component:FormComponent,children:[
    {path:"About",component:AboutComponent}
  ]},
  {path:"About",component:AboutComponent},
  {path:"login",component:LoginComponent},
  {path:"NewProgram",component:NewProgramComponent},
  {path:"AllProgram",component:AllProgramsComponent},
    {path:"",component:LoginComponent}
  ]
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProgramRoutingModule { }
