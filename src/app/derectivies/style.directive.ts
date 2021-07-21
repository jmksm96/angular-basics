import {AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
    selector: '[appStyle]'
})


export class StyleDirective implements AfterViewInit {

    @Input() color: string = 'red'

    constructor(private el: ElementRef, private r: Renderer2) {

    }

    ngAfterViewInit() {
        this.r.setStyle(this.el.nativeElement, 'color', this.color)
    }

    @HostListener('click', ['$event']) onClick(event: Event) {
        console.log(event)
    }

    @HostListener('mouseenter') onEnter() {
        this.r.setStyle(this.el.nativeElement, 'color', this.color)
    }

    @HostListener('mouseleave') onLeave() {
        this.r.setStyle(this.el.nativeElement, 'color', null)
    }
}



