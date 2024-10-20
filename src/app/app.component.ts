import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {WorkoutPlannerComponent} from './workout-planner/workout-planner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WorkoutPlannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'workout-planner-app';
}
