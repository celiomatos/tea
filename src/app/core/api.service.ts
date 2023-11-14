import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export abstract class ApiService<E> {

    es: E[] = [];

    constructor(private readonly http: HttpClient) { }

    protected abstract entityPath(): string;

    private path(): string {
        return environment.url.concat(this.entityPath());
    }

    getById(id: string): Observable<E> {
        return this.http.get<E>(this.path() + '/' + id);
    }

    getAll(): Observable<E[]> {
        return 0 === this.es.length ? this.http.get<E[]>(this.path()) : of(this.es);
    }

    insert(e: E): Observable<E> {
        return this.http.post<E>(this.path(), e);
    }

    update(id: string, e: E): Observable<E> {
        return this.http.put<E>(this.path() + '/' + id, e);
    }

    delete(id: string): Observable<E> {
        return this.http.delete<E>(this.path() + '/' + id);
    }
}