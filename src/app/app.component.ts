import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskPlannerComponent } from "./components/task-planner/task-planner.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskPlannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-task-planner';
}
