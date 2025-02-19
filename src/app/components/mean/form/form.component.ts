import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MeanService } from '../../../service/mean.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  isUpdate: boolean = false;
  private service = inject(MeanService)
  myForm = new FormGroup({
    _id: new FormControl(''),
    name: new FormControl(''),
    age: new FormControl(null),
    city: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(null),
  })
  ngOnInit() {
    this.service.getSingle$.subscribe((res: any) => {
      if (res._id) {
        this.isUpdate = true;
        this.myForm.patchValue(res);
      }
    })
  }
  saveTo() {
    this.service.creatUser(this.myForm.value).subscribe(() => {
      this.service.getAllUser();
      this.resetForm()
    });
  }
  resetForm() {
    this.isUpdate = false;
    this.myForm.reset()
  }
  updateForm() {
    let id = this.myForm.get("_id")?.value;
    let value = this.myForm.value;
    this.service.updateUser(id, value).subscribe((res) => {
      this.service.getAllUser();
      this.resetForm()
      this.isUpdate = false;
    })
  }

}
