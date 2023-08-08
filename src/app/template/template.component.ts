
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { fadeInAnimation } from '../animation.module';
import { CAROUSELS } from '../mock';
import { Carousel } from '../models';
import { ServiceService } from '../service.service';
@Component({
      selector: 'app-template',
      templateUrl: './template.component.html',
      styleUrls: ['./template.component.css'],
      animations: [fadeInAnimation]
})
export class TemplateComponent implements OnInit{
      @Input() showColor!: boolean;
      color: boolean = false;
      patTemp:boolean =  false;
      constructor(
            private service: ServiceService,
      ) { }
      ngOnInit(): void {
            setTimeout(() => {
                  this.patTemp = true;
            }, 4000);
      }
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
