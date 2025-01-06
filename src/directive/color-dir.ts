import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: '[colorDir]',
    standalone: true,
})
export class CustColor {
    constructor(private ref: ElementRef, private rend: Renderer2) { }

    
}