import { Component } from '@angular/core';
import {WorkoutGroupComponent} from '../workout-group/workout-group.component';

@Component({
  selector: 'app-workout-planner',
  standalone: true,
  imports: [
    WorkoutGroupComponent
  ],
  templateUrl: './workout-planner.component.html',
  styleUrl: './workout-planner.component.css'
})

export class WorkoutPlannerComponent {
  weekDays: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  selectedDay: string  | null = null; // Tracks the selected day to add a group.
  workoutGroupsByDay: {
    [key: string]: string[]
  } = {}

  constructor() {
  }

  addWorkoutGroup(day: string) {
    this.selectedDay = day;
    // logic: open a list of workout group components. From there, we can plan the workout of this day.
    console.log(`Add workout group to ${day}`);
  }

  onGroupSelected(group: string) {
    if (this.selectedDay) {

      // @ts-ignore
      this.workoutGroupsByDay[this.selectedDay] = group;

      // close the component after adding the group
      this.selectedDay = null;
    }
  }

  closeWorkoutGroup() {
    this.selectedDay = null;
  }

  protected readonly event = event;
}
