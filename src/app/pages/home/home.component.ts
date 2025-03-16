import { Component } from '@angular/core';
import { EventListComponent } from '../../components/event-list/event-list.component';
import { EventComponent } from "../../components/event/event.component";

@Component({
  selector: 'app-home',
  imports: [EventListComponent, EventComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
