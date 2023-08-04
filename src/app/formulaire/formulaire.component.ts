import { Component } from '@angular/core';
import { fadeInAnimation } from '../animation.module';
import { ServiceService } from '../service.service';

@Component({
      selector: 'app-formulaire',
      templateUrl: './formulaire.component.html',
      styleUrls: ['./formulaire.component.css'],
      animations: [fadeInAnimation]
})
export class FormulaireComponent {
      
      constructor(private service: ServiceService) { }

      name!: string;
      surname!: string;
      email!: string;
      
      getData () : void {
            console.log('name');
            console.log('surname');
            console.log('email');
      }


}
