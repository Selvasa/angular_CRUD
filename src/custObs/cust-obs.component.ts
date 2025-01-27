import { Component, inject } from '@angular/core';
import { CustObservable } from './cust.service';
import { Observable, of, Subject, Subscription, timeout, timer } from 'rxjs';

@Component({
  selector: 'app-cust-obs',
  standalone: true,
  imports: [],
  templateUrl: './cust-obs.component.html',
  styleUrl: './cust-obs.component.css'
})
export class CustObsComponent {
  // custObs = inject(CustObservable)
  // cust = inject(Observable)
  // aaaa: Subscription = new Subscription;
  constructor() {
    const sub$ = new Subject();

    // const cust$ = new CustObservable((x: any) => {
    //   x.next('sarath')
    // });
    // cust$.subscribe((x: any) => { console.log('first subscribe') })
    sub$.subscribe(a => console.log('from subject', a))
    sub$.next(100)
  }
  // ngOnInit(){}
  // ngOnInit() {
  //   const aaaa = new Observable((a: any) => {
  //     let count = 0;
  //     setInterval(() => {
  //       a.next(count);
  //       count++
  //     }, 1500)
  //   })

  //   this.aaaa = aaaa.subscribe((s: any) => {
  //     console.log(s);

  //   })
  // }
  // ngOnDestroy() {
  //   this.aaaa.unsubscribe()
  // }

}
