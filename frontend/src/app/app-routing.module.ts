import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SigninComponent} from "./modules/auth/signin/signin.component";
import {SignupComponent} from "./modules/auth/signup/signup.component";

const routes: Routes = [
  { path: '',
    redirectTo: 'singin',
    pathMatch: 'full'
  },

  {
    path: 'signin',
    component : SigninComponent
  },

  {
    path : 'signup',
    component : SignupComponent
  },

  { path: '**',
    redirectTo: 'signin'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
