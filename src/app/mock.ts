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

export const CAROUSELS: Carousel[] = [
      {
            id: 1,
            name: 'Carousel 1',
            images: [
                  { id: 1, imageUrl: '../assets/img-carousel/carousel1.jpg' },
                  { id: 2, imageUrl: '../assets/img-carousel/carousel2.jpg' },
                  { id: 3, imageUrl: '../assets/img-carousel/carousel3.jpg' },
            ],
      },
     
];