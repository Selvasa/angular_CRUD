import { CommonModule } from '@angular/common';
import { Component, Inject, inject, Injectable, viewChild, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { concat, concatMap, debounce, debounceTime, delay, exhaustMap, filter, first, forkJoin, from, interval, last, map, merge, mergeAll, mergeMap, Observable, of, pipe, race, range, skip, skipLast, skipWhile, Subscription, switchMap, take, takeLast, takeUntil, takeWhile, tap, timeInterval, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { ExcersiceComponent } from "../excersice/excersice.component";
import { outputToObservable } from '@angular/core/rxjs-interop';
import { MyService } from '../excersice.service';
import { TOKKEN } from '../../../app.config';



@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ExcersiceComponent, FormsModule],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css',

})
export class RxjsComponent {
  users: any[] = [];
  getAll = new Subscription;
  myForm = new FormGroup({
    search: new FormControl('')
  });
  inputValue: any


  constructor(@Inject(TOKKEN) private service: MyService) { }

  ngOnInit() {
    console.log(this.inputValue);
  };
  myClick() {
    console.log(this.inputValue);
  }
  // getApiData(search?: string) {
  //   return ajax.getJSON(`https://dummyjson.com/users`)
  //     .pipe(map((data: any) => {
  //       console.log(data, search);
  //       return search ? data.users.filter((e: any) => { return e.firstName.toLowerCase().includes(search?.toLowerCase()) || e.lastName.toLowerCase().includes(search?.toLowerCase()) }) : data.users;
  //     }))
  // }
  // ngOnDestroy() {
  //   this.getAll.unsubscribe()
  // }

}


