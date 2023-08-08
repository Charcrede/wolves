import { Component, OnInit, OnChanges} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fadeInAnimation } from '../animation.module'
import { userInfos } from '../user.Info';
@Component({
      selector: 'app-formulaire',
      templateUrl: './formulaire.component.html',
      styleUrls: ['./formulaire.component.css'],
      animations: [fadeInAnimation]
})
export class FormulaireComponent implements OnInit, OnChanges {

      userModel = new userInfos('King', 'TCHALLA','king@wakanda');

      submitted = false;

      FirstName!:string | null;
      LastName!: string | null;
      Email!: string | null;

      ngOnInit():void {
            if(localStorage){
                  console.log(`Les information de l'utilisateur sont:
                  Nom: ${this.LastName}
                  Prenom: ${this.FirstName}
                  Email: ${this.Email}`);
            }
      }

      onSubmit(){
            this.submitted = true;                        
      }

      newUser(){
            this.userModel = new userInfos(`${this.userModel.firstName}`, `${this.userModel.lastName}`, `${this.userModel.mail}`);
            
            localStorage.setItem('prenon', this.userModel.firstName);
            this.FirstName = localStorage.getItem('prenon');
            localStorage.setItem('nom', this.userModel.lastName);
            this.LastName = localStorage.getItem('nom');
            localStorage.setItem('email', this.userModel.mail);
            this.Email = localStorage.getItem('email');
                      

            console.log(this.userModel);
      }

      ngOnChanges():void{
            if(localStorage === null || localStorage === undefined){
                  console.log("Donnée vide");                  
            } else {
                  console.log(`Les information de l'utilisateur sont:
            Nom: ${this.LastName}
            Prenom: ${this.FirstName}
            Email: ${this.Email}`);
            }
            
      }

     



      // name!: string;
      // surname!: string;
      // email!: string;
      // myForm: FormGroup;

      // constructor(
      //       private formBuilder: FormBuilder
      // ) {
      //       this.myForm = this.formBuilder.group({
      //             name: ['', Validators.required],
      //             surname: ['', Validators.required],
      //             email: ['', [Validators.required, Validators.email]]
      //       });

      // };
      // onSubmit() {
      //       if (this.myForm.valid) {
      //             console.log(this.myForm.value);
      //             // Effectuez des actions, telles que l'envoi des données au serveur.
      //       }
      // }


}
