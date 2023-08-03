// mock.ts

import { Category, Theme, Carousel, Image } from './models';

export const categories: Category[] = [
      { id: 1, name: 'Catégorie 1' },
      { id: 2, name: 'Catégorie 2' },
      // Ajoutez les autres catégories ici
];

export const themes: Theme[] = [
      { id: 1, name: 'Thème 1', categoryId: 1 },
      { id: 2, name: 'Thème 2', categoryId: 1 },
      // Ajoutez les autres thèmes ici
];

export const carousels: Carousel[] = [
      {
            id: 1,
            name: 'Carousel 1',
            images: [
                  { id: 1, imageUrl: '../assets/img-carousel/mountains.jpg' },
                  { id: 2, imageUrl: '../assets/img-carousel/nature.jpg' },
                  { id: 3, imageUrl: '../assets/img-carousel/snow.jpg' },
            ],
      },
      {
            id: 2,
            name: 'Carousel 2',
            images: [
                  { id: 4, imageUrl: '../assets/img-carousel/snow.jpg' },
                  { id: 5, imageUrl: '../assets/img-carousel/nature.jpg' },
                  { id: 6, imageUrl: '../assets/img-carousel/mountains.jpg' },
            ],
      },
      // Ajoutez les autres carousels ici
];