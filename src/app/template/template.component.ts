import { Component, Input } from '@angular/core';
import { ServiceService } from '../service.service';
import { fadeInAnimation } from '../template.animation.component';
import { AnimationType } from '../animation.module';
import { Slide } from '../categorie';

@Component({
      selector: 'app-template',
      templateUrl: './template.component.html',
      styleUrls: ['./template.component.css'],
      animations: [fadeInAnimation]
})
export class TemplateComponent {
      constructor(private service: ServiceService) { }

      @Input() slides!: Slide[];
      @Input() animationType = AnimationType.Scale;

      currentSlide = 0;

      onPreviousClick() {
            const previous = this.currentSlide - 1;
            this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
            console.log("previous clicked, new current slide is: ", this.currentSlide);
      }

      onNextClick() {
            const next = this.currentSlide + 1;
            this.currentSlide = next === this.slides.length ? 0 : next;
            console.log("next clicked, new current slide is: ", this.currentSlide);
      }

      ngOnInit() {
            this.preloadImages(); // for the demo
      }

      preloadImages() {
            for (const slide of this.slides) {
                  new Image().src = slide.src;
            }
      }
}
