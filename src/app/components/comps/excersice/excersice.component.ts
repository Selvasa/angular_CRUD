import { Component, EventEmitter, input, model, Output } from '@angular/core';
import { outputFromObservable } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-excersice',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './excersice.component.html',
  styleUrl: './excersice.component.css'
})
export class ExcersiceComponent {

  name = model();
  ngOnInit() {
    console.log(this.name());

  }
}

