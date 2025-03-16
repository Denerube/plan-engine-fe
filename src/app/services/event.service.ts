import { Injectable } from '@angular/core';
import { PlanningEvent } from '../models/PlanningEvent';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  events:PlanningEvent[]=[];
  constructor() {
  }




  getEvents():PlanningEvent[] {
    const storedEvents = sessionStorage.getItem('events');
    if (storedEvents) {
      this.events = JSON.parse(storedEvents);
    }
    if(this.events.length == 0){
      this.events.push(
        new PlanningEvent("test","14-04-2025","12-03-2025",false,false),
        new PlanningEvent("test2","14-05-2025","12-03-2025",false,true),
        new PlanningEvent("test3","16-07-2025","12-03-2025",false,true),
        new PlanningEvent("test4","16-01-2025","12-09-2024",true,true)
      )
      this.saveEventsToLocalStorage();
    }
    return this.events;
  }
  addEvent(planningEvent:PlanningEvent):void{
    this.events.push(planningEvent);
    this.saveEventsToLocalStorage();
  }

  private saveEventsToLocalStorage(): void {
    sessionStorage.setItem('events', JSON.stringify(this.events));  
  }

}
