import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";
import { LoginRequest } from "./login-request";
import { LoginResponse } from "./login-response";

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(private readonly httpClient: HttpClient) { }

    private loginPath(): string {
        return environment.url.concat('auth/signin');
    }

    authenticate(loginRequest: LoginRequest): Observable<LoginResponse> {
        return this.httpClient.post<LoginResponse>(this.loginPath(), loginRequest);
    }
}