import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, inject, input, Input, Output, signal } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  service = inject(CrudService);
  cdr = inject(ChangeDetectorRef);

  @Input()studentList:any;
  @Output() singleStudent = new EventEmitter();

  // studentList = signal<any>([]);


  constructor() { }

  ngOnChanges() {
    // this.service.getStudentData().subscribe((res: any) => {
      console.log(this.studentList);

    //   this.studentList.set(res);
    // })
  }


  deleteData(id: any) {
    this.service.deleteStudent(id).subscribe()
  }

  getSingle(id: any) {
    this.service.getSingleStudent(id).subscribe((res) => {
      this.singleStudent.emit(res)
    })
  }
}
