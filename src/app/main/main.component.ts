import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { CAROUSELS } from '../mock';
import { Carousel } from '../models';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  botText: string = "Bonjour chers clients"
  carousels: Carousel[] = CAROUSELS;
  constructor(private service : ServiceService){}

  getCarousels(): Carousel[] {
    return CAROUSELS;
  }

}
