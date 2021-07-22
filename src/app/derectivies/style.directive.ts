import {AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
    selector: '[appStyle]'
})


export class StyleDirective implements AfterViewInit {

    @Input() color: string = 'red'
    @Input() dStyles!: { border?: string, borderRadius?: string, fontWeight?: string }

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
        this.r.setStyle(this.el.nativeElement, 'fontWeight', this.dStyles.fontWeight)
        this.r.setStyle(this.el.nativeElement, 'borderRadius', this.dStyles.borderRadius)
        this.r.setStyle(this.el.nativeElement, 'border', this.dStyles.border)
    }

    @HostListener('mouseleave') onLeave() {
        this.r.setStyle(this.el.nativeElement, 'color', null)
        this.r.setStyle(this.el.nativeElement, 'fontWeight', null)
        this.r.setStyle(this.el.nativeElement, 'borderRadius', null)
        this.r.setStyle(this.el.nativeElement, 'border', null)
    }
}



