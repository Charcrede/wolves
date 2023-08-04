import { trigger, style, animate, transition, query, stagger } from '@angular/animations';

export const fadeInAnimation = trigger('fadeInAnimation', [
      transition(':enter', [
            style({ opacity: 0 }),
            animate('3s ease', style({ opacity: 1 })),
            query(':enter', [
                  style({ opacity: 0, transform: 'translateX(-500px)' }),
                  stagger(100, [
                        animate('300ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
                  ])
            ], { optional: true }),
            query(':leave', [
                  animate('300ms', style({ opacity: 0 }))
            ], { optional: true }),
      ])
])