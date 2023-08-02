import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent {
  constructor(private service : ServiceService){}
}
