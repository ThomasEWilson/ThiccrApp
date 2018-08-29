import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpService {

    constructor(private httpClient: HttpClient) { }

    get(path: string): Observable<any> {
        return this.httpClient.get(path);
    }
    
}