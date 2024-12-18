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
  private service = inject(CrudService);
  private postData = inject(CrudService);

  @Output() formStudentValue = new EventEmitter();
  @Output() uformStudentValue = new EventEmitter();
  @Input() sStudent: any;
  isUpdate = false;
  upDateId: any;

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
    this.formStudentValue.emit(this.formValue.value);
    this.onReset()
  }

  ngOnChanges() {
    if (this.sStudent) {
      this.isUpdate = true;
      let { id } = this.sStudent;
      this.upDateId = id;

      delete this.sStudent.id;
      this.formValue.setValue(this.sStudent)
    }
  }

  onReset() {
    this.formValue.reset(this.studentData);
    this.isUpdate = false;
  }
  onUpdate() {
    this.uformStudentValue.emit({ value: this.formValue.value, id: this.upDateId })
    this.isUpdate = false;
    this.onReset()
  }
}
