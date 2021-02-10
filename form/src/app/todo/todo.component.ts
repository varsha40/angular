import { Component, OnInit } from '@angular/core';
import {TodoService} from './../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todo:any= [];
  constructor(private _todoService: TodoService) {
     
   }

  ngOnInit() {
    this._todoService.getTodo().subscribe( data => this.todo = data);
}
}