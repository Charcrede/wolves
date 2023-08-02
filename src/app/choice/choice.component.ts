import { Component, OnInit } from '@angular/core';
import { Categorie } from '../categorie';
import { CATEGORIES } from '../mock.categorie';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {
  index: number = 0;
  constructor(private service: ServiceService) { };
  categories: Categorie[] = CATEGORIES
  categorie: Array<Categorie> = [];
  ngOnInit(): void {
  }
}
