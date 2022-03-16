import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {AuthModule} from "./modules/auth/auth.module";
import {PomodroModule} from "./modules/pomodro/pomodro.module";
import {TasksModule} from "./modules/tasks/tasks.module";
import {MaterialModule} from "./core/material.module";
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PomodroModule,
    TasksModule,
    MaterialModule,
    BrowserAnimationsModule,
    DashboardModule
  ],
  exports: [
    MaterialModule,
    PomodroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
