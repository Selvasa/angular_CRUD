import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MeanService } from '../../../service/mean.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  private service = inject(MeanService)
  myForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(null),
    city: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(null),
  })

  saveTo() {
    this.service.creatUser(this.myForm.value).subscribe()
  }
}
