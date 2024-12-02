import { Component, ElementRef, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';
import { IStudent } from '../../model/student';
import { CrudService } from '../crud.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  private service = inject(CrudService)
  @Input() singleStu: any;
  @Output() studentListEmit=new EventEmitter()
  isUpdate = false;
  updataId: any;

  postData = inject(CrudService);

  studentData: IStudent = { sName: '', sAge: null, sAddress: '', sCity: '', sTell: null }
  formValue = new FormGroup({
    sName: new FormControl(this.studentData.sName),
    sAge: new FormControl(this.studentData.sAge),
    sAddress: new FormControl(this.studentData.sAddress),
    sCity: new FormControl(this.studentData.sCity),
    sTell: new FormControl(this.studentData.sTell)
  })

  constructor() { }

  onClick() {
    this.service.postStudentData(this.formValue.value as IStudent).subscribe();
    this.onReset()
  }
  ngOnInit() {
    this.service.getStudentData().subscribe((res: any) => {
      console.log(res);
      
      this.studentListEmit.emit(res)
    })

  }

  ngOnChanges() {
    if (this.singleStu) {
      let { id } = this.singleStu;
      this.updataId = id;
      delete this.singleStu.id;
      this.formValue.setValue(this.singleStu);
      this.isUpdate = true
    }
  }
  onUpdate() {
    this.service.updateOne(this.updataId, this.formValue.value).subscribe()
    this.isUpdate = false;
    this.onReset()
  }

  onReset() {
    this.formValue.reset();
  }
}
