import { EventItem } from '../models/event.model';

export const EVENTS: EventItem[] = [
  {
    id: 1,
    title: 'Atelier TypeScript',
    category: 'Atelier',
    date: '2026-11-15',
    place: 'Campus — Salle B12',
    price: 0,
    imageUrl: 'workshop_typescript.jpg',
    description:
      'Découvrez les bases de TypeScript lors de cet atelier pratique. Vous apprendrez la syntaxe, le typage statique, les interfaces et les génériques à travers des exercices concrets.'
  },
  {
    id: 2,
    title: 'Conférence Intelligence Artificielle',
    category: 'Conférence',
    date: '2026-11-22',
    place: 'Amphithéâtre Turing',
    price: 15,
    imageUrl: 'conference_ai.jpg',
    description:
      'Une conférence passionnante sur les dernières avancées de l\'intelligence artificielle, le machine learning et leurs applications dans le monde réel.'
  },
  {
    id: 3,
    title: 'Soirée Networking Tech',
    category: 'Rencontre',
    date: '2026-12-01',
    place: 'Espace Coworking — Hall A',
    price: 0,
    imageUrl: 'meetup_networking.jpg',
    description:
      'Venez échanger avec des professionnels du secteur tech lors de cette soirée networking conviviale. Apéritif offert et échanges informels garantis.'
  },
  {
    id: 4,
    title: 'Hackathon 48h',
    category: 'Compétition',
    date: '2026-12-10',
    place: 'Campus — Bâtiment Innovation',
    price: 25,
    imageUrl: 'competition_hackathon.jpg',
    description:
      'Participez à 48 heures de développement intensif en équipe. Créez une application innovante et tentez de remporter les prix du jury !'
  },
  {
    id: 5,
    title: 'Atelier UX / UI Design',
    category: 'Atelier',
    date: '2027-01-18',
    place: 'Studio Créatif — Salle D4',
    price: 0,
    imageUrl: 'workshop_design.jpg',
    description:
      'Initiez-vous aux principes du design UX/UI : wireframing, prototypage, tests utilisateurs et outils modernes comme Figma.'
  },
  {
    id: 6,
    title: 'Tournoi Sportif Inter-Filières',
    category: 'Compétition',
    date: '2027-01-25',
    place: 'Stade Universitaire',
    price: 0,
    imageUrl: 'competition_sport.jpg',
    description:
      'Le grand tournoi sportif annuel ! Football, basketball et athlétisme au programme. Venez supporter votre filière ou participez en tant qu\'athlète.'
  },
  {
    id: 7,
    title: 'Conférence Cybersécurité',
    category: 'Conférence',
    date: '2027-02-05',
    place: 'Amphithéâtre Lovelace',
    price: 20,
    imageUrl: 'conference_ai.jpg',
    description:
      'Plongez dans l\'univers de la cybersécurité : menaces actuelles, bonnes pratiques, ethical hacking et carrières dans le domaine.'
  },
  {
    id: 8,
    title: 'Game Jam Weekend',
    category: 'Rencontre',
    date: '2027-02-15',
    place: 'Médiathèque Numérique',
    price: 10,
    imageUrl: 'competition_hackathon.jpg',
    description:
      'Créez un jeu vidéo en un week-end ! Développeurs, graphistes et musiciens se rassemblent pour un marathon créatif ludique.'
  }
];
