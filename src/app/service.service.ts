import { Injectable } from '@angular/core';
import { Categorie } from './categorie';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  finTab!: Categorie[];
  index: number = 0;
  constructor() { }
  liShower(tab: Array<Categorie>, tab2: Categorie[]) {
    setInterval(() => {
      if (this.index < tab.length) {
        console.log(this.index);
        console.log(tab[this.index]);
        this.index++;

        tab2.push(tab[this.index]);
        console.log(tab2);

      }
    }, 1000);
  }
  tempTab: string[] = []

  showSlow(text: string): string {
    text.split("")
    return text
  }

}

