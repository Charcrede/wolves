import { Component } from '@angular/core';
import { fadeInAnimation } from '../animation.module';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [fadeInAnimation]
})
export class HeaderComponent {
  constructor(private service : ServiceService){}
}
