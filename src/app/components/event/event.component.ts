import { Component,input } from '@angular/core';
import { PlanningEvent } from '../../models/PlanningEvent';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-event',
  imports: [RouterLink],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent {
  eventItem = input.required<PlanningEvent>();
}
