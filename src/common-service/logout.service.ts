declare var google: any;
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LogOut {

    login = new BehaviorSubject<boolean>(false)
    iSLogin$ = this.login.asObservable();

    constructor() {
    }
    logOut() {
        this.login.next(false);
        return google.accounts.id.disableAutoSelect();


    }
}