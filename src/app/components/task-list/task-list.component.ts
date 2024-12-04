import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../model/interface/task';
import { interval, map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {

  @Input() tasks: Task[] = []

  ngOnInit(): void {
    interval(1000).pipe(
      map(() => {
        this.tasks.forEach(task => {
          const timeLeft = task.deadline.getTime() - new Date().getTime()
          if (timeLeft > 0) {
            const hours = Math.floor(timeLeft / (1000 * 60 * 60))
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((timeLeft % (1000 * 60 * 60)) / 1000)
            task.coutdown = `${hours}:${minutes}:${seconds}`
          } else {
            task.coutdown = 'Expired'
          }
        })
      })
    ).subscribe()
  }

}
