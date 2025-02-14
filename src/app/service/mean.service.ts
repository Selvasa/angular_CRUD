import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class MeanService {
    private http = inject(HttpClient);
    private getUserSubject = new BehaviorSubject<any>([]);
    getAllUser$ = this.getUserSubject.asObservable()
    getAllUser() {
        this.http.get("http://localhost:3000/users").subscribe((res: any) => {
            this.getUserSubject.next(res.data)
        })
    }
    creatUser(payload: any) {
        return this.http.post("http://localhost:3000/create", payload)
    }
    getSingleUser() { }
    updateUser() { }
    deleteUser() { }
}