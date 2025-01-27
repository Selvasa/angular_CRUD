import { Component, inject } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-increment',
  standalone: true,
  imports: [],
  templateUrl: './increment.component.html',
  styleUrl: './increment.component.css'
})
export class IncrementComponent {
  private counter = inject(CounterService);

  increment() {
    // this.counter.IncrementCounter();
    this.counter.onIncrement();
   
  }
}
