import { Component, inject } from '@angular/core';
import { DecrementComponent } from "../decrement/decrement.component";
import { IncrementComponent } from "../increment/increment.component";
import { ResetComponent } from "../reset/reset.component";
import { CounterService } from '../counter.service';
import { CommonModule } from '@angular/common';
import { bufferTime, concatMap, debounce, debounceTime, filter, interval, map, mapTo, mergeMap, of, scan, switchMap, take, tap } from 'rxjs';
// import { } from 'rxjs/operators';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [DecrementComponent, IncrementComponent, ResetComponent, CommonModule],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {
  count: any;
  private counter = inject(CounterService);
  private observa = of(1, 2, 3)

  ngOnInit() {
    // this.counter.Rcount$.pipe(concatMap(a => interval(1000).pipe(take(5))))
    //   .subscribe(res => {
    //     console.log(res);
    //     this.count = res;
    //   })
    this.observa
      .pipe(
        scan((a, b) => a + b, 1)

      )
      .subscribe((res) => {
        console.log(res);

      })
  }
  // }

}


