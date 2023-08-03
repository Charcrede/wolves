import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { Categorie, SousThemes, Themes } from '../categorie';
import { CATEGORIES, THEMES } from '../mock.categorie';
import { ServiceService } from '../service.service';

@Component({
      selector: 'app-choice',
      templateUrl: './choice.component.html',
      styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {
      index: number = 0;
      selectedCategorie!: Categorie;
      categorieThemes!: Themes;
      constructor(private service: ServiceService) { };
      categorie: Categorie[] = CATEGORIES
      themes: Themes[] = THEMES;
      onSelect(categorie: Categorie) {
            this.selectedCategorie = categorie;
            this.categorie.forEach(el => {
                  el.state = false;
            })
            this.selectedCategorie.state = true;
            this.selectedCategorie.choose = true;
            this.categorieThemes = this.service.getCatTheme(this.selectedCategorie.id);
            this.retard(this.categorieThemes.themes);
      }
      retard(array: SousThemes[] | Categorie[]) {
            let i = 0
            setInterval(() => {
                  if (i < array.length) {
                        array[i].state = true;
                        i++
                  }
            }, 500);
      }
      ngOnInit(): void {
            this.retard(this.categorie)
      }
      ngOnChanges() {
      }
}
