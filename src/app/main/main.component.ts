import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  botText: string = "Bonjour chers clients"

  constructor(private service : ServiceService){}

  

}
