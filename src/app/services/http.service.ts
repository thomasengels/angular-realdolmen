import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService<T> {

  constructor(public http: HttpClient) { }

   list(url: string): Observable<T[]>{
       return this.http.get<T[]>(url);
   }

   get(url: string, id: number): Observable<T> {
    return this.http.get<T>(url + '/' + id);
   }

   post(url: string, data: any): Observable<T>{
      return this.http.post<T>(url, data);
   }
}
