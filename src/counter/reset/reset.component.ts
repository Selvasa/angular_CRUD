import { Component, inject } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-reset',
  standalone: true,
  imports: [],
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.css'
})
export class ResetComponent {
private counter=inject(CounterService)

  reset(){
    // this.increment.ResetCounter();
    this.counter.onReset();
  }
}
