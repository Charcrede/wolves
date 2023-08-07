import { Component, Input, OnInit } from '@angular/core';
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
export class MainComponent implements OnInit{
  @Input() getStarted!: boolean;
  template: boolean = false;
  formulaire: boolean = false;
  constructor(private service : ServiceService){}
  ngOnInit(): void {
    window.scroll(10000, 0)
  }
 
  showTemp($event: any){
    this.template = $event;
  }
  showform($event: any){
    this.formulaire = true;
  }
}
