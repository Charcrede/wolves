import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChoiceComponent } from './choice/choice.component';
import { TemplateComponent } from './template/template.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
      declarations: [
            AppComponent,
            HeaderComponent,
            ChoiceComponent,
            TemplateComponent,
            FormulaireComponent,
            MainComponent,
      ],
      imports: [
            BrowserModule,
            AppRoutingModule,
            BrowserAnimationsModule,
            ReactiveFormsModule,
            FormsModule
      ],
      providers: [],
      bootstrap: [AppComponent]
})
export class AppModule { }
