import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { post_Action_Data, update_Action_Data } from '../crud-action';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngrx-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './ngrx-form.component.html',
  styleUrl: './ngrx-form.component.css'
})
export class NgrxFormComponent {
  isUpdate = false;
  @Input() getSingleValueFromParent: any
  private store = inject(Store)

  ngrxForm: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    age: new FormControl(),
    phone: new FormControl(),
  })

  onSubmitFrom() {
    this.store.dispatch(post_Action_Data(this.ngrxForm.value));
    this.onReset();
    this.isUpdate = false
  }
  onReset() {
    this.ngrxForm.reset();
  }
  onupdateFrom() {
    this.store.dispatch(update_Action_Data(this.ngrxForm.value));
    this.onReset();
  }
  ngDoChange() {
    console.log(this.getSingleValueFromParent);
  }
  ngAfterViewInit() {
    console.log(this.getSingleValueFromParent);

    if (this.getSingleValueFromParent) {
      this.isUpdate = true
      this.ngrxForm.setValue(this.getSingleValueFromParent)
    }
  }
}
