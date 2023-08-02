import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {
  constructor(private service : ServiceService){}
}
