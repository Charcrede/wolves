import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { fadeInAnimation } from '../animation.module';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [fadeInAnimation]
})
export class HeaderComponent implements OnInit {
  start: boolean = true;
  @Output() starte: EventEmitter<boolean> = new EventEmitter();
  newSentences: string = "";
  constructor(private service : ServiceService){}
  writter(sentences: string){
    let tab  = sentences.split("");
    let newTab:string[] = [];
    let i = 0;
    setInterval(() => {
      if (i < tab.length){
        newTab.push(tab[i]);
        this.newSentences = newTab.join("");
        i++;
      }
    }, 70);
  }
  started(start: boolean){
    this.starte.emit(start);
  }
  ngOnInit(): void {
    this.writter("Bienvenue sur notre site vitrine Chatbot ! Notre plateforme innovante vous permet de générer des sites Web sur mesure en quelques étapes simples. Grâce à notre Chatbot intuitif, vous serez guidé tout au long du processus de création. Choisissez parmi une variété de modèles personnalisables. Que vous soyez novice en développement Web ou expert, notre Chatbot convivial vous aidera à créer un site professionnel qui répond à vos besoins spécifiques. Essayez-le dès maintenant et découvrez la simplicité de la conception de sites Web avec notre Chatbot révolutionnaire")
  }
}
