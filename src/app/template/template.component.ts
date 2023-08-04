
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
      checked1:boolean =  false;
      checked2:boolean =  false;
      checked3:boolean =  false;
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
      select1(){
            this.checked1 = true;
      }
      select2(){
            this.checked2 = true;
      }
      select3(){
            this.checked3 = true;
      }

}
