import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, computed, effect, signal, untracked } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { interval, take, throwError } from 'rxjs';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
  count = signal(0);
  readOne = signal(1);
  arr = signal([{ name: 'selvan', age: 20 }, { name: 'sarath', age: 30 }])
  
  myVar = '';
  
  constructor() {
   var arr = signal([{ name: 'selvan', age: 20 }, { name: 'sarath', age: 30 }])
    // effect(() => {
    //   console.log("converted signal", this.obsToSig());
    // }, { manualCleanup: true })
  }
  ngOnInit() {

  }

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
