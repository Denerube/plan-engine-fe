import { Component, inject, OnInit,signal } from '@angular/core';
import { EventService } from '../../services/event.service';
import {PlanningEvent} from '../../models/PlanningEvent'
import { EventComponent } from "../event/event.component";
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-event-list',
  imports: [EventComponent,FormsModule],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss'
})
export class EventListComponent implements OnInit {
  eventservice = inject(EventService)
  eventItems = signal<Array<PlanningEvent>>([]);
  hiddenForm = signal(false)
  

  ngOnInit(): void {
  
    this.eventItems.set(this.eventservice.getEvents());
  
  } 
  showNewEventForm(el: HTMLElement) {
    this.hiddenForm.update((val)=>!val)
  } 

  addNewEvent(event:Event,myForm:NgForm){
    event.preventDefault();
    let planningEvent:PlanningEvent = new PlanningEvent();
    planningEvent.dateInit=myForm.value.dateInit
    planningEvent.date = myForm.value.date
    planningEvent.name=myForm.value.name   
    planningEvent.finished=myForm.value.finished ?? false
    planningEvent.going = myForm.value.going ?? false
    this.eventItems.update(eventItems => [...eventItems, planningEvent]);
    console.log(planningEvent)
    this.eventservice.addEvent(planningEvent);
  }

}
