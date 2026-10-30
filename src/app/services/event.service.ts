import { Injectable, signal, computed } from '@angular/core';
import { EventItem } from '../models/event.model';
import { EVENTS } from '../data/events.data';

@Injectable({ providedIn: 'root' })
export class EventService {
  /** Signal privé contenant la liste des événements */
  private _events = signal<EventItem[]>([...EVENTS]);

  /** Signal privé contenant les IDs des favoris */
  private _favorites = signal<Set<number>>(new Set());

  /** Lecture seule des événements */
  readonly events = this._events.asReadonly();

  /** Lecture seule des favoris */
  readonly favorites = this._favorites.asReadonly();

  /** Nombre total d'événements */
  readonly eventCount = computed(() => this._events().length);

  /** Nombre de favoris */
  readonly favoriteCount = computed(() => this._favorites().size);

  /** Nombre d'événements gratuits */
  readonly freeEventCount = computed(
    () => this._events().filter(e => e.price === 0).length
  );

  /** Retrouver un événement par identifiant */
  getEventById(id: number): EventItem | undefined {
    return this._events().find(e => e.id === id);
  }

  /** Ajouter un événement (sans ID initial) ; génère un ID unique */
  addEvent(event: Omit<EventItem, 'id'>): void {
    const maxId = this._events().reduce((max, e) => Math.max(max, e.id), 0);
    const newEvent: EventItem = { ...event, id: maxId + 1 } as EventItem;
    this._events.update(events => [...events, newEvent]);
  }

  /** Supprimer un événement de la liste */
  deleteEvent(id: number): void {
    this._events.update(events => events.filter(e => e.id !== id));
    // Retirer aussi des favoris si présent
    this._favorites.update(favs => {
      const copy = new Set(favs);
      copy.delete(id);
      return copy;
    });
  }

  /** Ajouter ou retirer l'ID des favoris */
  toggleFavorite(id: number): void {
    this._favorites.update(favs => {
      const copy = new Set(favs);
      if (copy.has(id)) {
        copy.delete(id);
      } else {
        copy.add(id);
      }
      return copy;
    });
  }

  /** Vérifie si un événement est en favori */
  isFavorite(id: number): boolean {
    return this._favorites().has(id);
  }
}

