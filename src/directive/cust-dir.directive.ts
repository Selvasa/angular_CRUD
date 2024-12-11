import { Directive, ElementRef, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '.appCustDir',
  standalone: true
})
export class CustDirDirective {
  private ref = inject(ElementRef);

  constructor(private renderer: Renderer2, private elmRef: ElementRef) { }
  ngOnInit() {
    // this.elmRef.nativeElement.style.backgroundColor = 'red';
    // this.ref.nativeElement.style.display = 'block';
    // this.ref.nativeElement.style.color = 'white';
    // this.ref.nativeElement.style.fontWeight = 'bold'
    // this.ref.nativeElement.innerHTML = 'ok done';

    this.renderer.setStyle(this.ref.nativeElement, 'color', 'blue');
    this.renderer.setStyle(this.ref.nativeElement, 'font-weight', 'bold');
  }

}
