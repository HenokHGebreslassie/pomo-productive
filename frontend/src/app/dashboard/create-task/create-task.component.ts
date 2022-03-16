import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  createTaskForm!: FormGroup
  constructor(private taskService: TaskService, private router: Router, private formBuilder: FormBuilder) { 
    this.createTaskForm = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
      projectName: ['', Validators.compose([Validators.required])],
      pomodros: [0, Validators.compose([Validators.required])],
    })
  }

  ngOnInit(): void {
  }

  handleSubmit() {
    const title: string = this.createTaskForm.get('title')?.value
    const projectName: string = this.createTaskForm.get('projectName')?.value
    const pomodros: string = this.createTaskForm.get('pomodros')?.value
    
    const task = {
      title,
      projectName,
      pomodros,
    }

    this.taskService.createTask(task).subscribe((data) => {
      this.router.navigateByUrl('dashboard/tasks')
    })
  }
}
