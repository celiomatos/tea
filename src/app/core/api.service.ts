import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export abstract class ApiService<E> {

    constructor(private readonly http: HttpClient) { }

    protected abstract entityPath(): string;
    protected abstract isListEmpty(): boolean;
    protected abstract getList(): Observable<E[]>;

    private path(): string {
        return environment.url.concat(this.entityPath());
    }

    getById(id: string): Observable<E> {
        return this.http.get<E>(this.path() + id);
    }

    getAll(): Observable<E[]> {
        return this.isListEmpty() ? this.http.get<E[]>(this.path()) : this.getList();
    }

    insert(e: E): Observable<E> {
        return this.http.post<E>(this.path(), e);
    }

    update(id: string, e: E): Observable<E> {
        return this.http.put<E>(this.path() + id, e);
    }

    delete(id: string): Observable<E> {
        return this.http.delete<E>(this.path() + id);
    }
}