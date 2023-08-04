import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fadeInAnimation } from '../animation.module'

@Component({
      selector: 'app-formulaire',
      templateUrl: './formulaire.component.html',
      styleUrls: ['./formulaire.component.css'],
      animations: [fadeInAnimation]
})
export class FormulaireComponent {

      name!: string;
      surname!: string;
      email!: string;
      myForm: FormGroup;

      constructor(
            private formBuilder: FormBuilder
      ) {
            this.myForm = this.formBuilder.group({
                  name: ['', Validators.required],
                  surname: ['', Validators.required],
                  email: ['', [Validators.required, Validators.email]]
            });

      };
      onSubmit() {
            if (this.myForm.valid) {
                  console.log(this.myForm.value);
                  // Effectuez des actions, telles que l'envoi des données au serveur.
            }
      }
}
