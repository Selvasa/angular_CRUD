import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmpDetails } from '../model/emp.class';

@Component({
  selector: 'app-root-comp',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './root.component.html',
  styleUrl: './root.component.css'
})
export class RootComponent {
  title = 'firstAng';

  formObj: EmpDetails = new EmpDetails();
  userForm: FormGroup = new FormGroup({
    empId: new FormControl(this.formObj.empId),
    empName: new FormControl(this.formObj.empName),
    empEmail: new FormControl(this.formObj.empEmail),
    empContact: new FormControl(this.formObj.empContact),
    empAddress: new FormControl(this.formObj.empAddress),
    empCity: new FormControl(this.formObj.empCity),
  });
  empDatas: any[] = [];

  constructor() {
    this.getDataFromDataBase()
  }
  saveData() {
    const oldData: any = JSON.parse(localStorage.getItem("EmpData") || '[]');
    if (oldData.length === 0) {
      this.userForm.controls['empId'].setValue(this.userForm.value.empId || 1);
    }
    else {
      this.userForm.controls['empId'].setValue(oldData[oldData.length - 1].empId + 1);
    }

    this.empDatas.push(this.userForm.value)
    localStorage.setItem("EmpData", JSON.stringify(this.empDatas));
    this.resetForm()
    this.getDataFromDataBase();
  }

  getDataFromDataBase() {
    let oldData = localStorage.getItem("EmpData") as string;
    if (oldData) {
      this.empDatas = JSON.parse(oldData);
    }
  }
  onEdit(item: any) {
    this.userForm.setValue(item)
  }
  updateData(id: any) {
    let upId = this.empDatas.findIndex((updateId: any) => updateId.empId === id)
    this.empDatas[upId] = this.userForm.value;
    localStorage.setItem("EmpData", JSON.stringify(this.empDatas));
    this.userForm.reset()
    this.userForm.controls['empId'].setValue(0);
  }
  resetForm() {
    this.userForm.reset();
    this.userForm.controls['empId'].setValue(0);
  }
  deleteForm(id: any) {
    // let a = this.empDatas.filter((d: any) => d.empId !== id)
    let index = this.empDatas.findIndex((d) => d.empId === id);
    this.empDatas.splice(index, 1);
    localStorage.setItem("EmpData", JSON.stringify(this.empDatas))
    this.getDataFromDataBase()
  }
}
