import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
// import { fadeInAnimation } from '../animation.module';
import { Categorie, SousThemes, Themes } from '../categorie';
import { CATEGORIES, THEMES } from '../mock.categorie';
import { ServiceService } from '../service.service';
import { FormsModule } from '@angular/forms';
import { CAROUSELS } from '../mock';
import { Carousel } from '../models';
import { count } from 'rxjs';
// if (choice) {
//       choice.scrollTo(10000,0);

//       // input.scrollBy({top: 10000000})
//       // input.scrollIntoView();
// }

@Component({
    selector: 'app-choice',
    templateUrl: './choice.component.html',
    styleUrls: ['./choice.component.css'],
    // animations: [fadeInAnimation]
})
export class ChoiceComponent implements OnInit, OnChanges {
    constructor(private service: ServiceService) {
        let choice = document.getElementById('choice')
        console.log(choice);

    };
    @Output() form: EventEmitter<boolean> = new EventEmitter();
    @Output() templ: EventEmitter<boolean> = new EventEmitter();
    index: number = 0;
    temp: boolean = true;
    bonj: boolean = false;
    cate: boolean = false;
    seeTheme: boolean = false;
    seeTitle: boolean = false;
    template: boolean = false;
    colored: boolean = false;
    color: boolean = false;
    seeColor: boolean = false;
    fiText: boolean = false;
    confirm: number = 0;
    selectedCategorie!: Categorie;
    categorieThemes!: Themes;
    categories: Categorie[] = CATEGORIES
    themes: Themes[] = THEMES;
    selectedTheme: string[] = [];
    inputValue: string = "";
    time: any = "";
    minute: any = "";

    heure: any = this.time + this.minute

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
    startForm(bool: boolean) {
        this.form.emit(bool);
    }
    startTemp(bool: boolean) {
        this.templ.emit(bool);
    }
    themer() {
        this.selectedTheme.push(this.inputValue);
        this.confirm++;
        console.log(this.confirm);

        if (this.confirm === 3 && this.fiText) {
            this.template = true;
        }
        if (this.confirm === 2) {
            setTimeout(() => {
                this.fiText = true;
            }, 1000);
        }
        if (this.template) {
            setTimeout(() => {
                this.seeColor = true;
            }, 5000);
        }
        if (this.template) {
            setTimeout(() => {
                this.colored = true
            }, 6000);
        }
        this.inputValue = "";
        setTimeout(() => {
            this.seeTitle = true;
        }, 1000);

    }
    botText: string = "Bonjour chers clients"
    carousels: Carousel[] = CAROUSELS;
    getCarousels(): Carousel[] {
        return CAROUSELS;
    }

    ngOnChanges(): void {
        console.log('change marche');

    }

    times() {
        let time = new Date()
        let hours = 0;
        return hours = time.getHours();
    }

    minutes() {
        let minute = new Date();
        let seconds = 0;
        seconds = minute.getSeconds();
        this.time = seconds;
        return seconds = minute.getSeconds();
    }
    hideColor() {
        this.color = false;
    }
    showColor() {
        this.color = true;
    }

}
