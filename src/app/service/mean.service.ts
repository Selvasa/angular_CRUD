import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class MeanService {
    private http = inject(HttpClient);
    private getUserSubject = new BehaviorSubject<any>([]);
    private getSUserSubject = new BehaviorSubject<any>([]);
    getAllUser$ = this.getUserSubject.asObservable();
    getSingle$ = this.getSUserSubject.asObservable()
    getAllUser() {
        this.http.get("/users").subscribe((res: any) => {
            this.getUserSubject.next(res.data)
        })
    }
    creatUser(payload: any) {
        return this.http.post("/create", payload)
    }
    getSingleUser(id: any) {
        this.http.get("/user/" + id).subscribe((res: any) => {
            this.getSUserSubject.next(res.data);
        })
    }
    updateUser(id: any, payload: any) {
        return this.http.put("/update_user/" + id, payload)
    }
    deleteUser(id: any) {
        return this.http.delete("/delete_user/" + id)
    }
}