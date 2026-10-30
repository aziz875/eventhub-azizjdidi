import { Routes } from '@angular/router';
import { EventList } from './components/event-list/event-list';
import { EventDetails } from './components/event-details/event-details';
import { EventForm } from './components/event-form/event-form';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'events', component: EventList },
  { path: 'events/add', component: EventForm },
  { path: 'events/:id', component: EventDetails },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about').then(m => m.About)
  },
  { path: '**', component: NotFound }
];
