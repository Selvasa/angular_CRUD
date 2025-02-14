import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class MeanService {
    private http = inject(HttpClient);
    getAllUser() {
        return this.http.get("http://localhost:3000/users")
    }
    getSingleUser() { }
    updateUser() { }
    deleteUser() { }
}