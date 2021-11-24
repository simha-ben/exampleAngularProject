import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[onlyText]'
})
export class OnlyTextDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  s!: string;
  @HostListener('nambers') onkeypress() {
    this.s = this.elementRef.nativeElement.value;
    if (!parseInt(this.s[this.s.length - 1]) && this.s[this.s.length - 1] != "0")
      this.elementRef.nativeElement.setValue = "";
    // this.renderer.setValue(this.elementRef.nativeElement.value,"only nambers!!!") ;

  }

}
