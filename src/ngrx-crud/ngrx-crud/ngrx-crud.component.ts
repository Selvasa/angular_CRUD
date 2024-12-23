import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { dec, inc, reset } from '../crud-action';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-ngrx-crud',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './ngrx-crud.component.html',
  styleUrl: './ngrx-crud.component.css'
})
export class NgrxCrudComponent {
  private store = inject(Store<{ count: any }>)
  count$: Observable<any> = this.store.select('count')
  constructor() {
    // console.log(this.count$);
    this.count$.subscribe(res => console.log(res))

  }
  increment() {
    this.store.dispatch(inc('sss',{ a: { name: 'sarath', age: 20, tel: 9090808070 } }));

  }
  decrement() {
    this.store.dispatch(dec())
  }

  reset() {
    this.store.dispatch(reset())
  }
}
