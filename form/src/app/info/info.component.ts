import { Component, OnInit } from '@angular/core';
import {InfoService} from './../info.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public info:any= [];
  constructor(private _infoService: InfoService) {
     
   }

  ngOnInit() {
    this._infoService.getInfo().subscribe( data => this.info = data);
}
}
