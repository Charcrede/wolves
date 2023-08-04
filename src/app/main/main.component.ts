import { Component, Input } from '@angular/core';
import { ServiceService } from '../service.service';
import { CAROUSELS } from '../mock';
import { Carousel } from '../models';
import { fadeInAnimation } from '../animation.module';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [fadeInAnimation]
})
export class MainComponent {
  @Input() getStarted!: boolean;
  template: boolean = false;
  formulaire: boolean = false;
  botText: string = "Bonjour chers clients"
  carousels: Carousel[] = CAROUSELS;
  constructor(private service : ServiceService){}

  getCarousels(): Carousel[] {
    return CAROUSELS;
  }
  showTemp($event: any){
    this.template = $event;
  }

}
