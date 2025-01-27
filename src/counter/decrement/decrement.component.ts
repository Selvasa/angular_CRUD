import { Component, inject } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-decrement',
  standalone: true,
  imports: [],
  templateUrl: './decrement.component.html',
  styleUrl: './decrement.component.css'
})
export class DecrementComponent {
  private counter=inject(CounterService)

  decrementCounter(){
    // this.increment.DecrementCounter();
    this.counter.onDecrement()
  }
}
