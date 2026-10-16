import { Component, signal, computed } from '@angular/core';
import { EventCard } from '../event-card/event-card';
import { EventItem } from '../../models/event.model';
import { EVENTS } from '../../data/events.data';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [EventCard],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css'
})
export class EventList {
  /** Liste complète des événements */
  readonly events = signal<EventItem[]>(EVENTS);

  /** IDs des événements en favoris */
  readonly favoriteIds = signal<Set<number>>(new Set());

  /** Nombre de favoris (computed) */
  readonly favoritesCount = computed(() => this.favoriteIds().size);

  /** Catégorie sélectionnée pour le filtre */
  readonly selectedCategory = signal<string>('Tous');

  /** Liste des catégories disponibles */
  readonly categories: string[] = [
    'Tous',
    'Atelier',
    'Conférence',
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
    this.favoriteIds.update(ids => {
      const copy = new Set(ids);
      if (copy.has(eventId)) {
        copy.delete(eventId);
      } else {
        copy.add(eventId);
      }
      return copy;
    });
  }

  /** Vérifie si un événement est en favori */
  isFavorite(eventId: number): boolean {
    return this.favoriteIds().has(eventId);
  }
}
