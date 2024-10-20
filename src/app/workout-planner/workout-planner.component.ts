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
   monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  currentMonth = new Date().getMonth();
  currentMonthName = this.monthNames[this.currentMonth];
  daysInMonth: {date: number, day: number}[] = [];
  weekDays: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  selectedDay: number | null = null;
  // Tracks the selected day to add a group.
  workoutGroupsByDay: { [key: string]: string[] } = {}

  constructor() {
  }

  ngOnInit(): void {
    this.generateDaysForMonth(new Date().getFullYear(), new Date().getMonth());
    console.log(this.currentMonthName);
  }

  generateDaysForMonth(year: number, month: number): void {
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInThisMonth = new Date(year, month + 1, 0).getDate();

    this.daysInMonth = [];

    for (let day = 1; day <= daysInThisMonth; day++) {
      this.daysInMonth.push({ date: day, day: (firstDayOfMonth + day - 1) % 7 });
    }
  }

  addWorkoutGroup(day: number) {
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
