import { HttpHandler, HttpHandlerFn, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { finalize, map, take, tap } from "rxjs";
import { NgxSpinnerService } from "ngx-spinner"

@Injectable()
export class MeanInterceptor {
    private spinner = inject(NgxSpinnerService)
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        this.spinner.show(undefined, {
            type: 'timer',
            size: 'medium',
            bdColor: 'rgba(135, 175, 248, 0.55)',
            color: 'rgba(255, 255, 255, 0.8)',
            fullScreen: true,
        })
        let newReq = req.clone({ url: "http://localhost:3000" + req.url })
        return next.handle(newReq).pipe(
            tap(
                (result: any) => {
                    if (Array.isArray(result?.body?.data)) {
                        console.log("result", result)
                        result.body.data = result?.body?.data?.map((data: any) =>
                            data?.age > 25 ? { ...data, city: "chennai" } : data
                        )
                    }
                }, (error) => {
                    console.log("error", error)
                }
            ),
            finalize(() => {
                this.spinner.hide()
            }))
    }
}
