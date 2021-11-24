import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';
//import { read } from 'fs';

@Directive({
  selector: '[CorectPhone]'})
   


 export class CorectPhoneDirective {
  // @ Input () phoneNamber :string ;
  
  constructor(private elementRef: ElementRef,private  renderer: Renderer2) { }
  @HostListener('keyup') onKeyPress(){
       if(this.elementRef.nativeElement.value.length<9||this.elementRef.nativeElement.value.length>10)
      this. renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
      if(this.elementRef.nativeElement.value.length==9)
      this. renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#ffffff');}
   
   
}

