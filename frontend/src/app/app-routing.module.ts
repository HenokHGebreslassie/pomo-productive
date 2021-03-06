import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SigninComponent} from "./modules/auth/signin/signin.component";
import {SignupComponent} from "./modules/auth/signup/signup.component";
import { PomodroComponent } from './modules/pomodro/pomodro.component';
import {AuthenticationGuard} from "./guards/authentication.guard";

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
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module')
      .then(m => m.DashboardModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'p',
    component: PomodroComponent,
    canActivate: [AuthenticationGuard]
  },
  { path: '**',
    redirectTo: 'signin'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
