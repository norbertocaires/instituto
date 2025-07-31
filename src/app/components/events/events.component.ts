import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolDataService } from '../../services/school-data.service';
import { Event } from '../../models';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  private schoolDataService = inject(SchoolDataService);
  events: Event[] = this.schoolDataService.getEvents();
}
