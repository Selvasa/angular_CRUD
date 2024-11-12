import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ChildCompComponent } from '../child-comp/child-comp.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-parent-comp',
  standalone: true,
  imports: [ChildCompComponent,FormsModule,CommonModule],
  templateUrl: './parent-comp.component.html',
  styleUrl: './parent-comp.component.css'
})
export class ParentCompComponent implements OnInit{
  isVisible:boolean=false;
  inValue:string='';
constructor(){
  console.log("parent constructor called")
}
ngOnInit(): void {
  console.log("parent ngOninit called")
}
toggle(){
this.isVisible=!this.isVisible;
}
ngOnChanges(changes: SimpleChanges): void {
  console.log("parent Onchanges Called")
   
 }

}
