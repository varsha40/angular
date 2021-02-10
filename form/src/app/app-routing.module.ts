import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import {RegisterComponent } from './register/register.component'
import {InfoComponent} from './info/info.component'
import {TodoComponent} from './todo/todo.component'
const routes: Routes = [
  {
    component:RegisterComponent,
    path:'register'
  },
  {
    component:InfoComponent,
    path:'info'
  },
  {
    component:TodoComponent,
    path:'todo'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
