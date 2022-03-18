import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  tasks: Task[] = []

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks()
  }

  getTasks() {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data.tasks.map((task: any) => Task.createTaskFromObject(task))
    })
  }

}
