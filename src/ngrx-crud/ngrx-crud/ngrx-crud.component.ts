import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { dec, inc, reset } from '../crud-action';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { NgrxListComponent } from "../ngrx-list/ngrx-list.component";
import { NgrxFormComponent } from "../ngrx-form/ngrx-form.component";
import { BGDir } from '../../directive/bg-dir';

@Component({
  selector: 'app-ngrx-crud',
  standalone: true,
  imports: [AsyncPipe, NgrxListComponent, NgrxFormComponent,BGDir],
  templateUrl: './ngrx-crud.component.html',
  styleUrl: './ngrx-crud.component.css'
})
export class NgrxCrudComponent {
  passSingleValueToChild: any
  private store = inject(Store<{ count: any }>)
  count$: Observable<any> = this.store.select('count')
  constructor() {
    // console.log(this.count$);
    // this.count$.subscribe(res => console.log(res))
this.ngOnInit()
  }
  ngOnInit(){
    console.log('hiiii');
    
  }
  increment() {
    this.store.dispatch(inc('sss', { a: { name: 'sarath', age: 20, tel: 9090808070 } }));

  }
  decrement() {
    this.store.dispatch(dec())
  }

  reset() {
    this.store.dispatch(reset())
  }

  getSingleDataFromChild(event: any) {
    this.ngOnInit()
    console.log(event);
    
    this.passSingleValueToChild = event;
  }
}
