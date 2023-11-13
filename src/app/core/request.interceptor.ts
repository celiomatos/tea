import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Observable, catchError, finalize, retry, throwError, timer } from "rxjs";
import { SpinnerHandlerService } from "../share/components/spinner/spinner-handler.service";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(
        private readonly router: Router,
        private readonly snackBar: MatSnackBar,
        public spinnerHandler: SpinnerHandlerService,) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerHandler.handleRequest('plus');
        const token = sessionStorage.getItem('token');
        if (token) {
            req = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + token)
            })
        }
        return next.handle(req)
            .pipe(retry({ count: 3, delay: this.shouldRetry }))
            .pipe(catchError((err: HttpErrorResponse) => {
                if (0 === err.status) {
                    this.snackBar.open('Servidor off-line!', '', { duration: 6000 });
                } else if ('Bad credentials' === err.error.message) {
                    this.snackBar.open('Usuário inválido', '', { duration: 6000 });
                } else if (401 === err.status) {
                    this.snackBar.open('Sessão expirou', '', { duration: 6000 });
                    sessionStorage.clear();
                    this.router.navigate(['/login'])
                } else {
                    this.snackBar.open(err.error, '', { duration: 6000 });
                }
                return throwError(() => err.error);
            }))
            .pipe(finalize(this.finalize.bind(this)))
    }

    finalize = (): void => this.spinnerHandler.handleRequest();

    shouldRetry(error: HttpErrorResponse) {
        if (0 === error.status) {
            return timer(120000);
        }
        throw error;
    }

}