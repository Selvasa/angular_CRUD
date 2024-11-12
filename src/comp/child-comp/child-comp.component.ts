import { Component, ContentChild, contentChild, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  standalone: true,
  imports: [],
  templateUrl: './child-comp.component.html',
  styleUrl: './child-comp.component.css'
})
export class ChildCompComponent
  implements OnInit {
  counter = 0;
  interval: any;
  @Input() inValue: string = '';
  @ContentChild('contentProjection') asdf: any
  constructor() {
    console.log("child constructor" + this.asdf);
  }
  ngOnInit(): void {
    console.log(" child ngOnit called" + this.asdf)
  }
}
