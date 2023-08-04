import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { fadeInAnimation } from '../animation.module';
import { Categorie, SousThemes, Themes } from '../categorie';
import { CATEGORIES, THEMES } from '../mock.categorie';
import { ServiceService } from '../service.service';

@Component({
      selector: 'app-choice',
      templateUrl: './choice.component.html',
      styleUrls: ['./choice.component.css'],
      // animations: [fadeInAnimation]
})
export class ChoiceComponent implements OnInit {
  constructor(private service: ServiceService) { };
  @Output() form : EventEmitter<boolean> = new EventEmitter();
  @Output() templ : EventEmitter<boolean> = new EventEmitter();
      index: number = 0;
      temp: boolean = true;
      selectedCategorie!: Categorie;
      categorieThemes!: Themes;
      categories: Categorie[] = CATEGORIES
      themes: Themes[] = THEMES;
      onSelect(categorie: Categorie) {
            this.selectedCategorie = categorie;
            // this.categories.forEach(el => {
            //       el.state = false;
            // })
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
                        console.log(array[i]);
                        i++
                  }
            }, 500);
      }
      ngOnInit(): void {
            this.retard(this.categories)
      }
      startForm(bool : boolean){
        this.templ.emit(bool);
      }
      ngOnChanges() {
      }
}
