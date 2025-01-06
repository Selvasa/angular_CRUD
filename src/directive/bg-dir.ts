import { Directive, ElementRef, HostBinding, HostListener, inject, Input, input, Renderer2, signal } from "@angular/core";

@Directive({
    selector: '[bgDir]',
    standalone: true
})
export class BGDir {
    private ref = inject(ElementRef);
    private rend = inject(Renderer2);
    @Input() inputs = ''

    @HostBinding('style.backgroundColor') bg: string = '';
   

    @HostListener('mouseenter') clickfun() {
        this.rend.setStyle(this.ref.nativeElement, 'color', 'red');
        this.bg = this.inputs

    }

    @HostListener('mouseleave') dbFun() {
        this.rend.setStyle(this.ref.nativeElement, 'color', '');
        this.bg=''
    }

}