import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  newSentences: string = "";
  constructor(private service : ServiceService){}
  writter(sentences: string){
    let tab  = sentences.split("");
    let newTab:string[] = [];
    let i = 0;
    setInterval(() => {
      if (i < tab.length){
        newTab.push(tab[i]);
        this.newSentences = newTab.join("")
        i++;
      }
    }, 500);
  }
}
