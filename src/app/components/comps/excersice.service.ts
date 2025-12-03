import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class MyService {
    getMyname() {
        return 'from my serivce';

    }
}
@Injectable({
    providedIn: 'root',
})
export class CommonService {
    getMyname() {
        return 'from my Common Service';

    }
}