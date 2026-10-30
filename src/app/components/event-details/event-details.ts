import { Component, input, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe, UpperCasePipe, CurrencyPipe } from '@angular/common';
import { EventItem } from '../../models/event.model';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, CurrencyPipe],
  templateUrl: './event-details.html',
  styleUrl: './event-details.css'
})
export class EventDetails {
  private router = inject(Router);
  private eventService = inject(EventService);

  /** L'identifiant récupéré depuis la route via withComponentInputBinding() */
  id = input.required<string>();

  /** L'événement correspondant à l'id */
  event = computed<EventItem | undefined>(() => {
    const numId = Number(this.id());
    return this.eventService.getEventById(numId);
  });

  goBack(): void {
    this.router.navigate(['/events']);
  }
}
