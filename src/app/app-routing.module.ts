import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateUserComponent} from './create-user/create-user.component';
import {FindAllComponent} from './find-all/find-all.component';
import {FindOneComponent} from './find-one/find-one.component';
import {EditUserComponent} from './edit-user/edit-user.component';


const routes: Routes = [
  { path: '', component: CreateUserComponent },
  { path: 'find-all', component: FindAllComponent },
  { path: 'find-one', component: FindOneComponent },
  { path: 'edit-user', component: EditUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


