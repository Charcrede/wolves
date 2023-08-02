import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  constructor(private service : ServiceService){}
}
