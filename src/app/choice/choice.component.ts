import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { fadeInAnimation } from '../animation.module';
import { Categorie, SousThemes, Themes } from '../categorie';
import { CATEGORIES, THEMES } from '../mock.categorie';
import { ServiceService } from '../service.service';
import { FormsModule } from '@angular/forms';

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
      bonj: boolean = false;
      cate: boolean = false;
      seeTheme : boolean = false;
      seeTitle : boolean = false;
      selectedCategorie!: Categorie;
      categorieThemes!: Themes;
      categories: Categorie[] = CATEGORIES
      themes: Themes[] = THEMES;
      selectedTheme: string[] = [];
      inputValue: string = "";
      onSelect(categorie: Categorie) {
            this.selectedCategorie = categorie;
            // this.categories.forEach(el => {
            //       el.state = false;
            // })
            this.selectedCategorie.state = true;
            this.selectedCategorie.choose = true;
            this.categorieThemes = this.service.getCatTheme(this.selectedCategorie.id);
            this.retard(this.categorieThemes.themes);
            setTimeout(() => {
                  this.seeTheme = true;
                  // this.retard(this.categories)
            }, 1000);
      }
      retard(array: SousThemes[] | Categorie[]) {
            let i = 0
            setInterval(() => {
                  if (i < array.length) {
                        array[i].state = true;
                        console.log(array[i]);
                        i++
                  }
            }, 100);
      }
      ngOnInit(): void {
            setTimeout(() => {
                  this.bonj = true;
            }, 1000);
            setTimeout(() => {
                  this.cate = true;
                  this.retard(this.categories)
            }, 2000);
      }
      startForm(bool : boolean){
            this.templ.emit(bool);
      }
      themer(){
            this.selectedTheme.push(this.inputValue);
            
            this.inputValue = "";
            setTimeout(() => {
                  this.seeTitle = true;
            }, 1000);
            
      }
      ngOnChanges() {
            if (this.selectedCategorie) {
                  
            }
      }
}
