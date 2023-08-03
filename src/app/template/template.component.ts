
import { Component, Input } from '@angular/core';
import { CAROUSELS } from '../mock';
import { Carousel } from '../models';
import { ServiceService } from '../service.service';

@Component({
      selector: 'app-template',
      templateUrl: './template.component.html',
      styleUrls: ['./template.component.css']
})
export class TemplateComponent {

      constructor(
            private service: ServiceService,
      ) { }
      carousels: Carousel[] = CAROUSELS;
      @Input() carousel!: Carousel;

      currentIndex = 0;

      previousSlide(): void {
            this.currentIndex = (this.currentIndex - 1 + this.carousel.images.length) % this.carousel.images.length;
      }

      nextSlide(): void {
            this.currentIndex = (this.currentIndex + 1) % this.carousel.images.length;
      }

}
