import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { PnfComponent } from './components/pnf/pnf.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"signup",component:SignupComponent},
  {path:"add",component:AddComponent},
  {path:"edit/:_id",component:EditComponent},
  {path:"**",component:PnfComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
