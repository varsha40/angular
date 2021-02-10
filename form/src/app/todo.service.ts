  
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITodo } from './todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _url : string = "http://jsonplaceholder.typicode.com/todos";

  constructor(private http: HttpClient) { }

  getTodo(): Observable<ITodo[]>{
    return this.http.get<ITodo[]>(this._url);
  }

}