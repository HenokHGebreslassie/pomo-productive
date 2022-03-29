import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PomodroComponent } from './pomodro.component';


@NgModule({
  declarations: [
    PomodroComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PomodroComponent
  ]
})
export class PomodroModule { }
