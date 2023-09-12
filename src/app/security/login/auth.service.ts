import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";
import { LoginRequest } from "./login-request";
import { LoginResponse } from "./login-response";

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(
        private readonly httpClient: HttpClient,
        private readonly router: Router) { }

    private loginPath(): string {
        return environment.url.concat('api/auth/signin');
    }

    authenticate(loginRequest: LoginRequest): Observable<LoginResponse> {
        return this.httpClient.post<LoginResponse>(this.loginPath(), loginRequest);
    }

    canActivate(): boolean {
        const token = sessionStorage.getItem('token');
        if (token) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}