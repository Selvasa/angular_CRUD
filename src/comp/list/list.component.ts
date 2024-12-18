import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, inject, input, Input, Output, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { CrudService } from '../crud.service';
import CustDir from '../../directive/custom.directive';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,CustDir],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() studentList: any[] = [];
  @Output() sStudent = new EventEmitter<any>();
  @Output() sDelete = new EventEmitter<any>();

  getSingle(id: any) {
    this.sStudent.emit(id);
  }
  deleteData(id: any) {
    console.log(id);
    this.sDelete.emit(id)
  }
}
