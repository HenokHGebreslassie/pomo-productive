import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {MaterialModule} from "../../core/material.module";



@NgModule({
  declarations: [

    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    SigninComponent,
    SignupComponent
  ]
})
export class AuthModule { }
