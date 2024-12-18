import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[custDir]',
    standalone: true
})
export default class CustDir {
    @Input() col = 'gold';
    @Input() bg = 'yellow';

    @HostBinding('style.backgroundColor') as: string = '';
    constructor(private rend: Renderer2, private ref: ElementRef) { }

    ngOnInit() {
        this.ref.nativeElement.style.color = this.col;
        // this.rend.setStyle(this.ref.nativeElement, 'background-color', this.bg);
        // this.rend.setStyle(this.ref.nativeElement, 'backgroundColor', this.bg);
        this.as='red';

    }

    @HostListener('mouseenter', ['$event']) myfun(event: any) {
        // let a = (event.target as HTMLElement).setAttribute('class', 'noproblem')
        // console.log('click listener called', a.getAttribute('class'));
        this.as = 'pink'
    }

    @HostListener('mouseleave', ['$event']) myfun2(event: any) {
        // (event.target as HTMLElement).removeAttribute('class')

    }
}