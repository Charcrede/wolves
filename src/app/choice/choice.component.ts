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
  constructor(private service: ServiceService) { } ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ;
  categorie: Categorie[] = CATEGORIES
  themes: Themes[] = THEMES;
  pstate: boolean = false;
  onSelect(categorie: Categorie) {
    this.selectedCategorie = categorie;
    this.categorie.forEach(el => {
      el.state = !el.state;
    })
    this.selectedCategorie.state = true;
    this.selectedCategorie.choose = true;
    this.categorieThemes = this.service.getCatTheme(this.selectedCategorie.id);
    this.retard(this.categorieThemes.themes);
    setTimeout(() => {
      this.pstate = true
    }, 1000);
  }
  retard(array: SousThemes[] | Categorie[]) {
    let i = 0
    setInterval(() => {
      if (i < array.length) {
        array[i].state = true;
        i++
      }
    })
  }}
