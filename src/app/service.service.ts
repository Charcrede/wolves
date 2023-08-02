import { Injectable } from '@angular/core';
import { Categorie } from './categorie';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  finTab!: Categorie[];
  index: number = 0;
  constructor() { }
  tempTab: string[] = []

  showSlow(text: string): string {
    text.split("")
    return text
  }

}

