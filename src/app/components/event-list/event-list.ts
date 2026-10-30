import { Component, inject, computed, signal } from '@angular/core';
import { EventCard } from '../event-card/event-card';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [EventCard],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css'
})
export class EventList {
  private eventService = inject(EventService);

  /** Événements depuis le service */
  readonly events = this.eventService.events;

  /** Compteurs computed depuis le service */
  readonly eventCount = this.eventService.eventCount;
  readonly favoriteCount = this.eventService.favoriteCount;
  readonly freeEventCount = this.eventService.freeEventCount;

  /** Catégorie sélectionnée pour le filtre */
  readonly selectedCategory = signal<string>('Tous');

  /** Liste des catégories disponibles */
  readonly categories: string[] = [
    'Tous',
    'Atelier',
    'Conférence',
    'Sport',
    'Rencontre',
    'Compétition'
  ];

  /** Événements filtrés selon la catégorie sélectionnée */
  readonly filteredEvents = computed(() => {
    const cat = this.selectedCategory();
    if (cat === 'Tous') {
      return this.events();
    }
    return this.events().filter(e => e.category === cat);
  });

  /** Sélectionner une catégorie */
  selectCategory(category: string): void {
    this.selectedCategory.set(category);
  }

  /** Ajouter / retirer un favori */
  onToggleFavorite(eventId: number): void {
    this.eventService.toggleFavorite(eventId);
  }

  /** Vérifie si un événement est en favori */
  isFavorite(eventId: number): boolean {
    return this.eventService.isFavorite(eventId);
  }

  /** Supprimer un événement */
  onDeleteEvent(eventId: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet événement ?')) {
      this.eventService.deleteEvent(eventId);
    }
  }
}
