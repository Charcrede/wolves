import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fadeInAnimation } from '../animation.module'
import { userInfos } from '../user.Info';
@Component({
      selector: 'app-formulaire',
      templateUrl: './formulaire.component.html',
      styleUrls: ['./formulaire.component.css'],
      animations: [fadeInAnimation]
})
export class FormulaireComponent {

      userModel = new userInfos('King', 'TCHALLA','king@wakanda');

      submitted = false;

      onSubmit(){
            this.submitted = true;                        
      }

      newUser(){
            this.userModel = new userInfos(`${this.userModel.firstName}`, `${this.userModel.lastName}`, `${this.userModel.mail}`);
            console.log(this.userModel);
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
      @ViewChild ('formulaire') formulaire !: ElementRef;
      ngAfterViewInit():void{
          this.scrollToBottom();
        }
        scrollToBottom(){
          const container = this.formulaire.nativeElement;
          container.scrollTop = container.scrollHeight;
          console.log(container);
          
        }

}

