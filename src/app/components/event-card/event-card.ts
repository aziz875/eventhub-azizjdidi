import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe, UpperCasePipe, CurrencyPipe } from '@angular/common';
import { EventItem } from '../../models/event.model';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [RouterLink, DatePipe, UpperCasePipe, CurrencyPipe],
  templateUrl: './event-card.html',
  styleUrl: './event-card.css'
})
export class EventCard {
  /** L'événement à afficher, reçu depuis EventList */
  event = input.required<EventItem>();

  /** Indique si cet événement est dans les favoris */
  isFavorite = input<boolean>(false);

  /** Émet quand l'utilisateur clique sur le bouton favoris */
  toggleFavorite = output<number>();

  /** Émet quand l'utilisateur clique sur le bouton supprimer */
  deleteEvent = output<number>();

  onToggleFavorite(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.toggleFavorite.emit(this.event().id);
  }

  onDelete(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.deleteEvent.emit(this.event().id);
  }
}
