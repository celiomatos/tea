import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, catchError, throwError, timeout } from "rxjs";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    constructor(private readonly router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = sessionStorage.getItem('token');
        if (token) {
            req = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + token)
            })
        }
        return next.handle(req)
            .pipe(timeout(30000))
            .pipe(catchError((err: HttpErrorResponse) => {
                if (401 === err.status) {
                    sessionStorage.clear();
                    this.router.navigate(['/login'])
                }
                return throwError(() => new Error(err.error));
            }));
    }


}