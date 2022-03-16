import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { PomodroModule } from '../modules/pomodro/pomodro.module';
import { MaterialModule } from '../core/material.module';

const routes: Routes = [
  {
    path: '',
    component : DashboardComponent,
    children: [{
      path: 'tasks',
      component: TaskComponent
    }, {
      path: 'create-task',
      component: CreateTaskComponent
    }]
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    SidenavComponent,
    CreateTaskComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PomodroModule,
    MaterialModule
  ]
})
export class DashboardModule { }
