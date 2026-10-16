# EventHub — Catalogue d'Événements

Application Angular standalone permettant de consulter les événements d'une association étudiante, d'afficher leurs détails, de filtrer la liste par catégorie et de gérer une sélection de favoris.

## Auteur
- **Aziz Jdidi** (aziz.jdidi@esprit.tn)
- Mini-projet Angular

## Versions utilisées

| Technologie | Version |
|---|---|
| Angular | 22.x |
| TypeScript | ~6.0 |
| Node.js | 24.x |
| npm | 11.x |

## Installation et lancement

```bash
# Cloner le dépôt
git clone https://github.com/aziz875/eventhub-azizjdidi.git
cd eventhub-azizjdidi

# Installer les dépendances
npm install

# Lancer le serveur de développement
ng serve
# ou
npm start
```

L'application sera disponible sur `http://localhost:4200/`.

## Structure des composants

| Composant | Rôle |
|---|---|
| **Header** | Affiche le logo de l'application et le menu de navigation (Événements, À propos) avec `routerLink` et `routerLinkActive`. |
| **EventList** | Composant principal qui gère la liste des événements via des Signals, le filtre par catégorie, et le compteur de favoris. Affiche les cartes avec `@for` et `@empty`. |
| **EventCard** | Carte individuelle d'un événement, reçoit l'événement via `input()`, affiche titre, image, date, prix en Dinars (TND) et catégorie avec des pipes (`date`, `currency`, `uppercase`). Permet d'ajouter/retirer des favoris via `output()`. |
| **EventDetails** | Page de détail d'un événement. Récupère l'identifiant depuis la route via `withComponentInputBinding()` et `input()`. Affiche un message d'erreur si l'événement n'existe pas. |
| **NotFound** | Page 404 affichée pour toute URL inconnue (route `**`). |
| **About** | Page de présentation chargée en **lazy loading** via `loadComponent()`. |

## Fonctionnalités réalisées

- ✅ Architecture **standalone** (aucun NgModule)
- ✅ **Signals** : `signal()`, `computed()`, `set()`, `update()` pour la gestion d'état réactive
- ✅ **Data binding** : interpolation, property binding `[src]`, event binding `(click)`, `[class.active]`
- ✅ **Control flow** : `@for` avec `track`, `@if`/`@else`, `@empty`
- ✅ **Pipes** : `DatePipe`, `CurrencyPipe` (Dinars Tunisiens TND), `UpperCasePipe`
- ✅ **Communication parent/enfant** : `input()` et `output()`
- ✅ **Routage** : `provideRouter()`, `router-outlet`, `routerLink`, `routerLinkActive`, route paramétrée `/events/:id`
- ✅ **withComponentInputBinding()** pour lier les paramètres de route aux inputs
- ✅ **Lazy loading** de la page À propos avec `loadComponent()`
- ✅ **Filtre par catégorie** (Tous / Atelier / Conférence / Rencontre / Compétition)
- ✅ **Système de favoris** avec compteur en temps réel
- ✅ **Design responsive** (mobile et desktop)
- ✅ **8 événements** dans 4 catégories, dont 4 gratuits et prix en Dinars
