import { Injectable } from '@angular/core';
import {from, Observable } from 'rxjs';
import{HttpClient} from '@angular/common/http';
import { IInfo } from './info';


@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private _url : string = "http://jsonplaceholder.typicode.com/comments";

  constructor(private http: HttpClient) { }

  getInfo(): Observable<IInfo[]>{
    return this.http.get<IInfo[]>(this._url);
  }

}
