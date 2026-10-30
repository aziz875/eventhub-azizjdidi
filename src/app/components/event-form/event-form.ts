import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './event-form.html',
  styleUrl: './event-form.css'
})
export class EventForm {
  private eventService = inject(EventService);
  private router = inject(Router);

  /** Catégories disponibles */
  readonly categories = ['Atelier', 'Conférence', 'Sport'];

  /** Formulaire réactif */
  eventForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50)
    ]),
    category: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    place: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    price: new FormControl<number>(0, [
      Validators.required,
      Validators.min(0)
    ]),
    imageUrl: new FormControl(''),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(20)
    ])
  });

  /** Signaux depuis les observables du formulaire */
  formValue = toSignal(this.eventForm.valueChanges, { initialValue: this.eventForm.value });
  formStatus = toSignal(this.eventForm.statusChanges, { initialValue: this.eventForm.status });

  /** Soumission du formulaire */
  addEvent(): void {
    if (this.eventForm.invalid) {
      this.eventForm.markAllAsTouched();
      return;
    }

    const v = this.eventForm.value;
    this.eventService.addEvent({
      title: v.title!,
      category: v.category as 'Atelier' | 'Conférence' | 'Sport',
      date: v.date!,
      place: v.place!,
      price: v.price!,
      imageUrl: v.imageUrl || 'workshop_typescript.jpg',
      description: v.description!
    });

    this.eventForm.reset();
    this.router.navigate(['/events']);
  }
}

