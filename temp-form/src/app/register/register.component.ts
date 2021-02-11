import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import{Register} from '../register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register=new Register("",0,"","");

  constructor() { }

  ngOnInit(): void {
    console.log(this.register);
  }
  submit(Register:NgForm){
    console.log(Register.form.value)
  }

}
