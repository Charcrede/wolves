import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  tempTab: string[] = []

  showSlow(text: string): string{
    text.split("")
    return text
  }

}
