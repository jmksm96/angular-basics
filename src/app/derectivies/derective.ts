import {AfterViewInit, Directive, ElementRef, Input, Renderer2} from "@angular/core";

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective implements AfterViewInit{
  @Input() color: string =  'red';

  constructor(private el: ElementRef, private r: Renderer2) {

  }

  ngAfterViewInit() {
    this.r.setStyle(this.el.nativeElement, 'color', this.color);
  }
}