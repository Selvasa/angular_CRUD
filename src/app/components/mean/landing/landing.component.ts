import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-langing',
  standalone: true,
  imports: [FormComponent, ListComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
