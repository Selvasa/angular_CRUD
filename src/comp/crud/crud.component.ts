import { Component, inject, Input } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { ListComponent } from '../list/list.component';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [FormComponent, ListComponent],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {
  service = inject(CrudService)
  singleStudent: any;
  studentList: any;

  singleStu(value: any) {
    this.singleStudent = value
  }

  studentListEmit(value: any) {
    this.studentList = value;
    console.log(value,'crud');
    
  }

  // ngOnInit() {
  //   this.service.getStudentData().subscribe((res: any) => {
  //     console.log(res);

  //     this.studentList = res
  //   })

  // }
}
