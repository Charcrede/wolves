import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../animation.module';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [fadeInAnimation]
})
export class HeaderComponent implements OnInit {
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
    }, 70);
  }
  ngOnInit(): void {
    this.writter("Vous êtes une entreprise petite ou grande, un particulier, etc... nous vous proposons une solution numérique adapter à votre besoins et à vos exigences pour vous faire connaître un site de votre choix, c'est vous le boss ! ")
  }
}
