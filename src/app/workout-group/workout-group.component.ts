import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-workout-group',
  standalone: true,
  imports: [],
  templateUrl: './workout-group.component.html',
  styleUrl: './workout-group.component.css'
})
export class WorkoutGroupComponent {
  availableGroups: string[] = ['Legs', 'Abs and Glutes', 'Push', 'Pull', 'Full-Body Functional', 'Cardio', 'Rest'];

  // We need an event emitter to mit an event to the parent component "workout planner"
  @Output() groupSelected = new EventEmitter<string>();

  constructor() {
  }

  /**
   * Emit an event from the child component to the parent component.
   * groupselected is an instance of event emitter.
   * emit will send the selected group as a string.
   * Eventemitter is used when a child component needs to send data to a parent.
   * The parent 'workoutplanner' listens to the event and reponds accordingly by adding the legs to the workout plan for that day.
   * @param group
   */
  selectGroup(group: string) {
    this.groupSelected.emit(group);
    console.log(group);
  }
}
