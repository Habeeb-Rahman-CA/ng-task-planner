import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../../model/interface/task';
import { TaskListComponent } from "../task-list/task-list.component";

@Component({
  selector: 'app-task-planner',
  standalone: true,
  imports: [ReactiveFormsModule, TaskListComponent],
  templateUrl: './task-planner.component.html',
  styleUrl: './task-planner.component.css'
})
export class TaskPlannerComponent {

taskForm!: FormGroup
tasks: Task[] = []

constructor(private fb: FormBuilder){
  this.taskForm = this.fb.group({
    title: ['', Validators.required],
    deadline:['', Validators.required]
  })
}

addTask(){
  if (this.taskForm.valid) {
    const newTask: Task = {
      title: this.taskForm.value.title,
      deadline: new Date(this.taskForm.value.deadline)
    }
    this.tasks.push(newTask)
    this.taskForm.reset()
  }
}

}
