import { Component, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
  count = signal(0);

  increment() {
    this.count.set(this.count() + 1)
  }
  decrement() {
    this.count.set(this.count() - 1)
  }
  reset() {
    this.count.set(0)
  }
}
