import { Injectable } from "@angular/core";
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, timeout } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CounterService {

    // // using behavior subject
    // private counter: BehaviorSubject<any> = new BehaviorSubject(0);
    // counter$ = this.counter.asObservable()

    // IncrementCounter() {
    //     let currentvalue = this.counter.getValue();
    //     this.counter.next(currentvalue + 1)
    // }
    // DecrementCounter() {
    //     let currentvalue = this.counter.value;
    //     this.counter.next(currentvalue - 1)
    // }
    // ResetCounter() {
    //     this.counter.next(0)
    // }

    // using subject
    value = 0
    // private counter = new Subject<number>();
    // conunt$ = this.counter.asObservable();

    // private Bcounter = new BehaviorSubject<number>(1);
    // Bconunt$ = this.Bcounter.asObservable();

    private Rcounter = new Subject<number>();
    Rcount$ = this.Rcounter.asObservable()

    constructor() {
        setTimeout(() => {
            this.Rcounter.next(this.value);
        })

    }
    // timeOut() {
    //     this.counter.next(this.value);
    // }
    onIncrement() {
        this.value += 1;
        this.Rcounter.next(this.value)
    }

    onDecrement() {
        this.value -= 1;
        this.Rcounter.next(this.value)
    }
    onReset() {
        this.value = 0;
        this.Rcounter.next(this.value)
    }

}